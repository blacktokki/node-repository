import React, { Component } from 'react';
import { Platform, StyleSheet, View, ScrollView, TouchableOpacity, Animated, GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

interface PanelProp<T>{
    item: T,
    number: number,
    itemStyles: {[key:string]:StyleProp<ViewStyle>},
    closeAll: ()=>void,
    renderItemHeader:(item:T)=>React.ReactNode,
    renderItemBody: (item:T)=>React.ReactNode,
}

interface PanelState{
    expanded: boolean
    maxHeight: number | null,
    style:any
}

class Accordion_Panel<T> extends Component<PanelProp<T>, PanelState> {
  state:PanelState = {
    expanded: false,  
    maxHeight: null,
    style: {
        overflow: 'hidden'
    }
  }
  setExpand(value:boolean){
    this.setState({expanded:value})
  }

  componentDidUpdate(){
    if (this.state.style.height !== undefined && this.state.maxHeight !== null){
      //console.log(this.state.expanded, this.state.style.height._value, this.state.maxHeight)
      if (this.state.expanded && this.state.style.height._value == 0) {
        Animated.timing(this.state.style.height, {
          toValue: this.state.maxHeight,
          duration: 200,
          useNativeDriver:true,
        }).start();
      }
      else if (!this.state.expanded && this.state.style.height._value == this.state.maxHeight){
        Animated.timing(this.state.style.height, {
          toValue: 0,
          duration: 200,
          useNativeDriver:true,
        }).start();
      }
    }
    else if(this.state.maxHeight !== null){
      this.setState({
        style:{
          overflow: 'hidden',
          height: new Animated.Value(0)
        }
      })
    }
  }
  onPress(event:GestureResponderEvent){
    this.props.closeAll()
    this.setExpand(true)
  }
 
  render() {
    return (
      <View style={[this.props.itemStyles.Panel_Holder, this.state.maxHeight== null?{opacity:0}:{opacity:100}]}>
        <TouchableOpacity activeOpacity={0.7} onPress={this.onPress.bind(this)} style={this.props.itemStyles.Btn}>
          {this.props.renderItemHeader(this.props.item)}
        </TouchableOpacity>
        <Animated.View 
          style={this.state.style} 
          onLayout={(event) => {
          var {x, y, width, height} = event.nativeEvent.layout;
          if (this.state.maxHeight == null)
            this.setState({
              maxHeight: height
            })
        }}>
          {this.props.renderItemBody(this.props.item)}
        </Animated.View>
      </View>
    );
  }
}

export type RenderItemPartParams<T> = {
    item:T,
    index?:number|undefined,
  }

type Props<T, R> = {
    data:T[],
    dataCallback:(data:T[])=>void,
    scrollEnabled?:boolean,
    sortEnabled:boolean,
    renderItemHeader:(params:RenderItemPartParams<T> & R)=>React.ReactNode,
    renderItemBody: (params:RenderItemPartParams<T> & R)=>React.ReactNode,
    keyExtractor:(item:T, index:number)=>string,
    itemStyles: {[key:string]:StyleProp<ViewStyle>},
  }

export default class Accordion<T, R, P> extends Component<Props<T, R> & P> {
  constructor(props:Props<T, R> & P) {
    super(props);
    this.childrenRef = []
  }
  childrenRef: (Accordion_Panel<T>| null)[];

  update_Layout = (index:number) => {
    this.childrenRef.forEach((ref) => {
      if (ref && ref.state.expanded){
        ref.setExpand(false)
      }
    });
  }
  
  renderItem = (item:T, key:number) => (
    <Accordion_Panel<T>
        ref={ref=>{this.childrenRef.push(ref)}}
        key={key}
        number={key}
        itemStyles={this.props.itemStyles}
        closeAll={this.update_Layout.bind(this, key)}
        item={item}
        renderItemHeader={(_item) => this.props.renderItemHeader({item:_item, index:key} as RenderItemPartParams<T> & R)}
        renderItemBody={(_item) => this.props.renderItemBody({item:_item, index:key} as RenderItemPartParams<T> & R)}
    />)

  render() {
    return (
      <View style={styles.MainContainer}>
        <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}>
          {
            this.props.data.map(this.renderItem)
          }
        </ScrollView>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  }
});