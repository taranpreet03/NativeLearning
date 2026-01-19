import { View,Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const index =() =>{
  return(
    <Stack screenOptions={{
        headerShown:false
    }}> 
        <Stack.Screen name="index" />
        <Stack.Screen name="Login"/>
        <Stack.Screen name="Signup" />
    </Stack>
  )
}
export default index;