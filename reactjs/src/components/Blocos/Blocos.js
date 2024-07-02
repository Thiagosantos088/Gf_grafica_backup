import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faBorderTopLeft, faPalette, faSwatchbook } from '@fortawesome/free-solid-svg-icons';
import blocos from "../../image/blocos.png"; // Importa a imagem utilizada
import { Link } from 'react-router-dom'; // Importa o componente Link do React Router
import './Blocos.css'; // Importa o arquivo de estilos CSS específico para este componente

function Blocos() {
  // Estados para controlar as seleções do usuário e o valor total
  const [material, setMaterial] = useState(0);
  const [formato, setFormato] = useState(0);
  const [cores, setCores] = useState(0);
  const [acabamento, setAcabamento] = useState(0);
  const [total, setTotal] = useState(0);

  // Função para lidar com a mudança nas seleções (material, formato, cores, acabamento)
  const handleSelectChange = (e, setFunction) => {
    const value = parseInt(e.target.value); // Converte o valor selecionado para inteiro
    setFunction(value); // Atualiza o estado correspondente (material, formato, cores, acabamento)
    // Calcula o novo valor total somando os estados de material, formato, cores, acabamento e o valor atual
    setTotal(material + formato + cores + acabamento + value);
  };

  // Função para formatar o valor total como moeda brasileira
  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  // Função para limpar todos os valores de seleção e o valor total
  const resetValues = () => {
    setMaterial(0);
    setFormato(0);
    setCores(0);
    setAcabamento(0);
    setTotal(0);
  };

  return (
    <div className="form">
      {/* Imagem do bloco */}
      <img id="imgblo" src={blocos} alt="" />

      {/* Formulário para escolha de material, formato, cores, acabamento */}
      <form id="formulario">
        {/* Seção de Material */}
        <div className="material">
          <FontAwesomeIcon id="icon" icon={faLayerGroup} /> {/* Ícone FontAwesome para Material */}
          <h1>Material</h1>
        </div>
        <select id="escolha" onChange={(e) => handleSelectChange(e, setMaterial)}>
          <option value="0">Selecione</option>
          <option value="10">Sulfite 75g (R$10,00)</option>
          <option value="15">Sulfite 90g (R$15,00)</option>
          <option value="12">1ª via Branca, 2ª via amarela, 3ª via Azul (56g) (R$12,00)</option>
          <option value="18">1ª via Branca, 2ª via amarela (56g) (R$18,00)</option>
        </select>

        {/* Seção de Formato */}
        <div className="formato">
          <FontAwesomeIcon id="icon" icon={faBorderTopLeft} /> {/* Ícone FontAwesome para Formato */}
          <h1>Formato</h1>
        </div>
        <select id="escolha1" onChange={(e) => handleSelectChange(e, setFormato)}>
          <option value="0">Selecione</option>
          <option value="10">70x105 mm (R$10,00)</option>
          <option value="15">100x148 mm (R$15,00)</option>
          <option value="20">200x280 mm (R$20,00)</option>
        </select>

        {/* Seção de Cores */}
        <div className="cores">
          <FontAwesomeIcon id="icon" icon={faPalette} /> {/* Ícone FontAwesome para Cores */}
          <h1>Cores</h1>
        </div>
        <select id="escolha2" onChange={(e) => handleSelectChange(e, setCores)}>
          <option value="0">Selecione</option>
          <option value="10">1x0 cor (R$10,00)</option>
          <option value="20">4x0 cores (R$20,00)</option>
        </select>

        {/* Seção de Acabamento */}
        <div className="acabamento">
          <FontAwesomeIcon id="icon" icon={faSwatchbook} /> {/* Ícone FontAwesome para Acabamento */}
          <h1>Acabamento</h1>
        </div>
        <select id="escolha4bl" onChange={(e) => handleSelectChange(e, setAcabamento)}>
          <option value="0">Selecione</option>
          <option value="10">Blocagem com 100 folhas (R$10,00)</option>
          <option value="15">Blocagem com 50 folhas (R$15,00)</option>
          <option value="20">Blocagem com 50 folhas, 2 vias, serrilhado (R$20,00)</option>
        </select>

        {/* Botão para limpar valores */}
        <button id="limpar" onClick={resetValues}>Limpar</button>
      </form>

      {/* Seção à direita com o valor total e botões de navegação */}
      <div className="direita">
        {/* Campo para exibir o valor total */}
        <input id="valortotal" type="text" value={`Valor total: ${formatCurrency(total)}`} readOnly />
        <div className="botoes">
          {/* Botão de avançar para página de upload de arte */}
          <Link to='/paginaupload'><button id="avancar">Avançar</button></Link>
          {/* Botão para voltar para tela de produtos */}
          <Link to='/produtos'><button id="voltar">Voltar</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Blocos;
