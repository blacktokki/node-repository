import React from 'react';
import { View, Text } from 'react-native';
import SectionHeader from './SectionHeader';
import Div from './Div';

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