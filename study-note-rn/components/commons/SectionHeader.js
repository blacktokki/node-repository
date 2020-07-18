import React from 'react';
import { Text } from 'react-native';
import Div from './Div'

export default (props) => {
  return (
      <Div className="section-header">
          <Text>
              {props.title}
          </Text>
      </Div>
  );
};