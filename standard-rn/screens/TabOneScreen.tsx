import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {  DrawerParamList } from '../types';
import DraggableFlatListMain from '../components/DraggableFlatListMain'
import SectionDummy from '../components/SectionDummy'

export default function TabOneScreen({
  navigation
}: StackScreenProps< DrawerParamList, 'TabOne'>) {
  return (
    <DraggableFlatListMain>
      <SectionDummy
        title='Tab One'
        pressText1='Go 2 screen!'
        onPress1={() => {navigation.navigate('TabTwo')}}
        path='/screens/TabOneScreen.tsx'
      />
      <SectionDummy
        title='Tab One'
        pressText1='Go 2 screen!'
        onPress1={() => {navigation.navigate('TabTwo')}}
        path='/screens/TabOneScreen.tsx'
      />
      <SectionDummy
        title='Tab One'
        pressText1='Go 2 screen!'
        onPress1={() => {navigation.navigate('TabTwo')}}
        path='/screens/TabOneScreen.tsx'
      />
      <SectionDummy
        title='Tab One'
        pressText1='Go 2 screen!'
        onPress1={() => {navigation.navigate('TabTwo')}}
        path='/screens/TabOneScreen.tsx'
      />
    </DraggableFlatListMain>
  );
}
