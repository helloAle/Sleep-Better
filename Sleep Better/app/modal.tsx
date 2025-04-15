import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre o Aplicativo</Text>
      <Text style={styles.text}>
        Este aplicativo foi projetado para ajudá-lo a controlar e melhorar a qualidade do seu sono.
        Ele oferece recursos para monitorar seu sono, criar rotinas de sono saudáveis e muito mais.
      </Text>
      <Text style={styles.featuresTitle}>Recursos Principais:</Text>
      <View style={styles.featureItem}>
        <Text style={styles.features}>- Registro de padrões de sono.</Text>
      </View>
      <View style={styles.featureItem}>
        <Text style={styles.features}>- Estatísticas de sono detalhadas.</Text>
      </View>
      <View style={styles.featureItem}>
        <Text style={styles.features}>- Alarmes personalizáveis.</Text>
      </View>
      <View style={styles.featureItem}>
        <Text style={styles.features}>- Dicas para melhorar a qualidade do sono.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center', // Centralizar o texto horizontalmente
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  featuresTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  features: {
    fontSize: 16,
    marginLeft: 10,
  },
});
