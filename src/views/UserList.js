import React, { useContext, useState, useEffect } from "react";
import { Alert, FlatList, View, StyleSheet } from "react-native";
import { ListItem, Avatar, SearchBar } from 'react-native-elements';
import UsersContext from "../context/UsersContext";

export default function UserList({ navigation }) {
  const { state, dispatch } = useContext(UsersContext);
  const [originalList, setOriginalList] = useState(state.users);
  const [filteredUsers, setFilteredUsers] = useState(originalList);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setOriginalList(state.users);
    setFilteredUsers(state.users);
  }, [state.users]);

  const confirmUserDeletion = (user) => {
    Alert.alert('Excluir Usuario', 'Deseja Excluir o usuario', [
      {
        text: 'sim',
        onPress() {
          dispatch({
            type: 'deleteUser',
            payload: user,
          });
        }
      },
      {
        text: 'Não'
      }
    ]);
  }

  const getUserItem = ({ item: user }) => {
    return (
      <ListItem
        key={user.id}
        bottomDivider
        onPress={() => navigation.navigate('UserForm', user)}
      >
        <Avatar
          rounded
          source={{ uri: user.avatar }}
        />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Title>{user.endereco}</ListItem.Title>
          <ListItem.Title>{user.contato}</ListItem.Title>
          <ListItem.Title>{user.categoria}</ListItem.Title>
          <ListItem.Title>{user.email}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron
          name="edit"
          size={25}
          color="orange"
          onPress={() => navigation.navigate('UserForm', user)}
        />
        <ListItem.Chevron
          name="delete"
          size={25}
          color="red"
          onPress={() => confirmUserDeletion(user)}
        />
      </ListItem>
    );
  }

  const handleSearch = (text) => {
    setSearchTerm(text);
    const filtered = originalList.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
    setFilteredUsers(filtered);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Digite para buscar fornecedores..."
        onChangeText={handleSearch}
        value={searchTerm}
      />
      <FlatList
        keyExtractor={(user) => user.id.toString()}
        data={filteredUsers}
        renderItem={getUserItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
