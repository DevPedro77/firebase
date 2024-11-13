import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { db } from './src/firebaseConnection'; //importando o banco de dados
import {addDoc, collection, doc, getDoc, onSnapshot} from 'firebase/firestore';

export default function App() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('');
  const [cargo, setCargo] = useState('')

  useEffect(() => {
    async function getDados() {
      //onSnapshot(doc(db, 'users', '1'), (doc) => {
        //setNome(doc.data()?.nome)
      //})

    }
    getDados();
  },[])

  async function RegisterUser() {
    await addDoc(collection(db, "users"), {
      nome: {nome},
      idade: {idade},
      cargo: {cargo}
    })
    .then(() => {
      alert('Cadastrado com sucesso')
      setCargo('')
      setIdade('')
      setNome('')
    })
    .catch( (err) => {
      alert(err + 'Error')
    })
  }
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, marginTop: 45, textAlign: 'center'}}>Formulario de Cadastro</Text>

      <Text style={styles.textInput}>Nome</Text>
      <TextInput
        placeholder='Digite seu nome'
        style={styles.input}
        value={nome}
        onChangeText={ (text) => {setNome(text)}}
      />
      <Text style={styles.textInput}>Cargo</Text>
      <TextInput
        placeholder='Digite seu Cargo'
        style={styles.input}
        value={cargo}
        onChangeText={ (text) => {setCargo(text)}}
      />
      <Text style={styles.textInput}>Idade</Text>
      <TextInput
        placeholder='Digite seu Idade'
        style={styles.input}
        value={idade}
        onChangeText={ (text) => {setIdade(text)}}
      />
      <TouchableOpacity style={styles.btnCadastro} onPress={RegisterUser}>
        <Text style={styles.btnText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textInput: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 8
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    marginLeft: 8,
    marginRight: 8,
    color: '#000',
    fontSize: 16,
    marginBottom: 8
  },
  btnCadastro: {
    backgroundColor: '#000',
    marginLeft: 8,
    marginRight: 8
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    padding: 8,
  }
  
});
