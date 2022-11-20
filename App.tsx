import styles from './src/styles/globals'
import { View, Text } from 'react-native';

import { Routes } from './src/routes';
import MainHeader from './src/components/Header';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  function backInitial() {
    console.log('how to back omg')
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#ffd119' translucent={false}/>
      <MainHeader onPress={backInitial} />
      <Routes />
    </View>
  );
}