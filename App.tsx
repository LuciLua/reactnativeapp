import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Cards from './src/components/Cards/Cards';
import MainHeader from './src/components/Header';
import MyName from './src/components/MyName';
import Home from './src/pages/Home';
import Initial from './src/pages/Initial';
import styles from './src/styles/globals'

import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  const [name, setName] = useState<any>([])

  return (
    <View style={styles.container}>
      <MainHeader name={name} />
      {/* <Initial /> */}
      <Home />
      <MyName setName={setName} name={name} />
    </View>
  );
}