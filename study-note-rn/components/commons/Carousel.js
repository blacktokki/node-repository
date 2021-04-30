import React, {useState, useRef} from 'react';
import {FlatList, View, TouchableHighlight, Text} from 'react-native';

export default function Carousel({pages, pageWidth, gap, offset, renderItem}) {
  const [page, setPage] = useState(0);
  const scrollRef = useRef()
  const onScroll = (e) => {
    const newPage = Math.round(
      e.nativeEvent.contentOffset.x / (pageWidth + gap),
    );
    setPage(newPage);
  };
  const onPage = (num) => {
    scrollRef.current.scrollToOffset({offset: offset + gap/2 + (page + num) * (pageWidth + gap)})
  }


  return (
    <View>
      <FlatList
        ref={scrollRef}
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: offset + gap / 2,
        }}
        data={pages}
        decelerationRate="fast"
        horizontal
        keyExtractor={(item,index)=> index.toString()}
        onScroll={onScroll}
        pagingEnabled
        renderItem={renderItem}
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
      }}>
        <TouchableHighlight onPress={()=>onPage(-1)}>
          <Text style={{fontWeight:"700", fontSize:32, color:'black', textAlign:'center'}}>{"<-"}</Text>
        </TouchableHighlight>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {Array.from({length: pages.length}, (_, i) => i).filter((i)=>(page-6<i && page+6>i)).map((i) => (
            <View key={`indicator_${i}`} style={{
              marginHorizontal: 2,
              backgroundColor: i === page ? '#262626' : '#dfdfdf',
              width: 8,
              height: 8,
              borderRadius: 4,
            }} />
          ))}
        </View>
        <TouchableHighlight onPress={()=>onPage(1)}>
          <Text style={{fontWeight:"700", fontSize:32, color:'black', textAlign:'center'}}>{"->"}</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}