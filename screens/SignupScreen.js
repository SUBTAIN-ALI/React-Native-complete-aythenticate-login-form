import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Svg, {Circle} from 'react-native-svg';
import {SvgUri} from 'react-native-svg';
import SVGImg from '../consts/abc.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

function SignupScreen() {
  const {push} = useNavigation();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const sendCred = () => {
    fetch('http://10.0.2.2:3000/signup', {
      method: 'POST',
      headers: {
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
          await AsyncStorage.setItem('token', data.token);
          push('home');
        } catch (e) {
          console.log('error is', e);
        }
      });
  };
  return (
    <>
      <View style={styles.body}>
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
            value={email}
            placeholderTextColor="blue"
            mode="outlined"
            style={styles.inputstyle}
            onChangeText={text => setemail(text)}
          />
          <TextInput
            label="password"
            placeholder="password"
            secureTextEntry={true}
            value={password}
            placeholderTextColor="blue"
            mode="outlined"
            style={styles.inputstyle}
            onChangeText={text => setpassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.btn1} onPress={() => sendCred()}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>SIGNUP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 20}} onPress={() => push('login')}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>
            already have an account ?{' '}
          </Text>
        </TouchableOpacity>
        <View style={styles.svgImage}>
          <SvgUri
            width="50%"
            height="50"
            uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
          />
          {/* <SVGImg width="50" height="50" /> */}
        </View>
      </View>
    </>
  );
}

export default SignupScreen;

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
  svgImage: {
    marginTop: 20,
    flexDirection: 'row-reverse',
  },
});
