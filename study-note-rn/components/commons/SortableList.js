import React from 'react'
import {Dimensions, View, ScrollView} from 'react-native'
import {AutoDragSortableView} from 'react-native-drag-sort'

const {width} = Dimensions.get('window')

const parentWidth = width
const childrenWidth = width - 20
const childrenHeight = 48

class CustomAutoDragSortableView extends AutoDragSortableView{
  render() {
    return (
        <ScrollView
            bounces={false}
            scrollEventThrottle={1}
            scrollIndicatorInsets={this.props.scrollIndicatorInsets}
            ref={(scrollRef)=> {
                if (this.props.onScrollRef) this.props.onScrollRef(scrollRef)
                this.scrollRef = scrollRef
                return this.scrollRef
            }}
            scrollEnabled = {this.state.scrollEnabled}
            onScroll={this.onScrollListener}
            style={{height:300}}
        >  
            {this.props.renderHeaderView ? this.props.renderHeaderView : null} 
            <View
                //ref={(ref)=>this.sortParentRef=ref}
                style={{
                  width: this.props.parentWidth,
                  height: this.state.height
                }}
                //onLayout={()=> {}}
                >
                {this._renderItemView()}
            </View>
            {this.props.renderBottomView ? this.props.renderBottomView : null}
        </ScrollView>
    )
}

}


export default (props)=>{
  const results = {}
  props.data.forEach((item,idx) => {
    results[idx]=item
  });
  return (
    <CustomAutoDragSortableView 
      dataSource={props.data}
      marginChildrenBottom={10}
      marginChildrenRight={10}
      marginChildrenLeft = {10}
      marginChildrenTop={10}
      parentWidth={parentWidth}
      childrenWidth= {childrenWidth}
      childrenHeight={childrenHeight}
      
      onDataChange = {(data)=>{
          if (data.length != this.state.data.length) {
              this.setState({
                  data: data
              })
          }
      }}
      keyExtractor={(item,index)=> index} // FlatList作用一样，优化
      renderItem={props.renderRow}
  />
  )
}
