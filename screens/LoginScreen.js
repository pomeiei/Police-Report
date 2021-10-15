import React, {useState, useEffect} from "react";
import { Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Police Report"/>
      <View style={[styles.action, {width: '80%'}]}>
        <Icon name='user-o' size={30} />
        <TextInput style={styles.textInput} placeholder="Email" keyboardType="default" placeholderTextColor="white"></TextInput>
      </View>

      <View style={[styles.action, {width: '80%', marginBottom: 10}]}>
        <Icon name='lock' size={30} />
        <TextInput style={styles.textInput} placeholder="Password" keyboardType="default" secureTextEntry={true} placeholderTextColor="white"></TextInput>
      </View>

      <TouchableOpacity style={[styles.button, {backgroundColor: '#60b45c', marginBottom: 10}]}>
        <Text style={styles.fontButton}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, {backgroundColor: '#2596be'}]}>
        <Text style={styles.fontButton}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  fontButton: {
    fontWeight: 'bold',
    color: 'white'
  },
  button: {
    width: '80%',
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a'
  }
});

export default LoginScreen;
