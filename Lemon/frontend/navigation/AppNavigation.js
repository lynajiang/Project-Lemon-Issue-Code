import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import HomeScreen from '../screens/HomeScreen';
// import CreateScreen from '../screens/createScreen';
// import JoinScreen from '../screens/tender/JoinScreen';
// import StartScreen from '../screens/tender/StartScreen';
import LoginScreen from '../screens/LoginScreen';
import TestScreen from '../screens/TestScreen';
import SignupScreen from '../screens/SignupScreen';
import IntroductionAnimationScreen from '../screens/IntroductionAnimationScreen';
// import TenderSwipeScreen from '../screens/TenderSwipeScreen';
import LogoutScreen from '../screens/LogoutScreen';
import RecipeScreen from '../screens/recipe/screens/RecipeScreen';
// import SettingsScreen from '../screens/SettingsScreen';

// import MenuScreen from '../screens/MenuScreen';

// import ProfileScreen from '../screens/PScreen';
// import ProfileScreen from '../screens/ProfileScreen';
// import HomePost from '../screens/post/HomePost';
// import Terms Conditions from '../screens/settings/TermsConditions';
import { Dimensions, LogBox, Platform, Text, View, TouchableOpacity } from 'react-native';
// import ProductScreen from '../screens/ProductScreen';
import { themeColors } from '../theme';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import COLORS from '../constants/colors';

import { Icon } from '@rneui/themed';
// import ContactBusinessScreen from '../screens/businessProfile/contactBusiness';
// import CreateBusinessScreen from '../screens/businessProfile/createBusiness';
// import AddressBusinessScreen from '../screens/businessProfile/addressBusiness';
// import CategoryBusinessScreen from '../screens/businessProfile/CategoryBusiness';
// import TimeBusinessScreen from '../screens/businessProfile/businessHours';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ios = Platform.OS == 'ios';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function AppNavigation() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator 
        screenOptions = {{
            headerShown: false,
        }}
      >
      {/* <Stack.Screen name="Recipe" options={{headerShown: false}} component={RecipeScreen} /> */}
      <Stack.Screen name="Test" options={{headerShown: false}} component={TestScreen} />
      {/* <Stack.Screen name=> */}
      {/* <Stack.Screen name="IntroductionAnimation" options={{headerShown: false}} component={IntroductionAnimationScreen} /> */}
      {/* <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} /> */}
      {/* <Stack.Screen name="Logout" options={{headerShown: false}} component={LogoutScreen} /> */}
      {/* <Stack.Screen name="Signup" options={{headerShown: false}} component={SignupScreen} /> */}


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

