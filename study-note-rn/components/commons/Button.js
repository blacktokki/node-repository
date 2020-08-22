import React from 'react';
import { TouchableOpacity , View, Text } from 'react-native';

export default (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
        <View style={{backgroundColor:"#EEEEEE", borderStyle:"outset", borderColor:"#777777", borderWidth:2}}> 
            <Text style={{color: 'black'}}>{props.title}</Text>
        </View>
    </TouchableOpacity>
  );
};