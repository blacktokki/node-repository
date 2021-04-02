import  React, { useState, useEffect, useRef } from 'react';
import {Dimensions, View, Animated, TouchableOpacity } from 'react-native'
import {AutoDragSortableView} from 'react-native-drag-sort'

const {width} = Dimensions.get('window')
const defaultZIndex = 8

class CustomAutoDragSortableView2 extends AutoDragSortableView{
  isStartupAuto = () => {
      if (this.curScrollData != this.props.scrollStore.curScrollData)
        this.curScrollData = this.props.scrollStore.curScrollData
      if (this.curScrollData == null) {
          return false;
      }
      return true;
  }

  render() {
    this.scrollRef = this.props.scrollStore.refs[0]
    if (this.state.scrollEnabled != this.scrollRef.props.scrollEnabled)
      this.scrollRef.setscrollEnabled(this.state.scrollEnabled)
    return (
        <View
            ref={(ref)=>this.sortParentRef=ref}
            style={{
              //width: this.props.parentWidth,
              height: this.state.height,
            }}
            onLayout={()=> {this.sortParentRef.measure((x, y, width, height, pageX, pageY) => {
              this.props.scrollStore.handleHeaderViewHeight(pageY - this.scrollRef.pageY)})}}
            >
            {this._renderItemView()}
        </View>
    )
  }

  _renderItemView = () => {
    const {maxScale, minOpacity} = this.props
    const inputRange = maxScale >= 1 ? [1, maxScale] : [maxScale, 1]
    const outputRange = maxScale >= 1 ? [1, minOpacity] : [minOpacity, 1]
    return this.state.dataSource.map((item,index)=>{
        const transformObj = {}
        transformObj[this.props.scaleStatus] = item.scaleValue
        const key = this.props.keyExtractor ? this.props.keyExtractor(item.data,index) : item.originIndex
        return (
            <Animated.View
                key={key}
                ref={(ref) => this.sortRefs.set(key,ref)}
                {...this._panResponder.panHandlers}
                style={[{
                    position: 'absolute',
                    zIndex: defaultZIndex,
                  },{
                    marginTop: this.props.marginChildrenTop,
                    marginBottom: this.props.marginChildrenBottom,
                    marginLeft: this.props.marginChildrenLeft,
                    marginRight: this.props.marginChildrenRight,
                    left: item.position.x,
                    top: item.position.y,
                    opacity: item.scaleValue.interpolate({inputRange,outputRange}),
                    transform: [transformObj],
                    flexDirection:'row'
                    
                }]}>
                <TouchableOpacity
                    activeOpacity = {1}
                    delayLongPress={this.props.delayLongPress}
                    onPressOut={()=> this.onPressOut()}
                    onLongPress={()=>this.startTouch(index)}
                    style={{flex:1}}
                    onPress={()=>{
                        if (this.props.onClickItem) {
                            this.isHasMeasure = true
                            this.props.onClickItem(this.getOriginalData(),item.data,index)
                        }
                    }}>
                    {this.props.renderItem(item.data,index)}
                </TouchableOpacity>
            </Animated.View>
        )
    })
  }
}

export default (props)=>{
  const results = {}
  props.data.forEach((item,idx) => {
    results[idx]=item
  });
  return (
    <CustomAutoDragSortableView2
      dataSource={props.data}
      headerViewHeight={props.scroll.headerViewHeight}
      parentWidth={width}
      childrenWidth= {width}
      childrenHeight={props.childrenHeight}
      autoThrottle={20}
      autoThrottleDuration={2}
      scrollStore={props.scroll}
      onDataChange={props.onDataChange}
      keyExtractor={(item,index)=> index} // FlatList作用一样，优化
      renderItem={(data, index) => props.renderRow({data:data, index:index})}
  />
  )

}
