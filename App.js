import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { db } from './src/firebaseConnection'; //importando o banco de dados
import {doc, getDoc, onSnapshot} from 'firebase/firestore';

export default function App() {
  const [nome, setNome] = useState('Carregando...')

  useEffect(() => {
    async function getDados() {
      /*const docref = doc(db, 'users', '1')
      getDoc(docref)
      .then((snapshot) =>{
        setNome(snapshot.data()?.nome)
      })
      .catch( (err) => {
        alert('Error: ')
        alert(err)
      })
      */
      onSnapshot(doc(db, 'users', '1'), (doc) => {
        setNome(doc.data()?.nome)
      })

    }
    getDados();
  },[])
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24}}>Usuario: {nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
