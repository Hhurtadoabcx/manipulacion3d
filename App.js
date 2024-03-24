import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Gyroscope } from 'expo-sensors';

export default function App() {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    _subscribe();

    return () => {
      _unsubscribe();
    };
  }, []);

  const _subscribe = () => {
    Gyroscope.addListener((gyroscopeData) => {
      setData(gyroscopeData);
    });
    Gyroscope.setUpdateInterval(1000); // Intervalo de actualización
  };

  const _unsubscribe = () => {
    Gyroscope.removeAllListeners();
  };

  return (
    <View style={styles.container}>
      <Text>Gyroscope Data:</Text>
      <Text>X: {data.x.toFixed(2)}</Text>
      <Text>Y: {data.y.toFixed(2)}</Text>
      <Text>Z: {data.z.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
