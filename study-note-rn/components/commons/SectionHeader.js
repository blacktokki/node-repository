import React from 'react';
import { Text, View, Platform } from 'react-native';
import Div from './Div'

export default ({title, screenLength})=>{
  const style = screenLength>1 && Platform.OS=='web'?{
    box:{backgroundColor:'white', padding:20, marginBottom:30},
    text:{fontWeight:"700", fontSize:30, paddingBottom:5, color:'#6c757d'}
  }:{
    box:{top:-40, height:30, backgroundColor:'rgba(0,0,0,0)', width:"80%", left:"10%"},
    text:{fontWeight:"700", fontSize:24, color:'white', textAlign:'center'}
  }

  return (
      <View style={style.box}>
        <Div className="section-header">
            <Text style={style.text}>
                {title}
            </Text>
        </Div>
      </View>
  );
}