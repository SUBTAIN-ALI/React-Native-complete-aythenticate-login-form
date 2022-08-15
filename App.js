import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/loginScreen';
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';

const stack = createStackNavigator();
const App = (props) => {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <stack.Screen name="loading" component={LoadingScreen} />
        <stack.Screen name="home" component={HomeScreen} />
        <stack.Screen name="login" component={LoginScreen} />
        <stack.Screen name="SignUp" component={SignupScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
