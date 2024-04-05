import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import TestScreen from '../screens/TestScreen';
import { Dimensions, LogBox, Platform, Text, View, TouchableOpacity } from 'react-native';
import { themeColors } from '../theme';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import COLORS from '../constants/colors';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ios = Platform.OS == 'ios';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function AppNavigation() {
  return (
      <Stack.Navigator 
        screenOptions = {{
            headerShown: false,
        }}
      >

      <Stack.Screen name="Test" options={{headerShown: false}} component={TestScreen} />

      </Stack.Navigator>

  
  );
  
}

// function TabNavigation() {
//   const navigation = useNavigation();
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} options={{
//           title: 'Home',
//           headerRight: () => (
//             <TouchableOpacity
//               style={{ marginRight: 10 }}
//               onPress={() => navigation.navigate('Settings')}>
//               <Text>Settings</Text>
//             </TouchableOpacity>
//           ),
//         }}
//       />
//       <Tab.Screen name="Create" options={{headerShown: false}} component={CreateScreen} />

//       <Tab.Screen name="Profile" options={{headerShown: false}} component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// }

