import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faBorderTopLeft, faPalette, faSwatchbook } from '@fortawesome/free-solid-svg-icons';
import banner from "../../image/BannerPersonalizado.png";
import { Link } from 'react-router-dom';
import './Banner.css';

function Banner() {
  // Estados para controlar as escolhas do usuário e o valor total
  const [material, setMaterial] = useState(0);
  const [formato, setFormato] = useState(0);
  const [cores, setCores] = useState(0);
  const [acabamento, setAcabamento] = useState(0);
  const [total, setTotal] = useState(0);

  // Função para atualizar o estado correspondente e recalcular o valor total
  const mudancadevalor = (e, setFunction) => {
    const value = parseInt(e.target.value);
    setFunction(value);
    // Calcula o novo valor total somando os estados de material, formato, cores, acabamento e o valor atual
    setTotal(material + formato + cores + acabamento + value);
  };

  // Função para formatar o valor total como moeda brasileira
  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  // Função para limpar todos os valores de escolha e o valor total
  const limparvalor = () => {
    setMaterial(0);
    setFormato(0);
    setCores(0);
    setAcabamento(0);
    setTotal(0);
  };

  return (
    <div className="form">

      {/* Imagem do Banner */}
      <img id='imgba' src={banner} alt='' />

      {/* Formulário para escolha de materiais, formatos, cores, acabamento */}
      <form id="formulario">
        {/* Seção de Material */}
        <div className="material">
          <FontAwesomeIcon id="icon" icon={faLayerGroup} />
          <h1>Material</h1>
        </div>
        <select id="escolha" onChange={(e) => mudancadevalor(e, setMaterial)} value={material}>
          <option value={0}>Selecione</option>
          <option value={10}>Lona brilho 340g(10,00)</option>
          <option value={15}>Lona fosca 340g(15,00)</option>
        </select>

        {/* Seção de Formato */}
        <div className="formato">
          <FontAwesomeIcon id="icon" icon={faBorderTopLeft} />
          <h1>Formato</h1>
        </div>
        <select id="escolha1" onChange={(e) => mudancadevalor(e, setFormato)} value={formato}>
          <option value={0}>Selecione</option>
          <option value={10}>400x600mm(10,00)</option>
          <option value={10}>600x900mm(10,00)</option>
          <option value={10}>700x1000mm(10,00)</option>
          <option value={10}>1000x1500mm(10,00)</option>
        </select>

        {/* Seção de Cores */}
        <div className="cores">
          <FontAwesomeIcon id="icon" icon={faPalette} />
          <h1>Cores</h1>
        </div>
        <select id="escolha2" onChange={(e) => mudancadevalor(e, setCores)} value={cores}>
          <option value={0}>Selecione</option>
          <option value={10}>4x0 cores (Colorido frente)(10,00)</option>
        </select>

        {/* Seção de Acabamento */}
        <div className="acabamento">
          <FontAwesomeIcon id="icon" icon={faSwatchbook} />
          <h1>Acabamento</h1>
        </div>
        <select id="escolha4" onChange={(e) => mudancadevalor(e, setAcabamento)} value={acabamento}>
          <option value={0}>Selecione</option>
          <option value={10}>Bastão/Cordão(10,00)</option>
          <option value={15}>Ilhós()15,00</option>
        </select>

        {/* Botão para limpar valores */}
        <button id="limpar" type="button" onClick={limparvalor}>Limpar</button>
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

export default Banner;
