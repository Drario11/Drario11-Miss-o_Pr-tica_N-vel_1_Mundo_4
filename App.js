// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Icon } from 'react-native-elements';
import { UsersProvider } from './src/context/UsersContext';
import UserList from './src/views/UserList';
import UserForm from './src/views/UserForm';
import SearchScreen from './src/views/SearchScreen'; // Importe a nova tela

const Stack = createNativeStackNavigator();

export default props => {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='UserList'
          screenOptions={screenOptions}
        >
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({ navigation }) => ({
              title: "Lista de Fornecedores",
              headerRight: () => (
                <>
                  <Button
                    onPress={() => navigation.navigate('UserForm')}
                    type='clear'
                    icon={<Icon name='add' size={25} color="white" />}
                    style={{ marginRight: 10 }}
                  />
                </>
              ),
            })}
          />
          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{
              title: "Formulário de Usuario"
            }}
          />
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{
              title: "Buscar Fornecedores"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
};
