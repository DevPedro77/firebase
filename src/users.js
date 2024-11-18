import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import {db} from './firebaseConnection'
import {deleteDoc, doc} from 'firebase/firestore'

export function UsersList({ data }) {

  async function deleteItem () {
    const docRef = doc(db, 'users', data.id)
    await deleteDoc(docRef)
  }

  return (
    <View style={styles.container}>
      {/* Verificando e acessando as propriedades corretamente */}
      <Text>Nome: {data.nome?.nome || data.nome}</Text>
      <Text>Idade: {data.idade?.idade || data.idade}</Text>
      <Text>Cargo: {data.cargo?.cargo || data.cargo}</Text>
      <TouchableOpacity style={styles.button} onPress={deleteItem}>
        <Text style={styles.buttonText}>Deletar usuario</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 4,
    marginBottom: 14,
  },
  button: {
    backgroundColor: 'red',
    alignSelf: 'flex-start',
    padding: 4,
    borderRadius: 4,
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    paddingLeft: 8,
    paddingRight: 8
  }
})
