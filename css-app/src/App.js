//import logo from './assets/images/logo.jpg';
import './App.css';
import alarme from "./assets/img/alarmes.jpg"
import dados from  "./assets/img/analise_dados.jpg"
import att from  "./assets/img/atualizacao.jpg"
import controle from   "./assets/img/controle_estoque.jpg"
import dash from   "./assets/img/dashboard.jpg"
import gestao from   "./assets/img/gestao_fornecedores.jpg"
import vendas from    "./assets/img/getao_vendas.jpg"
import tomada from "./assets/img/ia_tomada.jpg"
import integ from "./assets/img/integracao.jpg"
import mov from  "./assets/img/movimentacoes.jpg"
import pers from "./assets/img/personalizacao.jpg"
import telaControle from "./controle.js"
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./assets/css/style.css" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
      crossOrigin="anonymous"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossOrigin="anonymous"
    />
    <title>StockFlux</title>
    <div className="parallax" id="um">
      <span className="titulo">StockFlux</span>
    </div>
    <div id="apresentacao" className="apresentacao">
      <h1 id="titulo-intro">O que é a StockFlux?</h1>
      <p className="texto1" id="intro.txt">
        StockFlux é um sistema de gestão de insumos inteligente e eficiente
        projetado para otimizar o controle e a utilização de recursos em uma
        empresa. Este projeto visa proporcionar uma solução abrangente para a
        gestão de insumos, desde a aquisição até o uso ou descarte, com o objetivo
        de melhorar a eficiência operacional e reduzir custos.
      </p>
    </div>
    <div className="parallax" id="dois" />
    <div id="funcionalidades">
      <h1> Funcionalidades</h1>
      <p>
        O projeto StockFlux tem como objetivo principal resolver o problema da
        descentralização de informações no processo de desabastecimento de
        medicamentos, que envolve várias áreas da empresa e depende exclusivamente
        de esforço humano. Atualmente, a falta de centralização das informações
        resulta em atrasos na identificação e tratamento dos casos de
        desabastecimento, causando impactos negativos nas operações e no
        atendimento aos clientes.
      </p>
    </div>
    <div className="parallax" id="tres" />
    <section>
      <div id="funcionalidades">
        <h1>Principais Funcionalidades:</h1>
        <ul className="first-lines">
          <li>
            <button
              className="image btn"
              href={telaControle}
            >
              <img
                src={controle}
                alt="Um armazém ou depósito, com prateleiras cheias de caixas e produtos."
              />
            </button>
          </li>
          <li>
            <button
              className="image btn"
              data-bs-toggle="modal"
              data-bs-target="#modalGestaoFornecedores"
            >
              <img
                src={gestao}
                alt="Um armazém ou depósito, com prateleiras cheias de caixas e produtos."
              />
            </button>
          </li>
          <li>
            <button
              className="image btn"
              data-bs-toggle="modal"
              data-bs-target="#modalGestaoVendas"
            >
              <img
                src={vendas}
                alt="Um armazém ou depósito, com prateleiras cheias de caixas e produtos."
              />
            </button>
          </li>
          <li>
            <button
              className="image btn"
              data-bs-toggle="modal"
              data-bs-target="#modalRastr"
            >
              <img
                src={mov}
                alt="Um armazém ou depósito, com prateleiras cheias de caixas e produtos."
              />
            </button>
          </li>
          <li>
            <button
              className="image btn"
              data-bs-toggle="modal"
              data-bs-target="#modalAnalise"
            >
              <img
                src={dados}
                alt="Um armazém ou depósito, com prateleiras cheias de caixas e produtos."
              />
            </button>
          </li>
          <li>
            <button
              className="image btn"
              data-bs-toggle="modal"
              data-bs-target="#modalInteg"
            >
              <img
                src={integ}
                alt="Um armazém ou depósito, com prateleiras cheias de caixas e produtos."
              />
            </button>
          </li>
          <li>
            <button
              className="image btn"
              data-bs-toggle="modal"
              data-bs-target="#modalDash"
            >
              <img
                src={dash}
                alt="Um armazém ou depósito, com prateleiras cheias de caixas e produtos."
              />
            </button>
          </li>
          <li>
            <button
              className="image btn"
              data-bs-toggle="modal"
              data-bs-target="#modalIA"
            >
              <img
                src={tomada}
                alt="Um armazém ou depósito, com prateleiras cheias de caixas e produtos."
              />
            </button>
          </li>
          <li>
            <button
              className="image btn"
              data-bs-toggle="modal"
              data-bs-target="#modalAtualAuto"
            >
              <img
                src={att}
                alt="Um armazém ou depósito, com prateleiras cheias de caixas e produtos."
              />
            </button>
          </li>
          <li>
            <button
              className="image btn"
              data-bs-toggle="modal"
              data-bs-target="#modalPersoArea"
            >
              <img
                src={pers}
                alt="Um armazém ou depósito, com prateleiras cheias de caixas e produtos."
              />
            </button>
          </li>
          <li>
            <button
              className="image btn"
              data-bs-toggle="modal"
              data-bs-target="#modalAlarmesNotific"
            >
              <img
                src={alarme}
                alt="Um armazém ou depósito, com prateleiras cheias de caixas e produtos."
              />
            </button>
          </li>
        </ul>
      </div>
      <div
        className="modal fade"
        id="modalControleEstoque"
        tabIndex={-1}
        aria-labelledby="modalControleEstoqueLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalControleEstoqueLabel">
                Controle de Estoque
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              StockFlux oferece recursos avançados para o controle preciso do
              estoque de insumos, permitindo monitorar as quantidades disponíveis,
              realizar ajustes de inventário e prever demandas futuras.
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modalGestaoFornecedores"
        tabIndex={-1}
        aria-labelledby="modalGestaoFornecedoresLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalGestaoFornecedoresLabel">
                Gestão de Fornecedores
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              O sistema facilita o gerenciamento de fornecedores, permitindo
              avaliar o desempenho, comparar preços e negociar contratos para
              garantir as melhores condições de compra.
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modalGestaoVendas"
        tabIndex={-1}
        aria-labelledby="modalGestaoVendasLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalGestaoVendasLabel">
                Planejamento de Compras
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              StockFlux ajuda na elaboração de planos de compras estratégicos,
              identificando as necessidades de insumos com base na demanda
              projetada e nas políticas de estoque.
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modalRastr"
        tabIndex={-1}
        aria-labelledby="modalRastrLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalRastrLabel">
                Rastreamento de Movimentações
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              O sistema registra todas as movimentações de insumos, desde a
              entrada no estoque até o uso em processos produtivos ou saída para
              clientes, garantindo rastreabilidade e controle total.
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modalAnalise"
        tabIndex={-1}
        aria-labelledby="modalAnaliseLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalAnaliseLabel">
                Análise de Dados
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              StockFlux oferece ferramentas de análise de dados poderosas,
              permitindo extrair insights valiosos sobre o consumo de insumos,
              padrões de compra e tendências de mercado para embasar decisões
              estratégicas.
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modalInteg"
        tabIndex={-1}
        aria-labelledby="modalIntegLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalIntegLabel">
                Integração com Sistemas Existentes
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              O sistema é projetado para integração perfeita com outros sistemas
              existentes na empresa, garantindo uma troca eficiente de informações
              e uma visão unificada dos processos.
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modalDash"
        tabIndex={-1}
        aria-labelledby="modalDashLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalDashLabel">
                Dashboard Centralizado
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              StockFlux oferece um dashboard completo que centraliza todas as
              informações relevantes sobre desabastecimento de medicamentos,
              permitindo uma rápida visualização e análise dos dados.
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modalIA"
        tabIndex={-1}
        aria-labelledby="modalIALabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalIALabel">
                IA para Tomada de Decisão
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              O sistema utiliza inteligência artificial (IA) para auxiliar na
              tomada de decisões, fornecendo insights e recomendações com base em
              padrões de dados históricos e análises preditivas.
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modalAtualAuto"
        tabIndex={-1}
        aria-labelledby="modalAtualAutoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalAtualAutoLabel">
                Atualizações Automáticas
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              O dashboard do StockFlux é atualizado automaticamente em tempo real,
              garantindo que as informações estejam sempre atualizadas e
              disponíveis para rápida ação.
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modalPersoArea"
        tabIndex={-1}
        aria-labelledby="modalPersoAreaLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalPersoAreaLabel">
                Personalização por Área
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              O sistema personaliza as informações apresentadas no dashboard de
              acordo com as necessidades específicas de cada área da empresa,
              garantindo que cada equipe tenha acesso às informações relevantes
              para sua atuação.
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modalAlarmesNotific"
        tabIndex={-1}
        aria-labelledby="modalAlarmesNotificLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalAlarmesNotificLabel">
                Alarmes e Notificações
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              StockFlux oferece funcionalidades de alarmes e notificações para
              alertar as equipes sobre casos de desabastecimento crítico,
              garantindo uma rápida resposta e mitigação dos impactos.
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="parallax" id="quatro" />
    <section id="formulario">
      <div id="form">
        <h1>Ficou interessado no nosso produto?</h1>
        <h2>Se inscreva na nossa Newsletter!</h2>
        <form id="form-inputs">
          <input type="text" placeholder="Nome" id="Nome" required="" />
          <input type="email" placeholder="E-mail" id="E-mail" required="" />
          <button
            type="submit"
            id="sub"
            className="button btn btn-primary"
            data-bs-target="modalForm"
          >
            Inscrever
          </button>
        </form>
      </div>
    </section>
  </>
  
  );
}


export default App;

/*<BrowserRouter>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/controle" element={<controle/>} />
</Routes>
</BrowserRouter>*/