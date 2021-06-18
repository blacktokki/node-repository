import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {  DrawerParamList} from '../types';
import DraggableFlatListDummy from '../components/DraggableFlatListDummy'
import DraggableFlatListMain from '../components/DraggableFlatListMain'
import SectionDummy from '../components/SectionDummy'

export default function TabTwoScreen({
  navigation
}: StackScreenProps< DrawerParamList, 'TabOne'>) {
  //return (<DraggableFlatListDummy/>)
  return (
    <DraggableFlatListMain 
      sortEnabled={false}
      dataCallback={()=>{}}
    >
      <SectionDummy
        title='Tab Two'
        pressText1='Go 1 screen!'
        onPress1={() => {navigation.navigate('TabOne')}}
        path='/screens/TabTwoScreen.tsx'
      />
      <SectionDummy
        title='Tab Two'
        pressText1='Go 1 screen!'
        onPress1={() => {navigation.navigate('TabOne')}}
        path='/screens/TabTwoScreen.tsx'
      />
    </DraggableFlatListMain>
  );
}