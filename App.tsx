import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainHeader from './src/components/Header';
import styles from './src/styles/globals'

export default function App() {
  return (
    <View style={styles.container}>
      <MainHeader />
      <StatusBar style="auto" />
    </View>
  );
}