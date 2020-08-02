import React from 'react';
import { View, Text,TextInput } from 'react-native';
import SectionHeader from './SectionHeader';
import Div from './Div';

export default (props) => {
  return (
    <Div className='section'>
        <SectionHeader title={props.title}/>
        {props.children}
    </Div>
  );
};