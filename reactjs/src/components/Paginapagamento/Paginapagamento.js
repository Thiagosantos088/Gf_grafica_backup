import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Paginapagamento.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Paginapagamento = () => {
    const [paymentMethod, setPaymentMethod] = useState('pix');
    const [cardDetails, setCardDetails] = useState({
        name: '',
        number: '',
        expiry: '',
        cvc: '',
    });
    const [showCep, setShowCep] = useState(false);
    const [cep, setCep] = useState('');

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };

    const handleCardDetailsChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({
            ...cardDetails,
            [name]: value,
        });
    };

    const handleCepChange = (e) => {
        setCep(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Detalhes do pagamento:', paymentMethod === 'pix' ? 'Pix' : cardDetails);
    };

    return (
        <div className="Paginapagamento">
            <form onSubmit={handleSubmit}>
                {/* Seleção do método de pagamento */}
                <div className="formapagamento">
                    <label>
                        <input
                            id='pagpix'
                            type="radio"
                            name="formapagamento"
                            value="pix"
                            checked={paymentMethod === 'pix'}
                            onChange={() => handlePaymentMethodChange('pix')}
                        />
                        Pix
                    </label>
                    <label>
                        <input
                            id='pagcartao'
                            type="radio"
                            name="formapagamento"
                            value="cartao"
                            checked={paymentMethod === 'cartao'}
                            onChange={() => handlePaymentMethodChange('cartao')}
                        />
                        Cartão de Crédito
                    </label>
                </div>

                {/* Detalhes do CEP (opcional) */}
                <div className="cep-container">
                    <div className="cep-header" onClick={() => setShowCep(!showCep)}>
                        <label>CEP</label>
                        <FontAwesomeIcon icon={showCep ? faChevronUp : faChevronDown} />
                    </div>
                    {showCep && (
                        <div className="cep-details">
                            <input
                                type="text"
                                name="cep"
                                value={cep}
                                onChange={handleCepChange}
                                placeholder="Digite seu CEP"
                            />
                            <input
                                type="text"
                                name="rua"
                                onChange={handleCepChange}
                                placeholder="Rua"
                            />
                            <input
                                type="text"
                                name="Cidade"
                                onChange={handleCepChange}
                                placeholder="Cidade"
                            />
                            <input
                                type="text"
                                name="numerorua"
                                onChange={handleCepChange}
                                placeholder="Numero da residencia"
                            />
                        </div>
                    )}
                </div>

                {/* Detalhes do Cartão (aparece apenas se Cartão de Crédito selecionado) */}
                {paymentMethod === 'cartao' && (
                    <div className="card-details">
                        <div>
                            <label>Nome no Cartão</label>
                            <input
                                type="text"
                                name="name"
                                value={cardDetails.name}
                                onChange={handleCardDetailsChange}
                            />
                        </div>
                        <div>
                            <label>Número do Cartão</label>
                            <input
                                type="text"
                                name="number"
                                value={cardDetails.number}
                                onChange={handleCardDetailsChange}
                            />
                        </div>
                        <div>
                            <label>Data de Validade</label>
                            <input
                                type="text"
                                name="expiry"
                                value={cardDetails.expiry}
                                onChange={handleCardDetailsChange}
                            />
                        </div>
                        <div>
                            <label>CVC</label>
                            <input
                                type="text"
                                name="cvc"
                                value={cardDetails.cvc}
                                onChange={handleCardDetailsChange}
                            />
                        </div>
                    </div>
                )}

                {/* Botão de Pagamento */}
                <Link to='/pagamentosucesso'>
                    <button id='botpagamento' type="submit">Pagar</button>
                </Link>
            </form>
        </div>
    );
};

export default Paginapagamento;
