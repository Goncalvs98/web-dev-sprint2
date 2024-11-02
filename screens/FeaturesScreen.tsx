import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type FeaturesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Features'>;

interface Props {
  navigation: FeaturesScreenNavigationProp;
}

const FeaturesScreen: React.FC<Props> = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState<keyof typeof modalContent | null>(null);

  const functionalities = [
    { id: 'modalControleEstoque', src: require('../../assets/controle_estoque.jpg'), title: "Controle de Estoque" },
    { id: 'modalGestaoFornecedores', src: require('../../assets/gestao_fornecedores.jpg'), title: "Gestão de Fornecedores" },
    { id: 'modalGestaoVendas', src: require('../../assets/getao_vendas.jpg'), title: "Planejamento de Compras" },
    { id: 'modalRastr', src: require('../../assets/movimentacoes.jpg'), title: "Rastreamento de Movimentações" },
    { id: 'modalAnalise', src: require('../../assets/analise_dados.jpg'), title: "Análise de Dados" },
    { id: 'modalInteg', src: require('../../assets/integracao.jpg'), title: "Integração com Sistemas Existentes" },
    { id: 'modalDash', src: require('../../assets/dashboard.jpg'), title: "Dashboard Centralizado" },
    { id: 'modalIA', src: require('../../assets/ia_tomada.jpg'), title: "IA para Tomada de Decisão" },
    { id: 'modalAtualAuto', src: require('../../assets/atualizacao.jpg'), title: "Atualizações Automáticas" },
    { id: 'modalPersoArea', src: require('../../assets/personalizacao.jpg'), title: "Personalização por Área" },
    { id: 'modalAlarmesNotific', src: require('../../assets/alarmes.jpg'), title: "Alarmes e Notificações" },
  ];

  
const modalContent = {
  modalControleEstoque: "StockFlux oferece recursos avançados para o controle preciso do estoque de insumos, permitindo monitorar as quantidades disponíveis, realizar ajustes de inventário e prever demandas futuras.",
  modalGestaoFornecedores: "O sistema facilita o gerenciamento de fornecedores, comparar preços e negociar contratos para garantir as melhores condições de compra.",
  modalGestaoVendas: "StockFlux ajuda na elaboração de planos de compras estratégicos estratégicos, identificando as necessidades de insumos com base na demanda projetada e nas políticas de estoque.",
  modalRastr: "O sistema registra todas as movimentações de insumos, desde a entrada no estoque até o uso em processos produtivos ou saída para clientes, garantindo rastreabilidade e controle total.",
  modalAnalise: "StockFlux oferece ferramentas de análise de dados poderosas, permitindo extrair insights valiosos sobre o consumo de insumos, padrões de compra e tendências de mercado para embasar decisões estratégicas.",
  modalInteg: "O sistema é projetado para integração perfeita com outros sistemas existentes na empresa, garantindo uma troca eficiente de informações e uma visão unificada dos processos.",
  modalDash: "StockFlux oferece um dashboard completo que centraliza todas as informações relevantes sobre desabastecimento de medicamentos, permitindo uma rápida visualização e análise dos dados.",
  modalIA: "O sistema utiliza inteligência artificial (IA) para auxiliar na tomada de decisões, fornecendo insights e recomendações com base em padrões de dados históricos e análises preditivas.",
  modalAtualAuto: "O dashboard do StockFlux é atualizado automaticamente em tempo real, garantindo que as informações estejam sempre atualizadas e disponíveis para rápida ação.",
  modalPersoArea: "O sistema personaliza as informações apresentadas no dashboard de acordo com as necessidades específicas de cada área da empresa, garantindo que cada equipe tenha acesso às informações relevantes para sua atuação.",
  modalAlarmesNotific: "StockFlux oferece funcionalidades de alarmes e notificações para alertar as equipes sobre casos de desabastecimento crítico, garantindo uma rápida ",
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Principais Funcionalidades:</Text>
      <ScrollView contentContainerStyle={styles.imageList}>
        {functionalities.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.imageButton}
            onPress={() => setModalVisible(item.id as keyof typeof modalContent)}
          >
            <Image source={item.src} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Modal */}
      <Modal
        visible={!!modalVisible}
        transparent
        onRequestClose={() => setModalVisible(null)}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{functionalities.find(item => item.id === modalVisible)?.title}</Text>
            <Text style={styles.modalText}>{modalVisible ? modalContent[modalVisible] : ''}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(null)}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  imageListMobile: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageButton: {
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FeaturesScreen;
