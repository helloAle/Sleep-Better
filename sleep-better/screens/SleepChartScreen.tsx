import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SleepChartScreen() {
  const screenWidth = Dimensions.get('window').width;
  const [sleepData, setSleepData] = useState<number[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await AsyncStorage.getItem('sleepData');
      if (data) {
        setSleepData(JSON.parse(data));
      }
    };
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/icon.png')} style={styles.icon} />
      <Text style={styles.title}>Seu Histórico de Sono</Text>
      <LineChart
        data={{
          labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].slice(0, sleepData.length),
          datasets: [{ data: sleepData }]
        }}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          backgroundGradientFrom: '#0B1E3D',
          backgroundGradientTo: '#0B1E3D',
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: () => '#fff'
        }}
        bezier
        style={{ borderRadius: 16 }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1b2a',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
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
    fontWeight: 'bold'
  },
  chart: {
    borderRadius: 16
  }
});




//    _____                                            .___
//   / ___ \  _________________  ________    ____    __| _/
//  / / ._\ \/  ___/\___   /\  \/  /\__  \  /    \  / __ | 
// <  \_____/\___ \  /    /  >    <  / __ \|   |  \/ /_/ | 
//  \_____\ /____  >/_____ \/__/\_ \(____  /___|  /\____ | 
//               \/       \/      \/     \/     \/      \/ 