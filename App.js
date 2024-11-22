import React from "react";
import { Text, View, StyleSheet } from "react-native";
import FormsUser from "./src/formsUser";

export default function App(){
  return(
    <View style={styles.container}>
      <FormsUser/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  }
})