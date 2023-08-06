import { View, Text, StatusBar, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function TopBar() {
  return (
    <View>
      <StatusBar animated={true} backgroundColor="#128B7E" />
      <View style={styles.topBar}>
        <Text style={styles.title}>Whatsapp </Text>

        <View style={styles.iconContainer}>
          <AntDesign name="search1" size={24} color="white" style={styles.icon}/>
          <MaterialIcons name="message" size={24} color="white" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: "#128B7E",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  title:{
    fontSize:20,
    color:'white'
  },
  iconContainer:{
    flexDirection:"row"
  },
  icon:{
   marginRight:16
  }
});
