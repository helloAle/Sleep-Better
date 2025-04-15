import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Formulario() {
  // Estados para armazenar os valores dos campos de entrada
  const [sleepTime, setSleepTime] = useState('');
  const [sleepDuration, setSleepDuration] = useState('');
  const [sleepNote, setSleepNote] = useState('');

  // Obtém a instância de navegação
  const navigation = useNavigation();

  // Função para lidar com o envio dos dados e navegação
  const handleStartSleepRegulation = () => {
    // Implementação da lógica para enviar os dados para onde for necessário aqui

    // Navega para a tela de feedback e passa os dados como parâmetros
    navigation.navigate('Feedback', {
      sleepTime,
      sleepDuration,
      sleepNote,
    });
  };

  return (
    <View style={styles.container}>
      {/* Renderiza uma logo */}
      <Image
        source={require('./imagens/Anotações.png')}
        style={styles.logo}
      />

      {/* Título da tela */}
      <Text style={styles.title}>Preencha as Informações</Text>

      {/* Campo de entrada para "Que horas você dormiu?" */}
      <TextInput
        style={styles.input}
        placeholder="Que horas você dormiu?"
        value={sleepTime}
        onChangeText={(text) => setSleepTime(text)}
      />

      {/* Campo de entrada para "Quanto tempo você dormiu?" */}
      <TextInput
        style={styles.input}
        placeholder="Quanto tempo você dormiu?"
        value={sleepDuration}
        onChangeText={(text) => setSleepDuration(text)}
      />

      {/* Campo de entrada para "Alguma observação?" */}
      <TextInput
        style={styles.input}
        placeholder="Alguma observação?"
        value={sleepNote}
        onChangeText={(text) => setSleepNote(text)}
      />

      {/* Botão "Enviar" que chama a função handleStartSleepRegulation quando pressionado */}
      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={handleStartSleepRegulation}
      >
        <Text style={styles.getStartedButtonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos CSS para os elementos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  getStartedButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  getStartedButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});
