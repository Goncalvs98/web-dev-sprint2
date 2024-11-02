// src/screens/NewsletterScreen.tsx
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const NewsletterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Newsletter</Text>
      <TextInput placeholder="Nome" style={styles.input} />
      <TextInput placeholder="E-mail" style={styles.input} keyboardType="email-address" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Inscrever</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
  button: { backgroundColor: '#007bff', padding: 15, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default NewsletterScreen;
