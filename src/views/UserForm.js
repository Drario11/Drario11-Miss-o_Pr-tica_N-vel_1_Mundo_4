import React, {useContext, useState} from "react";
import { Button, StyleSheet, Text, TextInput, View  } from "react-native";
import UsersContext from "../context/UsersContext";

export default ({route, navigation}) =>{
  const [user, setUser ]= useState(route.params ? route.params: {} )
  const{ dispatch } = useContext(UsersContext)
    return(
        <View style={style.formm}>
            <Text>Name</Text>
            <TextInput 
            style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o nome"
                value={user.name}
            />
            <Text>Endereço</Text>
            <TextInput 
            style={style.input}
                onChangeText={endereco => setUser({...user, endereco})}
                placeholder="Informe o Endereço"
                value={user.endereco}
            />
            <Text>Contato</Text>
            <TextInput 
            style={style.input}
                onChangeText={contato => setUser({...user, contato})}
                placeholder="Informe o Telefone"
                value={user.contato}
            />
            <Text>Categoria de produtos fornecedor</Text>
            <TextInput 
            style={style.input}
                onChangeText={categoria => setUser({...user, categoria})}
                placeholder="Informe o categoria do Produto"
                value={user.categoria}
            />
            
            
            <Text>Email</Text>
            <TextInput 
            style={style.input}
                onChangeText={email => setUser({...user, email})}
                placeholder="Informe o E-mail"
                value={user.email}
            />
            <Text>URL do Avatar</Text>
            <TextInput 
            style={style.input}
                onChangeText={avatar => setUser({...user, avatar})}
                placeholder="Informe o URL do avatar"
                value={user.avatar}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                })
                    navigation.goBack()
                }}
            />
        </View>
        
        
    )
}

const style = StyleSheet.create({
    formm:{
        padding: 15
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    }
})
