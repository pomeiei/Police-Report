import React, {useState, useEffect} from "react";
import { Button, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";
import Icon from 'react-native-vector-icons/FontAwesome';

const MyProfile = (props) => {
  return (
    <View>
      <TextInput style={[styles.textInput, {color: 'grey'}]} placeholder="First Name" keyboardType="default" editable={false}>asd</TextInput>
      <TextInput style={[styles.textInput, {color: 'grey'}]} placeholder="Last Name" keyboardType="default" editable={false}>zxc</TextInput>
      <TextInput style={[styles.textInput, {color: 'grey'}]} placeholder="ID Card" keyboardType="default" editable={false}>1231312213123123213</TextInput>
      <TextInput style={styles.textInput} keyboardType="default" placeholderTextColor="black" editable={true}>+66 123123123</TextInput>
      <TextInput style={styles.textInput} keyboardType="default" placeholderTextColor="black" editable={true}>asdsa@asdasd.casd</TextInput>
      <Button title="Update"></Button>
      <Text style={{padding:15, fontSize: 20}}>Change Password</Text>
      <TextInput style={styles.textInput} placeholder="Old Password" keyboardType="default" secureTextEntry={true} placeholderTextColor="black" editable={true}></TextInput>
      <TextInput style={styles.textInput} placeholder="New Password" keyboardType="default" secureTextEntry={true} placeholderTextColor="black" editable={true}></TextInput>
      <TextInput style={styles.textInput} placeholder="Confirm New Password" keyboardType="default" secureTextEntry={true} placeholderTextColor="black" editable={true}></TextInput>
      <Button title="Change Password"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    backgroundColor: 'white',
    padding: 10,
  }
});

export default MyProfile;
