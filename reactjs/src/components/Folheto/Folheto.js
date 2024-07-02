import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faBorderTopLeft, faPalette, faSwatchbook } from '@fortawesome/free-solid-svg-icons';
import folheto from "../../image/folheto.png";
import { Link } from 'react-router-dom';
import './Folheto.css';

function Folheto() {
  const [material, setMaterial] = useState(0);
  const [formato, setFormato] = useState(0);
  const [cores, setCores] = useState(0);
  const [acabamento, setAcabamento] = useState(0);
  const [total, setTotal] = useState(0);

  const handleSelectChange = (e, setFunction) => {
    const value = parseInt(e.target.value);
    setFunction(value);
    setTotal(material + formato + cores + acabamento + value);
  };

  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const resetValues = () => {
    setMaterial(0);
    setFormato(0);
    setCores(0);
    setAcabamento(0);
    setTotal(0);
  };

  return (
    <div className="formfo">
      <img id='imgfo' src={folheto} alt='' />
      <form id="formulariofo">
        {/* Seleção de material */}
        <div className="material">
          <FontAwesomeIcon id="icon" icon={faLayerGroup} />
          <h1>Material</h1>
        </div>
        <select id="escolhafo" onChange={(e) => handleSelectChange(e, setMaterial)}>
          <option value="0">Selecione</option>
          <option value="10">Sulfite 90g (R$10,00)</option>
          <option value="15">Couchê 90g (R$15,00)</option>
          <option value="20">Couchê 115g (R$20,00)</option>
          <option value="25">Couchê 150g (R$25,00)</option>
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
          <option value="10">105x148mm (R$10,00)</option>
          <option value="15">148x200mm (R$15,00)</option>
          <option value="20">200x280mm (R$20,00)</option>
          <option value="25">210x297mm (R$25,00)</option>
          <option value="30">298x406mm (R$30,00)</option>
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
          <option value="40">4x4 cores (Colorido Frente e verso) (R$40,00)</option>
        </select>

        {/* Seleção de acabamento */}
        <div className="acabamento">
          <FontAwesomeIcon id="icon" icon={faSwatchbook} />
          <h1>Acabamento</h1>
        </div>
        <select id="escolha4fo" onChange={(e) => handleSelectChange(e, setAcabamento)}>
          <option value="0">Selecione</option>
          <option value="10">Refilados (R$10,00)</option>
          <option value="15">Refilado 1 Dobra (R$15,00)</option>
          <option value="20">Refilado 2 Dobras (R$20,00)</option>
        </select>

        {/* Botão para limpar as escolhas */}
        <button id="limparfo" onClick={resetValues}>Limpar</button>
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

export default Folheto;
