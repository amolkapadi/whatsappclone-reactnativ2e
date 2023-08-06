import { View, Text } from 'react-native'
import React from 'react'
import TopBar from './src/components/TopBar'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'


import ChatScreen from './src/screens/ChatScreen'
import CallsScreen from './src/screens/CallsScreen'
import StatusCsreen from './src/screens/StatusCsreen'

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <>
     <NavigationContainer>
      <TopBar />
      <Tab.Navigator  
        screenOptions={{
          tabBarLabelStyle:{ color : 'white' },
          tabBarIndicatorStyle: { backgroundColor: 'white' },
          tabBarStyle: { backgroundColor: '#128B7E' }
        }}
      
      >
      <Tab.Screen name="Chats" component={ChatScreen} />
      <Tab.Screen name="Status" component={StatusCsreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />

      </Tab.Navigator>
     </NavigationContainer>
    </>
  )
}