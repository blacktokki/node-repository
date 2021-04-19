import  React, { useState, useRef, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { observer,inject } from 'mobx-react';


export default inject("_ref")(
    observer(({_ref, children})=>{
        const [ scrollEnabled , setscrollEnabled ] = useState(true);
        const [ constPageY, setConstPageY ] = useState(null)
        const viewRef = useRef()
        const scrollRef = useRef()
        useEffect(()=>{
            scrollRef.current.setscrollEnabled = setscrollEnabled
            scrollRef.current.scrollEnabled = scrollEnabled
            _ref.scrollRef = scrollRef.current
        })
        return (
            <View 
                ref={viewRef}
                onLayout={()=> {viewRef.current.measure((x, y, width, height, pageX, pageY) => {
                    if (constPageY === null){
                        setConstPageY(pageY)
                        scrollRef.current.pageY = pageY
                    }
                })}}
                style={{flex:1}}
            >
            <ScrollView
                bounces={false}
                scrollEventThrottle={1}
                ref={scrollRef}
                scrollEnabled = {scrollEnabled}
                onScroll={(event) => {if (scrollRef.current.onScrollListener)scrollRef.current.onScrollListener(event)}}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                {children}
            </ScrollView>
            </View>
        )
    })
)