// src/screens/AboutScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre o StockFlux</Text>
      <Text style={styles.description}>
        StockFlux é um sistema de gestão de insumos inteligente e eficiente projetado para otimizar o controle e a utilização de recursos.
      </Text>

      <Text style={styles.subtitle}>API do StockFlux</Text>
      <Text style={styles.description}>
        A API da aplicação web do StockFlux é desenvolvida em Flask e permite manipular e exibir dados relacionados ao controle de estoque. Ela gerencia o dashboard de insumos e está disponível no GitHub.
      </Text>

      <TouchableOpacity onPress={() => Linking.openURL('https://github.com/Goncalvs98/stock_flux.git')}>
        <Text style={styles.link}>GitHub: StockFlux API</Text>
      </TouchableOpacity>

      

      <Text style={styles.subtitle}>ChatBot de Consulta</Text>
      <Text style={styles.description}>
        O projeto inclui um chatbot inteligente que responde a perguntas sobre o estoque de medicamentos, usando Processamento de Linguagem Natural (PLN) e uma API REST para buscar dados detalhados sobre medicamentos.
      </Text>

      <Text style={styles.subtitle}>Funcionalidades do ChatBot</Text>
      <Text style={styles.description}>
        - Reconhecimento de Intenção: Identifica questões sobre o estoque.
        - Consulta de Estoque: Verifica quantidades e atualizações no estoque.
        - Respostas Inteligentes: Responde de maneira natural a consultas relacionadas a medicamentos.
      </Text>

      <Text style={styles.subtitle}>Aprendizados do Projeto</Text>
      <Text style={styles.description}>
        A equipe aprendeu a lidar com a integração de APIs e bancos de dados, aprimorando a resposta e adaptabilidade do chatbot para fornecer informações em tempo real aos usuários.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 20, fontWeight: 'bold', marginTop: 20, marginBottom: 5 },
  description: { fontSize: 16, lineHeight: 24 },
  link: { fontSize: 16, color: 'blue', textDecorationLine: 'underline' },
});

export default AboutScreen;
