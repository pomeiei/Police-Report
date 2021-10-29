import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import Home from "./screens/Home";

export default function App() {

  const content = <Home/>
  return (
    <View style={styles.screen}>
      <ImageBackground source={require('./assets/bg.png')} style={styles.backgroundImage}>
      {content}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch',
    justifyContent: 'center',
  },
});
