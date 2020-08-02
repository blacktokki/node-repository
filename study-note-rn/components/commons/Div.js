import React from 'react';
import { View } from 'react-native';
import { style } from 'public/js/style';

export default (props) => {
  var styleName = style[props.className]
  return props.style?(
    <View style={styleName}>
      <View style={props.style}>
          {props.children}
      </View>
    </View>
  ):(
    <View style={styleName}>
      {props.children}
    </View>
  );
};