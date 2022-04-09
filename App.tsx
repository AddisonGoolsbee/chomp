import 'react-native-gesture-handler';
import React, { FC, useEffect, useState, } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import HomeScreen from './screens/HomeScreen'
import PostScreen from './screens/PostScreen'
import SettingsScreen from './screens/SettingsScreen'
import StartScreen from './screens/StartScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <View>
      <Text>BONY BONY BONY</Text>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Home' }}
          />
          <Stack.Screen name="Profile" component={PostScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Start" component={StartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Text>BONY BONY BONY</Text>
    </View>
    
  );
}

export default App