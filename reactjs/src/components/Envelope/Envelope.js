import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faBorderTopLeft, faPalette, faSwatchbook } from '@fortawesome/free-solid-svg-icons';
import envelope from "../../image/Envolepes-personalizado.png";
import { Link } from 'react-router-dom';
import './Envelope.css';

function Envelope() {
  // Estados para armazenar as escolhas do usuário e o valor total
  const [material, setMaterial] = useState(0);
  const [formato, setFormato] = useState(0);
  const [cores, setCores] = useState(0);
  const [acabamento, setAcabamento] = useState(0);
  const [total, setTotal] = useState(0);

  // Função para atualizar as escolhas do usuário e calcular o valor total
  const handleSelectChange = (e, setFunction) => {
    const value = parseInt(e.target.value);
    setFunction(value); // Atualiza o estado correspondente (material, formato, cores, acabamento)
    // Calcula o valor total somando todas as escolhas mais o valor atual
    setTotal(material + formato + cores + acabamento + value);
  };

  // Função para formatar o valor total como moeda brasileira
  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  // Função para limpar todas as escolhas do usuário
  const resetValues = () => {
    setMaterial(0);
    setFormato(0);
    setCores(0);
    setAcabamento(0);
    setTotal(0);
  };

  return (
    <div className="form">
      {/* Imagem do envelope */}
      <img id='imgenv' src={envelope} alt='' />

      {/* Formulário para escolha de material, formato, cores e acabamento */}
      <form id="formulario">
        {/* Seleção de material */}
        <div className="material">
          <FontAwesomeIcon id="icon" icon={faLayerGroup} />
          <h1>Material</h1>
        </div>
        <select id="escolha" onChange={(e) => handleSelectChange(e, setMaterial)}>
          <option value="0">Selecione</option>
          <option value="10">Sulfite 80g (R$10,00)</option>
          <option value="15">Sulfite 90g (R$15,00)</option>
          <option value="12">Kraft 80g (R$12,00)</option>
          <option value="18">Reciclado 90g (R$18,00)</option>
        </select>

        {/* Seleção de formato */}
        <div className="formato">
          <FontAwesomeIcon id="icon" icon={faBorderTopLeft} />
          <h1>Formato</h1>
        </div>
        <select id="escolha1" onChange={(e) => handleSelectChange(e, setFormato)}>
          <option value="0">Selecione</option>
          <option value="10">114x229mm (R$10,00)</option>
          <option value="15">200x280mm (R$15,00)</option>
          <option value="20">260x360mm (R$20,00)</option>
        </select>

        {/* Seleção de cores */}
        <div className="cores">
          <FontAwesomeIcon id="icon" icon={faPalette} />
          <h1>Cores</h1>
        </div>
        <select id="escolha2" onChange={(e) => handleSelectChange(e, setCores)}>
          <option value="0">Selecione</option>
          <option value="10">1x0 cor (R$10,00)</option>
          <option value="20">2x0 cores (R$20,00)</option>
          <option value="30">4x0 cores (Colorido Frente) (R$30,00)</option>
        </select>

        {/* Seleção de acabamento */}
        <div className="acabamento">
          <FontAwesomeIcon id="icon" icon={faSwatchbook} />
          <h1>Acabamento</h1>
        </div>
        <select id="escolha4" onChange={(e) => handleSelectChange(e, setAcabamento)}>
          <option value="0">Selecione</option>
          <option value="10">Faca Padrão (R$10,00)</option>
        </select>

        {/* Botão para limpar as escolhas */}
        <button id="limpar" onClick={resetValues}>Limpar</button>
      </form>

      {/* Exibição do valor total */}
      <div className="direita">
        <input id="valortotal" type="text" value={`Valor total: ${formatCurrency(total)}`} readOnly />
        {/* Botões de avançar e voltar */}
        <div className="botoes">
          <Link to='/paginaupload'><button id="avancar">Avançar</button></Link>
          <Link to='/produtos'><button id="voltar">Voltar</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Envelope;
