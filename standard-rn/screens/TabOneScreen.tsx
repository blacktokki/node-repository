import React, {useCallback, useRef} from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {  DrawerParamList } from '../types';
import DraggableFlatListMain, {DraggableSection} from '../components/DraggableFlatListMain'
import SectionDummy from '../components/SectionDummy'


export default function TabOneScreen({
  navigation
}: StackScreenProps< DrawerParamList, 'TabOne'>) {
  const ref= useRef<typeof DraggableFlatListMain>(null)
  const addElement = useCallback((data:DraggableSection[])=>{
    return {
    header:(
      <SectionDummy
        title={'Tab One' + (data.length + 1)}
        pressText1='Go 2 screen!'
        onPress1={() => {navigation.navigate('TabTwo')}}
       path='/screens/TabOneScreen.tsx'
      />),
    body:(
     <SectionDummy
        title={'Tab One' + (data.length + 1)}
        pressText1='Go 2 screen!'
        onPress1={() => {navigation.navigate('TabTwo')}}
       path='/screens/TabOneScreen.tsx'
      />)}
  },[])
  const dataCallback = useCallback((data)=>{console.log('!')}, [])

  const arr = []
  for (let i=0;i<10;i++){
    arr[i] = <SectionDummy
    key={i}
    title={'Tab One' + (i+1)}
    pressText1='Go 2 screen!'
    onPress1={() => {navigation.navigate('TabTwo')}}
    path='/screens/TabOneScreen.tsx'
  />
  }
  return (
    <DraggableFlatListMain
      addElement={addElement}
      dataCallback={dataCallback}
      addTitle="add"
    >
      {arr}
    </DraggableFlatListMain>
  );
}
