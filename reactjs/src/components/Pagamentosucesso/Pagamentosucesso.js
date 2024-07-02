import React from 'react';
import './Pagamentosucesso.css'
import confirmado from "../../image/confirmado3.png";

const Pagamentosucesso = () => {
  return (
    <main className='sucesso'>     
       <img src={confirmado} alt='Pagamento confirmado' />
       <h1>Pedido confirmado !</h1>
    </main>
  );
};

export default Pagamentosucesso;

