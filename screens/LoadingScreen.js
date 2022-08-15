import React, {useEffect, useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {View, ActivityIndicator, StyleSheet, Text,TouchableOpacity} from 'react-native';

const LoadingScreen = () => {
const {push} = useNavigation();

  const detectLoading = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      console.log('Hello tiken has');
      push('home');
    } else {
      console.log('Token not available');
      push('SignUp');
    }
  }
    useEffect(() => {
      console.log("use Effect worrk")
      detectLoading();
    }, []);
  
  return (
    <>
      <ActivityIndicator style={styles.body} size="large" color="blue" /> 
      <View>
        <Text>This is loading screen</Text>
        {/* <TouchableOpacity style={styles.btn1} onPress={() => detectLoading()}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>SIGNUP</Text>
        </TouchableOpacity> */}
       </View> 
    </>
  );
};

export default LoadingScreen;
const styles = StyleSheet.create({
  body: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn1: {
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});
