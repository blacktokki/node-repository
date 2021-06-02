import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {  DrawerParamList} from '../types';
import DraggableFlatList from '../components/DraggableFlatList'

export default function TabTwoScreen({
  navigation
}: StackScreenProps< DrawerParamList, 'TabTwo'>) {
  return (<DraggableFlatList/>)
  // return (
  //   <View style={styles.container}>
  //     <TouchableOpacity onPress={() => navigation.navigate('TabOne')} style={styles.link}>
  //       <Text style={styles.linkText}>Go 1 screen!</Text>
  //     </TouchableOpacity>
  //     <Text style={styles.title}>Tab Two</Text>
  //     <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
  //     <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
