import React from 'react';
import { View } from 'react-native';

//const style = require('!style-loader!!css-loader?modules=true!../public/css/style.css');
const style = require('!!react-native-css-loader!../public/css/style.css');

export default (props) => {
  var styleName = style[props.className]
  //console.log(styleName)
  return (
    <View style={styleName}>
        {props.children}
    </View>
  );
};