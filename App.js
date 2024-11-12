import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { db } from './src/firebaseConnection'; //importando o banco de dados

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Dominado o firebase</Text>
      <Text>Quem manda é o javaScripito</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
