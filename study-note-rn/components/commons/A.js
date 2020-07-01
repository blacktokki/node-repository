import React from 'react';
import { Linking, Text } from 'react-native';

export default (props) => {
  return (
    <Text style={{color: 'blue', fontWeight: 'bold'}} onPress={() => Linking.openURL(props.href)}>
        {props.children}
    </Text>
  );
};