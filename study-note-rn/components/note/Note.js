import React from 'react';
import SectionHeader from '../commons/SectionHeader';
import NoteList from './NoteList';
import { View } from 'react-native';

export default () => {
  return (
    <View className='section'>
        <SectionHeader title="Note"/>
        <NoteList/>
    </View>
  );
};