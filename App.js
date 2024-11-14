import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { db } from './src/firebaseConnection'
import { doc, getDoc, onSnapshot, setDoc, collection, addDoc, getDocs } from 'firebase/firestore'
import { UsersList } from './src/users'


export default function App() {
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [cargo, setCargo] = useState("")

  const [users, setUsers] = useState([]);

  const [showForm, setShowForm] = useState(true);

  useEffect(() => {

    async function getDados(){

    const usersRef = collection(db, "users");

    getDocs(usersRef)
    .then((snapshot) => {
      let lista = [];

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          nome: doc.data().nome,
          idade: doc.data().idade,
          cargo: doc.data().cargo
        })
      })

      setUsers(lista);

    })
    .catch((err) => {
      console.log(err);
    })

    }


    getDados();

  }, [])


  async function handleRegister(){
    await addDoc(collection(db, "users"), {
      nome: nome,
      idade: idade,
      cargo: cargo,
    })
    .then(() => {
      console.log("CADASTRADO COM SUCESSO")
      setNome("")
      setIdade("")
      setCargo("")
    })
    .catch((err) => {
      console.log(err)
    })

  }

  function handleToggle(){
    setShowForm(!showForm);
  }

 return (
  <View style={styles.container}>
    { showForm && (
      <View>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome..."
          value={nome}
          onChangeText={ (text) => setNome(text) } 
        />

        <Text style={styles.label}>Idade:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua idade..."
          value={idade}
          onChangeText={ (text) => setIdade(text) } 
        />

        <Text style={styles.label}>Cargo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o seu cargo..."
          value={cargo}
          onChangeText={ (text) => setCargo(text) } 
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    )}

    <TouchableOpacity onPress={handleToggle} style={{ marginTop: 8}}>
      <Text style={{ textAlign:"center", color: "#000" }}>
        {showForm ? "Esconder formulário" : "Mostrar formulário"}
      </Text>
    </TouchableOpacity>


    <Text style={{ marginTop: 14, marginLeft: 8, fontSize: 20, color: "#000"}}>
      Usuários:
    </Text>

    <FlatList
      style={styles.list}
      data={users}
      keyExtractor={ (item) => String(item.id) }
      renderItem={ ({ item }) => <UsersList data={item} /> }
    />


  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    paddingTop: 40
  },
  button:{
    backgroundColor: "#000",
    marginLeft: 8,
    marginRight: 8,
  },
  buttonText:{
    padding: 8,
    color: "#FFF",
    textAlign: 'center'
  },
  label:{
    color: "#000", 
    fontSize: 18, 
    marginBottom: 4,
    marginLeft: 8,
  },
  input:{
    borderWidth: 1,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  list:{
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
  }
})