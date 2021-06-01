/**
 * Learn more about createDrawerNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { DrawerScreenProps, createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Button } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { DrawerParamList, TabOneParamList, TabTwoParamList } from '../types';

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  const colorScheme = useColorScheme();
  //  drawerActiveTintColor: Colors[colorScheme].tint
  return (
    <Drawer.Navigator
      initialRouteName="TabOne"
      screenOptions={{ }}
      drawerContentOptions={{activeTintColor: Colors[colorScheme].tint }}
    >
      <Drawer.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          drawerIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <Drawer.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          drawerIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator({navigation}: DrawerScreenProps<DrawerParamList,'TabOne'>) {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{
          headerTitle: 'Tab One Title!!!',
          headerLeft: () => (
            <Button
              onPress={() => navigation.openDrawer()}
              title="Menu"
              color="#888"
            />
          ),
        }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator({navigation}: DrawerScreenProps<DrawerParamList,'TabTwo'>) {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ 
          headerTitle: 'Tab Two Title',
          headerLeft: () => (
            <Button
              onPress={() => navigation.openDrawer()}
              title="Menu"
              color="#888"
            />
          ),
        }}
      />
    </TabTwoStack.Navigator>
  );
}
