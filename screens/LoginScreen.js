import React, {useState, useEffect} from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";

const LoginScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Police Report" />
      <br/>
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
      <br/>
      <TouchableOpacity style={styles.buttonLogin}>
        <Text style={styles.fontButton}>Log in</Text>
      </TouchableOpacity>
      <br/>
      <TouchableOpacity style={styles.buttonRegister}>
        <Text style={styles.fontButton}>Sign Up</Text>
      </TouchableOpacity>
      <br/>
      <Text style={styles.font}><i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;forgot your password?</i></Text>
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
  fontButton: {
    fontWeight: 'bold',
    color: 'white'
  },
  font: {
    color: 'white',
    alignSelf: 'flex-start'
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
  buttonLogin: {
    width: '80%',
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#60b45c",
  },
  buttonRegister: {
    width: '80%',
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2596be",
  },
});

export default LoginScreen;
