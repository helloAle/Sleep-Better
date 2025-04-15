import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

function CadastroScreen() {
  const navigation = useNavigation();
  const [nomeUsuario, setNomeUsuario] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [foto, setFoto] = useState<string | null>(null);

  useEffect(() => {
    // Solicitar permissão para acessar a câmera e a galeria de fotos
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Desculpe, precisamos de permissão para acessar a câmera e a galeria de fotos.');
      }
    })();
  }, []);

    // Função para navegar para a tela de login
  const navigateToLogin = () => {
    // Navega para a tela de login ('TabOneScreen' é o nome da tela de login)
    navigation.navigate('TabOneScreen');
  };

  const handleCadastro = () => {
    // Implemente a lógica de cadastro aqui.
    // Após o cadastro, navegue para a tela apropriada.
    navigation.navigate('Home'); // Alterado para 'Home' como exemplo
  };

  const handleEscolherFoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setFoto(result.uri);
    }
  };

  const handleTirarFoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setFoto(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Sleep Better</Text>
      {/* Renderiza uma logo */}
      <Image
        source={require('./imagens/Logo.jpg')}
        style={styles.logo}
      />
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        value={nomeUsuario}
        onChangeText={(text) => setNomeUsuario(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <Text style={styles.subtitle}>Escolha uma foto de perfil:</Text>
      {foto && <Image source={{ uri: foto }} style={styles.foto} />}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleEscolherFoto} style={styles.button}>
          <MaterialIcons name="image" size={24} color="#ffffff" />
          <Text style={styles.buttonText}>Escolher Foto</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTirarFoto} style={styles.button}>
          <MaterialIcons name="camera-alt" size={24} color="#ffffff" />
          <Text style={styles.buttonText}>Tirar Foto</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleCadastro} style={styles.cadastroButton}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Já tem uma conta?</Text>
        <TouchableOpacity onPress={navigateToLogin}>
          <Text style={styles.loginLink}>Faça login agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'sans-serif', // Defina a fonte
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'sans-serif', // Defina a fonte
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
  cadastroButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    color: '#333',
  },
  loginLink: {
    color: '#007bff',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007bff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    width: '48%',
    justifyContent: 'center',
  },
  foto: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 100,
    marginTop: 10,
  },
});

export default CadastroScreen;
