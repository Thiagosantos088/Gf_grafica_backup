import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faBorderTopLeft, faPalette, faSwatchbook } from '@fortawesome/free-solid-svg-icons';
import Pasta from "../../image/Pasta.png";
import { Link } from 'react-router-dom';
import './Pastas.css';

function Pastas() {
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
    <div className="form">
      <img id='imgpa' src={Pasta} alt='' />

      <form id="formulario">
        <div className="material">
          <FontAwesomeIcon id="icon" icon={faLayerGroup} />
          <h1>Material</h1>
        </div>
        <select id="escolha" onChange={(e) => handleSelectChange(e, setMaterial)} value={material}>
          <option value={0}>Selecione</option>
          <option value={10}>Couchê 115g</option>
          <option value={15}>Couchê 150g</option>
          <option value={20}>Couchê 250g</option>
          <option value={25}>Kraft 240g</option>
          <option value={30}>Alta Alvura 250</option>
        </select>

        <div className="formato">
          <FontAwesomeIcon id="icon" icon={faBorderTopLeft} />
          <h1>Formato</h1>
        </div>
        <select id="escolha1" onChange={(e) => handleSelectChange(e, setFormato)} value={formato}>
          <option value={0}>Selecione</option>
          <option value={40}>220x310mm</option>
        </select>

        <div className="cores">
          <FontAwesomeIcon id="icon" icon={faPalette} />
          <h1>Cores</h1>
        </div>
        <select id="escolha2" onChange={(e) => handleSelectChange(e, setCores)} value={cores}>
          <option value={0}>Selecione</option>
          <option value={50}>4x0 cores</option>
          <option value={100}>4x4 cores</option>
        </select>

        <div className="acabamento">
          <FontAwesomeIcon id="icon" icon={faSwatchbook} />
          <h1>Acabamento</h1>
        </div>
        <select id="escolha4" onChange={(e) => handleSelectChange(e, setAcabamento)} value={acabamento}>
          <option value={0}>Selecione</option>
          <option value={10}>Faca Padrão</option>
        </select>
        <button id="limpar" type="button" onClick={resetValues}>Limpar</button>
      </form>

      <div className="direita">
        <input id="valortotal" type="text" value={`Valor total: ${formatCurrency(total)}`} readOnly />
        <div className="botoes">
          <Link to='/paginaupload'><button id="avancar">Avançar</button></Link>
          <Link to='/produtos'><button id="voltar">Voltar</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Pastas;
