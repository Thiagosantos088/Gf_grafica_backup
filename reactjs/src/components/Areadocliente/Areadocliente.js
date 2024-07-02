
    import React, { useContext } from 'react';
    import { UserContext } from '../Contextogeral/UserGeral.js';
    import Header from '../Header/Header.js';
    import './Areadocliente.css'

    function AreaDoCliente() {

        // O contexto faz com que eu consiga trazer o nome do usuario que foi logado no sistema, 
        // possibilitando a mensagem  de boas vindas
        const { user } = useContext(UserContext);

        return (
            <>     
            {/* Importação do Header, o Header é feito apenas uma vez e o react JS permite 
            que depois seja importado em todas as paginas */}
                <Header/>
            {/* Container da frase personalizada "seja bem vindo(a)" e o nome do usuario */}
        
                <p id='bemvindo' >Bem-vindo(a), {user ? user.nome : 'Visitante'}!</p>

            </>
        );
    }

    export default AreaDoCliente;
