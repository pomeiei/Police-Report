import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";


const Home = (props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Police Report</Text>

        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonWhistle}>
            <Text style={styles.fontButton}>แจ้งเบาะแส</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonReport}>
            <Text style={styles.fontButton}>แจ้งความ</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonStatus}>
            <Text style={styles.fontButton}>Status</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
  buttonWhistle: {
    width: 250,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#60b45c",
  },
  buttonReport: {
    width: 250,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#2596be",
  },
  buttonStatus: {
    width: 250,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#c31521",
  },
  fontButton: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    paddingBottom: 100,
  },
});

export default Home;
