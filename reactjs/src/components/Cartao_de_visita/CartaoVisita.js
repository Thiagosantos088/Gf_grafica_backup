import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faBorderTopLeft, faPalette, faSwatchbook } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import cartao from "../../image/Cartao_de_visita.png"; // Importa a imagem utilizada para os cartões de visita
import './CartaoVisita.css'; // Importa o arquivo de estilos CSS específico para este componente

function CartaoVisita() {
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
    <div className="formcv">
      {/* Imagem do cartão de visita */}
      <img id='imgcv' src={cartao} alt='' />

      {/* Formulário para escolha de material, formato, cores, acabamento */}
      <form id="formulariocv">
        {/* Seção de Material */}
        <div className="material">
          <FontAwesomeIcon id="icon" icon={faLayerGroup} />
          <h1>Material</h1>
        </div>
        <select id="escolha" onChange={(e) => handleSelectChange(e, setMaterial)}>
          <option value="0">Selecione</option>
          <option value="10">Papel Couche Brilho 250g (10,00)</option>
          <option value="15">Papel Couche Brilho 300g (15,00)</option>
          <option value="20">Papel perolizado 300g (20,00)</option>
          <option value="12">Kraft 240G (12,00)</option>
        </select>

        {/* Seção de Formato */}
        <div className="formato">
          <FontAwesomeIcon id="icon" icon={faBorderTopLeft} />
          <h1>Formato</h1>
        </div>
        <select id="escolha1" onChange={(e) => handleSelectChange(e, setFormato)}>
          <option value="0">Selecione</option>
          <option value="10">88x48mm (10,00)</option>
          <option value="15">50x50mm (15,00)</option>
        </select>

        {/* Seção de Cores */}
        <div className="cores">
          <FontAwesomeIcon id="icon" icon={faPalette} />
          <h1>Cores</h1>
        </div>
        <select id="escolha2" onChange={(e) => handleSelectChange(e, setCores)}>
          <option value="0">Selecione</option>
          <option value="10">1x0 cores (preto) (10,00)</option>
          <option value="20">4x0 cores (colorido frente) (20,00)</option>
          <option value="30">4x1 cores (Colorido frente e 1 cor verso) (30,00)</option>
          <option value="40">4x4 cores (Colorido Frente e verso) (40,00)</option>
        </select>

        {/* Seção de Acabamento */}
        <div className="acabamento">
          <FontAwesomeIcon id="icon" icon={faSwatchbook} />
          <h1>Acabamento</h1>
        </div>
        <select id="escolha4" onChange={(e) => handleSelectChange(e, setAcabamento)}>
          <option value="0">Selecione</option>
          <option value="10">Refilados (10,00)</option>
          <option value="15">Cantos Arredondados (15,00)</option>
        </select>

        {/* Botão para limpar valores */}
        <button id="limparcv" onClick={resetValues}>Limpar</button>
      </form>

      {/* Seção à direita com o valor total e botões de navegação */}
      <div className="direita">
        {/* Campo para exibir o valor total */}
        <input id="valortotal" type="text" value={`Valor total: ${formatCurrency(total)}`} readOnly />
        <div className="botoescv">
          {/* Botão de avançar para página de upload de arte */}
          <Link to='/paginaupload'><button id="avancar">Avançar</button></Link>
          {/* Botão para voltar para tela de produtos */}
          <Link to='/produtos'><button id="voltar">Voltar</button></Link>
        </div>
      </div>
    </div>
  );
}

export default CartaoVisita;
