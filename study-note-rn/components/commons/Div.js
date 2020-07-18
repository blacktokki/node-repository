import React from 'react';
import { View } from 'react-native';
import { style } from 'public/js/style';

export default (props) => {
  console.log(props.className)
  var styleName = style[props.className]
  return (
    <View style={styleName}>
        {props.children}
    </View>
  );
};