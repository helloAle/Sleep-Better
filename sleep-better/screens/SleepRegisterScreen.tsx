import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider'; // <- Import correto
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SleepRegisterScreen() {
  const [sleepValue, setSleepValue] = useState(7);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('./assets/icon.png')} style={styles.icon} />
      <Text style={styles.title}>Registro de Sono</Text>
      <Text style={styles.value}>{sleepValue} horas</Text>

      <Slider
        style={{ width: '100%', height: 40 }}
        minimumValue={1}
        maximumValue={12}
        step={1}
        value={sleepValue}
        onValueChange={setSleepValue}
        minimumTrackTintColor="#4CAF50"
        maximumTrackTintColor="#FFC107"
        thumbTintColor="#2196F3"
      />

      <View style={styles.labels}>
        <Text style={{ color: 'red' }}>Pouco</Text>
        <Text style={{ color: 'green' }}>Ideal</Text>
        <Text style={{ color: 'gold' }}>Muito</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          try {
            const existingData = await AsyncStorage.getItem('sleepData');
            const parsedData = existingData ? JSON.parse(existingData) : [];

            let updatedData = [...parsedData, sleepValue];
            if (updatedData.length > 7) {
              updatedData = updatedData.slice(updatedData.length - 7);
            }

            await AsyncStorage.setItem('sleepData', JSON.stringify(updatedData));

            console.log('Sono registrado:', sleepValue);
            navigation.navigate('SleepChart');
          } catch (error) {
            console.error('Erro ao registrar sono:', error);
          }
        }}
      >
        <Text style={styles.buttonText}>Registrar</Text>
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
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  value: {
    color: '#fff',
    fontSize: 32,
    marginBottom: 10,
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#1f6f8b',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});



//    _____                                            .___
//   / ___ \  _________________  ________    ____    __| _/
//  / / ._\ \/  ___/\___   /\  \/  /\__  \  /    \  / __ | 
// <  \_____/\___ \  /    /  >    <  / __ \|   |  \/ /_/ | 
//  \_____\ /____  >/_____ \/__/\_ \(____  /___|  /\____ | 
//               \/       \/      \/     \/     \/      \/ 