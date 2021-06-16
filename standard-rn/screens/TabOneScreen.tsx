import React, {useCallback, useRef} from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {  DrawerParamList } from '../types';
import DraggableFlatListMain from '../components/DraggableFlatListMain'
import SectionDummy from '../components/SectionDummy'


export default function TabOneScreen({
  navigation
}: StackScreenProps< DrawerParamList, 'TabOne'>) {
  const ref= useRef<typeof DraggableFlatListMain>(null)
  const addElement = useCallback((data:React.ReactNode[])=>{
    return (
     <SectionDummy
        title={'Tab One' + (data.length + 1)}
        pressText1='Go 2 screen!'
        onPress1={() => {navigation.navigate('TabTwo')}}
       path='/screens/TabOneScreen.tsx'
      />)
  },[])
  return (
    <DraggableFlatListMain
      addElement={addElement}
      addTitle="add"
    >
      <SectionDummy
        title='Tab One1'
        pressText1='Go 2 screen!'
        onPress1={() => {navigation.navigate('TabTwo')}}
        path='/screens/TabOneScreen.tsx'
      />
      <SectionDummy
        title='Tab One2'
        pressText1='Go 2 screen!'
        onPress1={() => {navigation.navigate('TabTwo')}}
        path='/screens/TabOneScreen.tsx'
      />
      <SectionDummy
        title='Tab One3'
        pressText1='Go 2 screen!'
        onPress1={() => {navigation.navigate('TabTwo')}}
        path='/screens/TabOneScreen.tsx'
      />
      <SectionDummy
        title='Tab One4'
        pressText1='Go 2 screen!'
        onPress1={() => {navigation.navigate('TabTwo')}}
        path='/screens/TabOneScreen.tsx'
      />
    </DraggableFlatListMain>
  );
}
