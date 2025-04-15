import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState<string>('');
  const navigation = useNavigation();

  // Função para lidar com o envio do e-mail de redefinição de senha
  const handleSendResetEmail = () => {
    // Implemente a lógica para enviar o e-mail de redefinição de senha aqui.
    // Isso pode envolver uma chamada à API do servidor (anotação).

    // Após enviar o e-mail, redirecione o usuário de volta para a tela de login.
    navigation.navigate('TabOneScreen'); // 'TabOneScreen' é o nome da tela de login
  };

  return (
    <View style={styles.container}>
      {/* Renderiza uma logo */}
      <Image
        source={require('./imagens/Logo.jpg')}
        style={styles.logo}
      />

      <Text style={styles.title}>Esqueci minha senha</Text>
      <Text style={styles.description}>
        Insira seu endereço de e-mail abaixo e enviaremos um link para redefinir sua senha.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TouchableOpacity style={styles.sendEmailButton} onPress={handleSendResetEmail}>
        <Text style={styles.sendEmailButtonText}>Enviar E-mail de Redefinição</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('TabOneScreen')}>
        <Text style={styles.goBack}>Voltar para o Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 100, // Ajuste a largura do logotipo conforme necessário
    height: 100, // Ajuste a altura do logotipo conforme necessário
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  sendEmailButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  sendEmailButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  goBack: {
    marginTop: 10,
    color: '#007bff',
    fontWeight: 'bold',
  },
});
