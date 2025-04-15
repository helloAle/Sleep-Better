import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location'; // Importe o módulo de localização

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState<string | null>(null);

  // Verifica e solicita permissão para acessar a localização
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão de Localização', 'Desculpe, precisamos de permissão para acessar a localização.');
      }
    })();
  }, []);

  // Função para obter e exibir a localização atual
  const getLocation = async () => {
    const { coords } = await Location.getCurrentPositionAsync({});
    setLocation(`${coords.latitude}, ${coords.longitude}`);
  };

  // Função para lidar com o início da regulagem do sono
  const handleStartSleepRegulation = () => {
    navigation.navigate('Formulario');
  };

  // Função para definir a localização manualmente
  const handleSetLocationManually = () => {
    Alert.prompt(
      'Definir Localização Manualmente',
      'Insira a latitude e a longitude separadas por vírgula (ex: 12.345, -67.890)',
      (text) => {
        const [lat, long] = text.split(',').map((coord) => parseFloat(coord.trim()));

        if (!isNaN(lat) && !isNaN(long)) {
          setLocation(`${lat}, ${long}`);
        } else {
          Alert.alert('Erro', 'Por favor, insira valores de latitude e longitude válidos.');
        }
      }
    );
  };

  // Função para lidar com o logout
  const handleLogout = () => {
    navigation.navigate('TabOneScreen');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./imagens/logonenem.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Bem-vindo ao Sleep Better</Text>
      <Text style={styles.description}>
        O Sleep Better é seu parceiro para uma noite de sono mais saudável e revigorante.
        Monitore seu sono, crie rotinas saudáveis e experimente a diferença em sua vida.
      </Text>
      {location && (
        <Text style={styles.locationText}>Localização Atual: {location}</Text>
      )}
      <TouchableOpacity style={styles.getStartedButton} onPress={handleStartSleepRegulation}>
        <Text style={styles.getStartedButtonText}>Comece a Regular o Sono</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.manualLocationButton} onPress={getLocation}>
        <View style={styles.iconContainer}>
          <Icon name="map-pin" size={20} color="#fff" />
          <Text style={styles.manualLocationButtonText}>Definir Localização</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

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
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  locationText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
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
  manualLocationButton: {
    marginTop: 10,
    backgroundColor: '#ff9900',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  manualLocationButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  logoutButton: {
    marginTop: 10,
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  logoutButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Home;
