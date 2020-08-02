import React from 'react';
import { Text, View } from 'react-native';
import Div from './Div'

export default (props) => {
  return (
      <View style={{backgroundColor:'white', padding:20, marginBottom:30}}>
        <Div className="section-header">
            <Text style={{fontWeight:"700", fontSize:30, paddingBottom:5, color:'#6c757d'}}>
                {props.title}
            </Text>
        </Div>
      </View>
    );
};