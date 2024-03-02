// SearchScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Adicione a lógica de filtragem aqui, utilizando o termo de busca (searchTerm)
    // Você pode passar os resultados de volta para a tela principal (UserList)
    // ou realizar a filtragem diretamente na tela principal.

    // Exemplo: navigation.navigate('UserList', { searchTerm });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite sua busca..."
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />
      <Button title="Buscar" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: '100%',
  },
});

export default SearchScreen;
