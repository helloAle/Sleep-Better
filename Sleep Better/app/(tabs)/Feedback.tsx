import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

// Definição das propriedades da tela de feedback
interface FeedbackScreenProps {
  sleepTime: string;
  sleepDuration: string;
  sleepNote: string;
}

// Componente da tela de feedback
const FeedbackScreen: React.FC<FeedbackScreenProps> = ({ sleepTime, sleepDuration, sleepNote }) => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container}>
      {/* Renderiza uma logo */}
      <Image
        source={require('./imagens/checkin.jpg')}
        style={styles.logo}
      />

      {/* Título da tela */}
      <Text style={styles.title}>Feedback dos Dados Preenchidos</Text>

      {/* Exibe os dados preenchidos pelo usuário */}
      <Text style={styles.feedbackText}>Hora de Dormir: {route.params.sleepTime}</Text>
      <Text style={styles.feedbackText}>Duração do Sono: {route.params.sleepDuration}</Text>
      <Text style={styles.feedbackText}>Observação: {route.params.sleepNote}</Text>

      {/* Botão "Voltar" que navega de volta para a tela de Home */}
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.goBackButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos CSS para os elementos da tela de feedback
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
  feedbackText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  goBackButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  goBackButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FeedbackScreen;
