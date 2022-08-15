import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from "react-native";
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function HomeScreen(props) {
  const {push,showOverlay}=useNavigation()
  const LogOut=(props)=>{
    AsyncStorage.removeItem("token").then(()=>{
      push("login")
    })
  }
  return (
    <>
    <View style={styles.body}>
        <Text>This is Home page</Text>
        <TouchableOpacity style={styles.btn1} onPress={() =>LogOut()}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>logout</Text>
        </TouchableOpacity>
    </View>
    </>
  )
}

export default HomeScreen
const styles=StyleSheet.create({
    body:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    btn1: {
      height: 40,
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
    },
})