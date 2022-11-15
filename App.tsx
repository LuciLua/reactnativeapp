import styles from './src/styles/globals'
import { View, Text } from 'react-native';

import { Routes } from './src/routes';
import MainHeader from './src/components/Header';

import { useState } from 'react'

export default function App() {

  return (
      <View style={styles.container}>
        <MainHeader />
        <Routes />
      </View>
  );
}