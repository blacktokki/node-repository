/**
 * Learn more about createDrawerNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { DrawerScreenProps, createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { ParamListBase, Route } from '@react-navigation/native'; 
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
      initialRouteName={initialRouteName}
      screenOptions={{ }}
      drawerContentOptions={{activeTintColor: Colors[colorScheme].tint }}
    >
      {Navigators}
    </Drawer.Navigator>
  );
}

function DrawerNavigatorGeneric<ParamList extends Record<string, object | undefined>>(drawerName:keyof DrawerParamList, name: keyof ParamList, component:React.ComponentType<any>, headerTitle:string){
  return (
    <Drawer.Screen
      key={drawerName}
      name={drawerName}
      component={StackNavigatorGeneric<ParamList, typeof drawerName>(name, component, headerTitle)}
      options={{
        drawerIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
      }}
    />
  )
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
function StackNavigatorGeneric<ParamList extends Record<string, object | undefined>, RouteName extends keyof DrawerParamList>(name:keyof ParamList, component:React.ComponentType<any>, headerTitle:string){
  const TabStack = createStackNavigator<ParamList>();
  function TabNavigator({navigation}: DrawerScreenProps<DrawerParamList, RouteName>) {
    return (
      <TabStack.Navigator>
        <TabStack.Screen
          name={name}
          component={component}
          options={{
            headerTitle: headerTitle,
            headerLeft: () => (
              <Button
                onPress={() => navigation.openDrawer()}
                title="Menu"
                color="#888"
              />
            ),
          }}
        />
      </TabStack.Navigator>
    );
  }
  return TabNavigator

}
const initialRouteName = "TabOne"


const Navigators = [
  DrawerNavigatorGeneric<TabOneParamList>("TabOne", "TabOneScreen", TabOneScreen, 'Tab One Title'),
  DrawerNavigatorGeneric<TabTwoParamList>("TabTwo", "TabTwoScreen", TabTwoScreen, 'Tab Two Title')
]
