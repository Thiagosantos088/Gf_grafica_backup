import './Contatos.css'

import W from '../../image/W.png'
import T from '../../image/T.png'
import M from '../../image/M.png'
import B from '../../image/B.png'
import Header from '../Header/Header'

function Contatos(){
    return(
        <>
        
        <Header/>

        <div class='ponto'>
        <h1 id="h1-1">Precisa de ajuda?</h1>
        <h1 id="h1-2">Veja entrar em contato !</h1>
        </div>

        <div id='con'>

        <div class='caixacontato'>
            <div class='pnt' id='pnt'>
                <img src={W} id="img-1" />
                <h2 id="h2-1">Whatsapp</h2>
            </div>
            <div id='nume'>
                <h2 id="h2-3">(11) 99999-9999</h2>
            </div>
            <div id='h2-6'>
                <h2 id="h2-4">Segunda a sexta</h2>
                <h2 id='h2-5'>das 09:00 as 17:00</h2>
            </div>
        </div>
        
        <div class='caixacontato'>
            <div class='pnt' id='pnt'>
                <img src={T} id="img-1" />
                <h2 id="h2-1">Telefone</h2>
            </div>
            <div id='nume'>
                <h2 id="h2-3">(11) 99999-9999</h2>
            </div>
            <div id='h2-6'>
                <h2 id="h2-4">Segunda a sexta</h2>
                <h2 id='h2-5'>das 09:00 as 17:00</h2>
            </div>
        </div>
        
        
        
        <div class='caixacontato'>
            <div class='pnt' id='pnt'>
                <img src={B} id="img-1" />
                <h2 id="h2-1">Email</h2>
            </div>
            <div id='nume'>
                <h2 id="h2-3"><a>Contato@gfgrafica.com</a></h2>
            </div>
            <div id='h2-6'>
                <h2 id="h2-4">Segunda a sexta</h2>
                <h2 id='h2-5'>das 09:00 as 17:00</h2>
            </div>
        </div>

        </div>

        </>
    )
}
export default Contatos;