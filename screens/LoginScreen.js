import React, {useState, useEffect} from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";

const LoginScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Police Report</Text>
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
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonRegister}>
        <Text>Register</Text>
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
  input: {
    height: 40,
    width: '100%',
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
    width: '100%',
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#60b45c",
  },
  buttonRegister: {
    width: '100%',
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2596be",
  },
});

export default LoginScreen;
