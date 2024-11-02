// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

// Definindo o tipo de navegação para a HomeScreen
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao StockFlux</Text>
      <Button title="Ir para Funcionalidades" onPress={() => navigation.navigate('Features')} />
      <Button title="Sobre o Projeto" onPress={() => navigation.navigate('About')} />
      <Button title="Newsletter" onPress={() => navigation.navigate('Newsletter')} />
      <Button title="Configurações" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
});

export default HomeScreen;
