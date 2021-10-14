import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Header from "../components/Header";


const Home = (props) => {
  return (
    <View style={styles.container}>
        <Header title="Police Report" />
        <br/>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, {backgroundColor: "white"}]}>
            <Text style={styles.fontButton}>Whistles</Text>
          </TouchableOpacity>
          &nbsp;&nbsp;&nbsp;
          <TouchableOpacity style={styles.button}>
            <Text style={styles.fontButton}>Reports</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.fontButton}>Status</Text>
          </TouchableOpacity>
          &nbsp;&nbsp;&nbsp;
          <TouchableOpacity style={styles.button}>
            <Text style={styles.fontButton}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.fontButton}>-</Text>
          </TouchableOpacity>
          &nbsp;&nbsp;&nbsp;
          <TouchableOpacity style={styles.button}>
            <Text style={styles.fontButton}>Setting</Text>
          </TouchableOpacity>
        </View>
        
      
          
        
    </View>
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
    padding: 5,
  },
  button: {
    width: 115,
    height: 115,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "white",
  },
  fontButton: {
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
  },
});

export default Home;
