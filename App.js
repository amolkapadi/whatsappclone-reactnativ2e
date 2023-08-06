import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import ChatsScreen from './src/comp/CallsScreen';
import StatusScreen from './src/comp/StatusScreen';
import CallsScreen from './src/comp/CallsScreen';
import TopBar from './src/TopBar';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <>
    <NavigationContainer>
      <TopBar />
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { color: 'white' },
          tabBarIndicatorStyle: { backgroundColor: 'white' },
          tabBarStyle: { backgroundColor: '#128B7E' },
        }}
      >
        <Tab.Screen name="Chats" component={ChatsScreen} />
        <Tab.Screen name="Status" component={StatusScreen} />
        <Tab.Screen name="Calls" component={CallsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
};
export default App;
