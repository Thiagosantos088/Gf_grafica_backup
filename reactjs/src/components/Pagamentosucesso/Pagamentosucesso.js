import React from 'react';
import './Pagamentosucesso.css'
import confirmado from "../../image/confirmado3.png";
import { Link } from 'react-router-dom';


const Pagamentosucesso = () => {
  return (
    <main className='sucesso'>     
       <img src={confirmado} alt='Pagamento confirmado' />
       <h1>Pedido confirmado !</h1>
       <Link to='/'><button>Voltar para a tela principal</button></Link>


    </main>
  );
};

export default Pagamentosucesso;

