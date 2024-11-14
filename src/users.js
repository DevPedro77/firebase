import { View, StyleSheet, Text } from 'react-native'

export function UsersList({ data }) {
  console.log(data);

  return (
    <View style={styles.container}>
      {/* Verificando e acessando as propriedades corretamente */}
      <Text>Nome: {data.nome?.nome || data.nome}</Text>
      <Text>Idade: {data.idade?.idade || data.idade}</Text>
      <Text>Cargo: {data.cargo?.cargo || data.cargo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 4,
    marginBottom: 14,
  }
})
