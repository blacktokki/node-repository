import  React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { observer,inject } from 'mobx-react';


export default inject("scroll")(
    observer(({scroll, children})=>{
        const [ scrollEnabled , setscrollEnabled ] = useState(true);
        return (
            <View 
                ref={(viewRef)=>{this.viewRef = viewRef}}
                onLayout={()=> {this.viewRef.measure((x, y, width, height, pageX, pageY) => {this.scrollRef.pageY = pageY})}}
                style={{flex:1}}
            >
            <ScrollView
                bounces={false}
                scrollEventThrottle={1}
                ref={(scrollRef)=> {
                    //if (this.props.onScrollRef) this.props.onScrollRef(scrollRef)
                    if (scrollRef) {
                        scrollRef.setscrollEnabled = setscrollEnabled
                        scroll.refs[0] = scrollRef
                        this.scrollRef = scrollRef
                        return this.scrollRef
                    }    
                }}
                scrollEnabled = {scrollEnabled}
                onScroll={scroll.onScrollListener}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                {children}
            </ScrollView>
            </View>
        )
    })
)