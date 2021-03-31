import Header  from './Header';
import Main  from './Main';
import Footer  from './Footer';
import  React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { observer,inject } from 'mobx-react';
import {AutoDragSortableView} from 'react-native-drag-sort'

/*
export default class Content extends AutoDragSortableView{


    _renderItemView()

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
}*/


export default inject("scroll")(
    observer(({scroll, children})=>{
        const [ scrollEnabled , setscrollEnabled ] = useState(true);
        return (
            <ScrollView
                bounces={false}
                scrollEventThrottle={1}
                ref={(scrollRef)=> {
                    //if (this.props.onScrollRef) this.props.onScrollRef(scrollRef)
                    if (scrollRef) scrollRef.setscrollEnabled = setscrollEnabled
                    this.scrollRef = scrollRef
                    scroll.refs[0] = scrollRef
                    return this.scrollRef    
                }}
                scrollEnabled = {scrollEnabled}
                onScroll={scroll.onScrollListener}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                {children}
            </ScrollView>
        )
    })
)