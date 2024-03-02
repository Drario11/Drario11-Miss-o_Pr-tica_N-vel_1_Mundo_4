import React, { useContext } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import users from "../data/users";
import { Avatar, Button, Icon, ListItem } from 'react-native-elements';
import UsersContext from "../context/UsersContext";


export default props =>{

   const { state, dispatch }= useContext( UsersContext)
   

    //ainda tem que passar o botão
    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuario', 'Deseja Excluir o usuario',[
            {
                text: 'sim',
                onPress(){
                    dispatch({
                        type: 'deleteUser',
                        payload: user, 
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }


    function getUserItem({ item: user }){
        return(
            <ListItem
            key={user.id}
            bottomDivider
            //ao Clicar no elemento 
            onPress={()=>props.navigation.navigate('UserForm', user)}
            //crian o botão do lapis na funcão getActions                               
             >
                <Avatar
                rounded
                source={{uri: user.avatar}}
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
                    onPress={()=> props.navigation.navigate('UserForm', user)}
                />
                <ListItem.Chevron
                    name="delete"
                    size={25}
                    color="red"
                    onPress={()=> confirmUserDeletion(user)}
                />
                        
                </ListItem> 

        )
              
    }
    return(
        <View>
            <FlatList
            keyExtractor={user => user.id.toString() }
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}