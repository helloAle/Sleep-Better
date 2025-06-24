import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('./assets/icon.png')} style={styles.icon} />
      <Image source={require('./assets/logo2.png')} style={styles.logo} />
      <Text style={styles.subtitle}>Descubra os melhores horários para dormir e acorde renovado</Text>

      <TextInput placeholder="Usuario" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Senha" style={styles.input} secureTextEntry />

      <View style={styles.row}>
        <Text style={styles.link}>Já possui conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Logar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.aboutButton} onPress={() => navigation.navigate('About')}>
        <Text style={styles.aboutButtonText}>Sobre</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1b2a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: -20,
    resizeMode: 'contain',
  },
  logo: {
    width: 300,
    height: 120,
    marginBottom: -10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  link: {
    color: '#1f6f8b',
    textDecorationLine: 'underline',
    fontSize: 13,
  },
  button: {
    backgroundColor: '#1f6f8b',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  aboutButton: {
    backgroundColor: '#1f6f8b',
    padding: 10,
    borderRadius: 6,
    width: '60%',
    alignItems: 'center',
    marginBottom: 10,
  },
  aboutButtonText: {
    color: '#fff',
  },
  footerText: {
    fontSize: 12,
    color: '#a3b8cc',
    textAlign: 'center',
  },
});
