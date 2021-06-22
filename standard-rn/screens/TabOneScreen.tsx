import React, {useCallback, useRef} from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {  DrawerParamList } from '../types';
import { StyleSheet, Text} from 'react-native';
import DraggableFlatListMain, {DraggableSection} from '../components/DraggableFlatListMain'
import SectionDummy from '../components/SectionDummy'


export default function TabOneScreen({
  navigation
}: StackScreenProps< DrawerParamList, 'TabOne'>) {
  const ref= useRef<typeof DraggableFlatListMain>(null)
  const addElement = useCallback((data:DraggableSection[])=>{
    return {
    header:(
      <Text style={styles.Panel_Button_Text}>{'Tab One' + (data.length +1)} </Text>
    ),
    body:(
     <SectionDummy
        title={'Tab One' + (data.length + 1)}
        pressText1='Go 2 screen!'
        onPress1={() => {navigation.navigate('TabTwo')}}
       path='/screens/TabOneScreen.tsx'
      />)}
  },[])
  const dataCallback = useCallback((data)=>{console.log('')}, [])
  const header = []
  const arr = []
  for (let i=0;i<10;i++){
    header[i] = <Text style={styles.Panel_Button_Text}>{'Tab One' + (i+1)} </Text>
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
      header={header}
      addElement={addElement}
      dataCallback={dataCallback}
      addTitle="add"
    >
      {arr}
    </DraggableFlatListMain>
  );
}

const styles = StyleSheet.create({
  Panel_Button_Text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 21
  },
  Panel_Holder: {
    borderWidth: 1,
    borderColor: '#888',
    marginVertical: 5
  }
})