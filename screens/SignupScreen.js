import React, {useState, useEffect} from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";

const SignupScreen = (props) => {

  return (
    <SafeAreaView style={styles.container}>
      <br/>
      <Header title="Create Account" />
      <br/>
      <TextInput
        style={styles.input}
        placeholder="FirstName"
        keyboardType="default"
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="LastName"
        keyboardType="default"
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="default"
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="ID card"
        keyboardType="default"
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="default"
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        keyboardType="default"
        secureTextEntry={true}
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        keyboardType="default"
        secureTextEntry={true}
        placeholderTextColor="white"
      />
      <br/>
      <TouchableOpacity style={styles.buttonRegister}>
        <Text style={styles.fontButton}>Register</Text>
      </TouchableOpacity>
      <br/>
      <Text style={styles.font}><i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Back to login</i></Text>
      <br/>
      <br/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderBottomColor: 'white',
    padding: 10,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    color: 'white'
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    paddingBottom: 70,
  },
  font: {
    color: 'white',
    alignSelf: 'flex-start'
  },
  buttonRegister: {
    width: '80%',
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#60b45c",
  },
  fontButton: {
    fontWeight: 'bold',
    color: 'white'
  },
});

export default SignupScreen;
