import React from 'react';
import { View, Text } from 'react-native';

export default (props) => {
  return (
      <View className="section-header">
          <Text>
              {props.title}
          </Text>
      </View>
  );
};