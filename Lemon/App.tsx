/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import * as React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppNavigation from './frontend/navigation/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
          <AppNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}