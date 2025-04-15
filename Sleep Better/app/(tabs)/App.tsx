import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabOneScreen from './TabOneScreen'; // Importa a Tela de Login
import TabTwoScreen from './TabTwoScreen'; // Importa a Tela de Cadastro
import TabThreeScreen from './TabThreeScreen'; // Importa a Tela de Esqueci a Senha
import HomeScreen from './Home'; // Importa a Tela de Home
import FormularioScreen from './Formulario'; // Importa a Tela de Formulário
import FeedbackScreen from './Feedback'; // Importa a Tela de Feedback
import modalScreen from './modal'; // Importa a Tela de modal

// Cria uma instância do Stack Navigator
const Stack = createStackNavigator();

// Componente principal do aplicativo
function App() {
  return (
    // Define o container de navegação do aplicativo
    <NavigationContainer>
      {/* Configura o Stack Navigator */}
      <Stack.Navigator initialRouteName="Login">
         {/* Define a tela "Login" associada ao componente TabOneScreen */}
         <Stack.Screen name="Login" component={TabOneScreen} />
         {/* Define a tela "Cadastro" associada ao componente TabTwoScreen */}
         <Stack.Screen name="Cadastro" component={TabTwoScreen} />
         {/* Define a tela "Home" associada ao componente HomeScreen */}
         <Stack.Screen name="Esqueci a Senha" component={TabThreeScreen} />
         {/* Define a tela "Esqueci a Senha" associada ao componente TabThreeScreen */}
         <Stack.Screen name="Home" component={HomeScreen} />
         {/* Define a tela "Formulário" associada ao componente FormularioScreen */}
         <Stack.Screen name="Formulario" component={FormularioScreen} />
         {/* Define a tela "Feedback" associada ao componente FeedbackScreen */}
         <Stack.Screen name="Feedback" component={FeedbackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

