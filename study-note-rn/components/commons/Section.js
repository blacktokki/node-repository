import React from 'react';
import { View, Text } from 'react-native';
import { Div, SectionHeader } from './index';

export default (props) => {
  return (
    <View style={{flex:1}}>
        <Div className='section'>
            <SectionHeader title={props.title}/>
            {props.children}
        </Div>
    </View>
  );
};