import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faForward } from '@fortawesome/free-solid-svg-icons';
import './Paginaupload.css';
import { Link } from 'react-router-dom';

function Paginaupload() {
  const fileInputRef = useRef(null);

  const botaogerenciar = () => {
    fileInputRef.current.click();
  };

  const gerenarquivo = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Arquivo selecionado:', file.name);
    }
  };

  return (
    <div className='geral'>
      <h1 id='tituloup'>Faça o envio da sua arte!</h1>
      <div className='icone'>
        <div className='icone1'>
          <FontAwesomeIcon onClick={botaogerenciar} id="iconup" icon={faUpload} />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={gerenarquivo}
          />
          <h2>Faça o upload do arquivo</h2>
        </div>
        <div className='icone2'>
          <Link to='/paginapagamento'>
          <FontAwesomeIcon id="iconup" icon={faForward} />  
          </Link>               

          <h2>Continuar sem arquivo</h2>
        </div>
      </div>
    </div>
  );
}

export default Paginaupload;
