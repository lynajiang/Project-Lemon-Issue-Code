import React, { useState } from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';

import MyPressable from '../components/MyPressable';

import { CheckBox } from 'react-native-elements';

import PasswordStrengthBar from '../components/PasswordStrengthBar';

// import PasswordStrengthBar from 'react-password-strength-bar'

import { Button } from '@rneui/themed';

import Animated, { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';
import {FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';

// import Toast from 'react-native-toast-message';

import COLORS from '../constants/colors';

const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
export default function SignupScreen({navigation}) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [retypePassword, setRetypePassword] = useState('');

    const [isTOCChecked, setIsTOCChecked] = useState(false);

    const handleDismissKeyboard = () => {
      Keyboard.dismiss();
    };

    const handleFirstName = (text) => {
        setFirstName(text);
    }

    const handleLastName = (text) => {
        setLastName(text);
    }

    const handleUsername = (text) => {
        setUsername(text);
    }

    const handlePassword = (text) => {
      setPassword(text);

      const strength = checkPasswordStrength(text);

      setPasswordStrength(strength);


      console.log('Password strength:', strength);
    }

    const handleRetypePassword = (text) => {
      setRetypePassword(text);
    }

    const handlePhoneNumberChange = (text) => {
        setPhoneNumber(text);
    }


    const toggleCheckbox = () => setIsTOCChecked(!isTOCChecked);

    const checkPasswordStrength= (password) => {
      // Define criteria for a strong password
      const minLength = 8;
      const hasUppercase = /[A-Z]/.test(password);
      const hasLowercase = /[a-z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      // Check each criterion
      const isLengthValid = password.length >= minLength;
      const isUppercaseValid = hasUppercase;
      const isLowercaseValid = hasLowercase;
      const isNumberValid = hasNumber;
      const isSpecialCharValid = hasSpecialChar;

      // Calculate overall strength
      const strength =
      (isLengthValid + isUppercaseValid + isLowercaseValid + isNumberValid + isSpecialCharValid) / 5;

      // Return the strength as a percentage (0 to 1)
      return strength;
    };

    const checkPassword = (password, retypepassword) => {
      return password === retypepassword;
    }
    

    
    const signup = async () => {
      try {

        if (!isTOCChecked) {

          return;
        }

        if (!checkPassword(password, retypePassword)) {
          return;
        }

        
        
        const response = await fetch(`http://127.0.0.1:8000/polls/signup/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            //credentials here
            first_name: firstName,
            last_name: lastName,
            username: username,
            password: password,
            phone_number: phoneNumber,
          }),
        });
        if (response.ok) {
            alert("Signup successful")
          navigation.navigate('Login');
          // For example, navigate to another screen
        } else {
          alert("signup not found")
          throw new Error('Signup Not Found');
        }
      } catch (error) {
        console.error(error.message);
        alert('Error occurred during signup');
      }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(245, 235, 226)" }}>
          <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
            <View style={{ flex: 1, marginHorizontal: 22}}>
              <Animated.View style={{ marginVertical: 10 }}
                entering={FadeInUp.duration(1000).springify()}
                  >
                  <Text style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      marginVertical: 12,
                      color: COLORS.black
                  }}>
                      Create Account
                  </Text>

                  <Text style={{
                      fontSize: 16,
                      color: COLORS.black
                  }}>Experience the world differently</Text>
              </Animated.View>

              
            {/* Email Address */}
            {/* <View style={{ marginVertical: 12}}>
              <Text style={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginVertical: 8
                }}>Email address</Text>
              <View style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 22
              }}>
                <TextInput
                      placeholder='Enter your email address'
                      placeholderTextColor={COLORS.black}
                      keyboardType='email-address'
                      style={{
                          width: "100%"
                      }}
                  />
              </View>
            </View> */}
            

            {/* First and Last name */}
            <View style={{ marginBottom: 5 }}>
              <View style={{ flexDirection: 'row'}}>
                <Animated.Text style={{
                  flex: 1,
                  fontSize: 16,
                  fontWeight: '400',
                  marginVertical: 8,
                }}
                entering={FadeInDown.delay(200).duration(1000).springify()}

                >First name</Animated.Text>
                <Animated.Text style={{
                  flex: 1,
                  fontSize: 16,
                  fontWeight: '400',
                  marginVertical: 8,
                  marginLeft: 10,
                }}
                  entering={FadeInDown.delay(200).duration(1000).springify()}
                
                >Last name</Animated.Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Animated.View style={{
                  flex: 1,
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingLeft: 22,
                  marginRight: 10, // Add this margin to align with the text
                }}
                  entering={FadeInDown.delay(400).duration(1000).springify()}
                >
                  <TextInput
                    style={{ width: '100%' }}
                    placeholder='First Name'
                    value={firstName}
                    onChangeText={handleFirstName}
                  />
                </Animated.View>

                <Animated.View style={{
                  flex: 1,
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingLeft: 22,
                }}
                  entering={FadeInDown.delay(400).duration(1000).springify()}
                >
                  <TextInput
                    style={{ width: '100%' }}
                    placeholder='Last Name'
                    value={lastName}
                    onChangeText={handleLastName}
                  />
                </Animated.View>
              </View>
            </View>



            {/* Mobile number */}
            <View style={{ marginBottom: 5 }}>
              <Animated.Text style={{
                  fontSize: 16,
                  fontWeight: 400,
                  marginVertical: 8
              }}
                entering={FadeInDown.delay(600).duration(1000).springify()}
              
              >Mobile Number</Animated.Text>

              <Animated.View style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingLeft: 22
              }}
                entering={FadeInDown.delay(800).duration(1000).springify()}
              >
                <TextInput
                    placeholder='+91'
                    placeholderTextColor={COLORS.black}
                    keyboardType='numeric'
                    style={{
                        width: "12%",
                        borderRightWidth: 1,
                        borderLeftColor: COLORS.grey,
                        height: "100%"
                    }}
                    defaultValue='+1'
                />

                <TextInput
                    placeholder='Enter your phone number'
                    keyboardType='numeric'
                    style={{
                        width: "80%"
                    }}
                    value={phoneNumber}
                    onChangeText={handlePhoneNumberChange}
                />
              </Animated.View>
          </View>

          
          {/* Username */}
          <View style={{ marginVertical: 5}}>
            <Animated.Text style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8
              }}
              entering={FadeInDown.delay(1000).duration(1000).springify()}
            >Username</Animated.Text>
            <Animated.View style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22
            }}
              entering={FadeInDown.delay(1000).duration(1000).springify()}
            >
              <TextInput
                  placeholder='Username'
                  value={username}
                  onChangeText={handleUsername}
                  autoCapitalize='none'
                  style={{
                      width: "100%"
                  }}
              />
            </Animated.View>
          </View>
          


          {/* Password */}
          <View style={{marginBottom: -10}}>
            <Animated.Text style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8
              }}
                entering={FadeInDown.delay(1200).duration(1000).springify()}
                >Password</Animated.Text>
            <Animated.View style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22
            }}
            entering={FadeInDown.delay(1200).duration(1000).springify()}
            >


            <TextInput
              placeholder='Password'
              value={password}
              secureTextEntry={true}
              autoCapitalize='none'
              onChangeText={handlePassword}
              style={{
                  width: "100%"
              }}
            />

            </Animated.View>

            <Animated.View
              entering={FadeInDown.delay(1200).duration(1000).springify()}
            >
              <PasswordStrengthBar password={password} />
            </Animated.View>

            

          </View>


          {/* Retype Password */}
          <View style={{marginBottom: 12}}>
            <Animated.Text style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8
                }}
                entering={FadeInDown.delay(1400).duration(1000).springify()}
                > Retype Password</Animated.Text>
            <Animated.View style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22
              }}
              entering={FadeInDown.delay(1600).duration(1000).springify()}
            >

              <TextInput
                placeholder='Retype Password'
                value={retypePassword}
                secureTextEntry={true}
                autoCapitalize='none'
                onChangeText={handleRetypePassword}
                style={{
                    width: "100%"
                }}
              />
            </Animated.View>

          </View>

          {/* Checkbox */}
          <Animated.View
            entering={FadeInDown.delay(1800).duration(1000).springify()}
          >
            <CheckBox
              checked={isTOCChecked}
              onPress={toggleCheckbox}
              // iconType="material-community"
              // checkedIcon="checkbox-marked"
              // uncheckedIcon={"checkbox-blank-outline"}
              // checkedColor="blue"
              // title="Accept Terms and Conditions/"
              // backgroundColor={"rgb(245, 235, 226)"}
            />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(2000).duration(1000).springify()}
          >

            <View style={styles.buttonContainer}>
              <MyPressable
                style={styles.button}
                android_ripple={{ color: "darkgrey" }}
                onPress={signup}
              >
                <View
                >
                  <Text style={styles.buttonText}>signup</Text>
                </View>

              </MyPressable>
            </View>

          
          </Animated.View>

          <Animated.View
            style={styles.footerTextContainer}
            entering={FadeInDown.delay(2200).duration(1000).springify()}
          >
            <Text
              style={{color: "grey", fontFamily: "WorkSans-Regular"}}
            >
              Already have an account?{" "}

            </Text>
            <TouchableOpacity
              onPress={()=> navigation.navigate('Login')}
            >
              <Text style={styles.loginText}>
                Login
              </Text>
            </TouchableOpacity>
          </Animated.View>
          
          
 
          
        </View>

      </TouchableWithoutFeedback>
            
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
})

