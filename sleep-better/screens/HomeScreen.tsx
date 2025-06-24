import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView, Linking } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';


export default function HomeScreen() {
  const [wakeTime, setWakeTime] = useState<string>('');
  const [results, setResults] = useState<string[]>([]);
  const navigation = useNavigation();

  const calculateSleepTimes = () => {
    if (!wakeTime) {
      setResults(['Por favor, informe o horário.']);
      return;
    }

    const [hours, minutes] = wakeTime.split(':').map(Number);
    if (isNaN(hours) || isNaN(minutes)) {
      setResults(['Formato inválido. Use HH:MM']);
      return;
    }

    const wakeDate = new Date();
    wakeDate.setHours(hours);
    wakeDate.setMinutes(minutes);
    wakeDate.setSeconds(0);

    const cycleDuration = 90; // minutos
    const recommendedCycles = [5, 4]; // 7h30 e 6h

    const times: string[] = recommendedCycles.map(cycleCount => {
      const sleepTime = new Date(wakeDate.getTime() - cycleCount * cycleDuration * 60000);
      const timeString = sleepTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      return `Dormindo às ${timeString} → ${cycleCount * 1.5} horas de sono`;
    });

    setResults(times);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('./assets/icon.png')} style={styles.icon} />
      <Image source={require('./assets/logo2.png')} style={styles.logo} />
        <Text style={styles.subtitle}>
          Descubra os melhores horários para dormir e acorde renovado.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Que horas você quer acordar? (HH:MM)"
          placeholderTextColor="#999"
          onChangeText={setWakeTime}
        />

        <View style={styles.button}>
          <Button title="Calcular" onPress={calculateSleepTimes} color="#1f6f8b" />
        </View>


        <View style={styles.results}>
          {results.map((item, index) => (
            <Text key={index} style={styles.resultText}>
              {item}
            </Text>
          ))}
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.navigateButton}
            onPress={() => navigation.navigate('SleepRegister')}
          >
            <Text style={styles.navigateButtonText}>Ir para Registro</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
              style={styles.navigateButton}
              onPress={() => navigation.navigate('About')}
            >
              <Text style={styles.navigateButtonText}>Ir para Sobre</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          App desenvolvido por{' '}
          <Text
            style={{ color: '#1f6f8b', textDecorationLine: 'underline' }}
            onPress={() => Linking.openURL('https://github.com/helloAle')}
          >
            github.com/helloAle
          </Text>
        </Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    fontSize: 28,
    color: '#fff',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#a3b8cc',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    width: '100%',
    marginBottom: 20,
  },
  results: {
    marginTop: 20,
    width: '100%',
  },
  resultText: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#0d1b2a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#1f6f8b',
  },
  footerText: {
    color: '#a3b8cc',
    textAlign: 'center',
    fontSize: 12,
  },

  navigateButton: {
    marginTop: 40,
    backgroundColor: '#1f6f8b',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
},

navigateButtonText: {
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