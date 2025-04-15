import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import { createStackNavigator, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from './Home';
import { RNCamera } from 'react-native-camera';

const TabOneScreen: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const cameraRef = useRef<RNCamera | null>(null);

  const navigation = useNavigation();

  // Função para navegar para a tela de cadastro
  const navigateToCadastro = () => {
    navigation.navigate('TabTwoScreen');
  };

  // Função para lidar com o login
  const handleLogin = () => {
    navigation.navigate('Home');
  };

  // Função para abrir a câmera
  const openCamera = () => {
    setIsCameraActive(true);
  };

  // Função para fechar a câmera
  const closeCamera = () => {
    setIsCameraActive(false);
  };

  // Função para tirar uma foto
  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const options = { quality: 0.5, base64: true };
        const data = await cameraRef.current.takePictureAsync(options);
        setCapturedImage(data.uri);
        closeCamera();
        // Implemente a lógica de autenticação do usuário com a foto capturada aqui.
      } catch (error) {
        console.error('Erro ao tirar foto:', error);
      }
    }
  };

  // Função para navegar para a tela "Esqueci minha senha"
  const navigateToForgotPassword = () => {
    navigation.navigate('TabThreeScreen');
  };

  return (
    <View style={styles.container}>
      {/* Inserção do nome do aplicativo "Sleep Better" */}
      <Text style={styles.appName}>Sleep Better</Text>

      {/* Renderiza uma logo */}
      <Image
        source={require('./imagens/Logo.jpg')}
        style={styles.logo}
      />

      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      {capturedImage && (
        <View>
          <Image source={{ uri: capturedImage }} style={styles.capturedImage} />
        </View>
      )}
      <TouchableOpacity onPress={navigateToForgotPassword}>
        <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Não tem uma conta?</Text>
        <TouchableOpacity onPress={navigateToCadastro}>
          <Text style={styles.signUpLink}>Cadastre-se agora</Text>
        </TouchableOpacity>
      </View>
      {isCameraActive && (
        <RNCamera
          ref={cameraRef}
          style={styles.camera}
          type={RNCamera.Constants.Type.front} // Altere para a câmera frontal ou traseira conforme necessário
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}
          captureAudio={false}
        />
      )}
      {isCameraActive && (
        <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
          <Text style={styles.captureButtonText}>Capturar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  // Estilos para o container principal
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  // Estilos para o nome do aplicativo
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  // Estilos para o logotipo
  logo: {
    width: 100, // Ajuste a largura do logotipo conforme necessário
    height: 100, // Ajuste a altura do logotipo conforme necessário
    marginBottom: 20,
  },
  // Estilos para o título "Login"
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  // Estilos para os campos de entrada de texto
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  // Estilos para o botão de login
  loginButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  // Estilos para o texto do botão de login
  loginButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  // Estilos para o link "Esqueceu a senha?"
  forgotPassword: {
    marginTop: 10,
    color: '#007bff',
    fontWeight: 'bold',
  },
  // Estilos para o container do link de cadastro
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  // Estilos para o texto "Não tem uma conta?"
  signUpText: {
    color: '#333',
  },
  // Estilos para o link "Cadastre-se agora"
  signUpLink: {
    color: '#007bff',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  // Estilos para a imagem capturada pela câmera
  capturedImage: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
  // Estilos para a câmera
  camera: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  // Estilos para o botão de captura de imagem
  captureButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#007bff',
    borderRadius: 50,
    padding: 15,
  },
  // Estilos para o texto do botão de captura de imagem
  captureButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TabOneScreen;
