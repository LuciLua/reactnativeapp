import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import MainHeader from './src/components/Header';
import MyName from './src/components/MyName';
import styles from './src/styles/globals'

export default function App() {
  const [name, setName] = useState<any>([])
  return (
    <View style={styles.container}>
      <MainHeader name={name} setName={setName} />
      <StatusBar style="auto" />
      <MyName setName={setName} name={name}/>
    </View>
  );
}