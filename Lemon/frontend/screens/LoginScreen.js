import React, { useState } from 'react';

import {StyleSheet, View, Text, Dimensions, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { makeApiRequest, saveToken } from '../utils/auth';

import Animated, { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';
import {FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';

import { Button, Icon } from '@rneui/themed';

import COLORS from '../constants/colors';

import MyPressable from '../components/MyPressable';


const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
export default function LoginScreen({navigation}) {
    const [username, setUsername] = useState('');

    const [logPassword, setLogPassword] = useState('');

    const [isPasswordShown, setIsPasswordShown] = useState(true);


    const handleUsername= (text) => {
        setUsername(text);
    };

    const handleLogPassword= (text) => {
      setLogPassword(text);
    }
    
    const checkLogin = async () => {
      try {
        const response = await makeApiRequest('token/', 'POST', {
          username: username,
          password: logPassword,
        }, {
          'Content-Type': 'application/json',
        });

        if (response.status == 200) {
          const { access, refresh } = response.data;
          saveToken('access_token', access);
          saveToken('refresh_token', refresh);
          navigation.navigate('Tabs');
        } else {
          const errorMessage = response.data || 'Login failed';
    
          // // Display a meaningful error message to the user
          alert(errorMessage);
    
          // // Throw an error to be caught by the catch block
          throw new Error(errorMessage);
        }
      } catch (error) {
        console.error(error.message);
        alert('Error occurred during login');
      }
    };

    const handleDismissKeyboard = () => {
      Keyboard.dismiss();
    };


    
    return (
      <SafeAreaView style={{ flex: 1, marginBottom: ios ? -8 : 0, backgroundColor: "rgb(245, 235, 226)" }}>
        <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
          <View style={{ flex: 1, marginHorizontal: 22}}>
            
          <Animated.View
            style={styles.container}>
            <Animated.Text
              style={styles.title}
              entering={FadeInDown.duration(1000).springify()}
              >
              Login
            </Animated.Text>

            {/* <Animated.View
              entering={FadeInUp.delay(200).duration(1000).springify()}
            > 
              <Text
                style={styles.inputText}
              >
                Username
              </Text>


            </Animated.View> */}
            <View style={styles.inputView}>
              <Animated.Text
                style={styles.inputTitle}
                entering={FadeInDown.delay(200).duration(1000).springify()}
              >
                Username
              </Animated.Text>
              <Animated.View
                style={styles.inputText}
                entering={FadeInDown.delay(400).duration(1000).springify()}
                >
                <TextInput
                    style={{ width: '100%' }}
                    value={username}
                    onChangeText={handleUsername}
                    autoCapitalize='none'
                />
              </Animated.View>

            </View>
            
            <View style={styles.inputView}>
              <Animated.Text
                style={styles.inputTitle}
                entering={FadeInUp.delay(200).duration(1000).springify()}
              >
                Password
              </Animated.Text>
              <Animated.View
                style={styles.inputText}
                entering={FadeInDown.delay(600).duration(1000).springify()}
                >
                <TextInput
                    style={{ width: '100%'}}
                    value={logPassword}
                    onChangeText={handleLogPassword}
                    autoCapitalize='none'
                    secureTextEntry={isPasswordShown}
                    onSubmitEditing={checkLogin}
                />

                <TouchableOpacity
                  onPress={() => setIsPasswordShown(!isPasswordShown)}
                  style={{
                    position: "absolute",
                    right:12
                  }} >
                    {isPasswordShown == true ? (
                      <Icon
                        name="eye-off"
                        size={24}
                        />
                    ): (
                      <Icon
                      name="eye"
                      size={24}
                      />
                      )
                    }
                  </TouchableOpacity>

              </Animated.View>

            </View>
            
            
            <Animated.View
              entering={FadeInDown.delay(800).duration(1000).springify()}
            >
              <View style={styles.buttonContainer}>
                <MyPressable
                  style={styles.button}
                  android_ripple={{ color: "darkgrey" }}
                  onPress={checkLogin}
                >
                  <View
                  >
                    <Text style={styles.buttonText}>Login</Text>
                  </View>

                </MyPressable>
              </View>
            </Animated.View>


            <Animated.View
              style={styles.footerTextContainer}
              entering={FadeInDown.delay(1200).duration(1000).springify()}
              >
                <Text
                  style={{color: "grey", fontFamily: "WorkSans-Regular"}}
                >
                  Need an account?{" "}

                </Text>
                <TouchableOpacity
                  onPress={()=> navigation.navigate('Login')}
                >
                  <Text style={styles.loginText}>
                    Signup
                  </Text>
                </TouchableOpacity>
                
            </Animated.View>
            
            </Animated.View>
          </View>

        </TouchableWithoutFeedback>
          
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "rgb(245, 235, 226)",
  },
  title:{
  fontWeight: "bold",
  fontSize:50,
  color:"rgb(21, 32, 54)",
  alignSelf: 'center',
  marginBottom: 40,
  marginTop: 40,
  },
  inputView:{
    marginBottom: 5
  },

  inputTitle:{
    fontSize: 16,
    fontWeight: 400,
    marginVertical: 8
  },
  inputText:{
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: "hidden",
    alignSelf: "center",
    marginTop: 48
  },

  button: {
    height: 54,
    backgroundColor: "rgb(21, 32, 54)",
    paddingVertical: 16,
    paddingHorizontal: 56
  },

  buttonText: {
    fontSize: 16,
    fontFamily: "WorkSans-Regular",
    color: "white"
  },
  loginText: {
    color: "#132137",
    fontSize: 16,
    fontFamily: "WorkSans-Bold"
  },
  footerTextContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 8
  },
  

  });
