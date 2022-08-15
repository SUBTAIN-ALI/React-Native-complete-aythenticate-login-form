import {useNavigation} from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


function LoginScreen(props) {
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('')
  const {push, pop} = useNavigation();
  const LogIn=()=>{
    console.log(email,password)
      fetch("http://10.0.2.2:3000/login",{
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Orgin': '*',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    .then(res => res.json())
      .then(async data => {
        try {
          await AsyncStorage.setItem('token', data.user);
          if(data.user){

            push('home');
          }
          else{
            console.log("invalid email and password")
            alert("Invalid email and password")
          }
        } catch (e) {
          console.log('error is', e);
        }
      });
  }
  return (
    <>
      <View style={styles.body}>
        <TouchableOpacity style={styles.btn2} onPress={() => push('SignUp')}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>goBack</Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 30,
          }}>
          Wellcome
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 40,
          }}>
          Create new Account
        </Text>
        <View>
          <TextInput
            label="Email"
            placeholder="Email"
            placeholderTextColor="blue"
            value={email}
            mode="outlined"
            style={styles.inputstyle}
            onChangeText={text => setemail(text)}
          />
          <TextInput
            label="password"
            placeholder="password"
            placeholderTextColor="blue"
            value={password}
            mode="outlined"
            style={styles.inputstyle}
            onChangeText={text => setpassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.btn1} onPress={()=>LogIn()}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    margin: 20,
  },
  inputstyle: {
    marginTop: 20,
    height: 40,
  },
  btn1: {
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  btn2: {
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: 70,
    borderRadius: 30,
  },
});
