import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { DrawerParamList} from '../types';
import { StyleSheet, Text} from 'react-native';
//import DraggableFlatListDummy from '../components/DraggableFlatListDummy'
//import DraggableFlatListMain from '../components/DraggableFlatListMain'
//import SectionDummy from '../components/SectionDummy'
import DraggableAccordion, {RenderItemParams} from '../components/DraggableAccordion'

type Element = {title:string, body:string}

export default function TabTwoScreen({
  navigation
}: StackScreenProps< DrawerParamList, 'TabTwo'>) {
  const data = [
    { title: "Panel 1", body: "Hello Guys this is the Animated Accordion Panel." },
    { title: "Panel 2", body: "Hello Guys this is the Animated Accordion Panel." },
    { title: "Panel 3", body: "Hello Guys this is the Animated Accordion Panel." },
    { title: "Panel 4", body: "Hello Guys this is the Animated Accordion Panel." },
    { title: "Panel 5", body: "Hello Guys this is the Animated Accordion Panel." },
    { title: "Panel 6", body: "Hello Guys this is the Animated Accordion Panel." },
    { title: "Panel 7", body: "Hello Guys this is the Animated Accordion Panel." },
    { title: "Panel 8", body: "Hello Guys this is the Animated Accordion Panel." },
    { title: "Panel 9", body: "Hello Guys this is the Animated Accordion Panel." },
    { title: "Panel 10", body: "Hello Guys this is the Animated Accordion Panel." },
  ];
  const renderItemHeader = (element:RenderItemParams<Element>)=>{
    return(
        <Text style={styles.Panel_Button_Text}>{element.item.title} </Text>
    )
  }
  const renderItemBody = (element:RenderItemParams<Element>)=>{
    return(
      <Text style={styles.Panel_text}>
        {element.item.body}
      </Text>
    )
  }
  return <DraggableAccordion<Element, {}>
    data={data}
    dataCallback={()=>{}}
    itemStyles={itemStyles}
    sortEnabled={false}
    keyExtractor={(item, index)=>`${index}`}
    renderItemHeader={renderItemHeader}
    renderItemBody={renderItemBody}
    height={1200}
  ></DraggableAccordion>
  //return (<DraggableFlatListDummy/>) 
  /*
  return(
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
  );*/
}

const styles = StyleSheet.create({
  Panel_text: {
    fontSize: 18,
    color: '#000',
    padding: 10
  },
  Panel_Button_Text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 21
  },
})

const itemStyles = {
  Panel_Holder: {
    borderWidth: 1,
    borderColor: '#888',
    marginVertical: 5
  },
  Btn: {
    padding: 10,
    backgroundColor: '#888'
  }
}