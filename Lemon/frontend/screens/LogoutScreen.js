import React, { useState } from 'react';

import {StyleSheet, View, Button, Text, Dimensions, Image, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
export default function LogoutScreen({navigation}) {
    const [username, setUsername] = useState('');

    const [logPassword, setLogPassword] = useState('');


    const handleUsername= (text) => {
        setUsername(text);
    };

    const handleLogPassword= (text) => {
      setLogPassword(text);
    }
    
    const logout = async () => {
      try {
        await AsyncStorage.removeItem('access_token');
        await AsyncStorage.removeItem('refresh_token');
      } catch (error) {
        console.error('Logout failed:', error);
      }
    };

    
    return (
        <SafeAreaView style={['flex-1', ios? '-mb-8': '']}>
            
            
        </SafeAreaView>
    )
}

