import logo from '../../image/logoatu.png'
import usuario from '../../image/icons8-usuário-72.png';
import Footer from '../Footer/Footer';
import lupa from '../../image/lupa.png'
import whats from '../../image/whatsapp.png'
import face from '../../image/facebook.png'
import insta from '../../image/instagram.png'
import carrinho from '../../image/icons8-carrinho-64.png'
import './Header.css';
import {Link, NavLink} from 'react-router-dom';

function Header () {
return(
    <>
    <header>
        <div  className='menu'>
        <Link to='/'>
        <img id='logo' src={logo} alt='' />
        </Link>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/produtos">Produtos</NavLink>
        <NavLink to="/sobrenos">Sobre nos</NavLink>
        <NavLink to="/contatos">Contatos</NavLink>
        <div className='logos'>
        <NavLink to="/telalogin">
        <img id='usuario' src={usuario} alt='' />
        </NavLink>
        </div>
        </div>
        <div className='busca'>
        <input className='pesquisa' type='text' placeholder='Pesquise seu produto' />       
        <img id='lupa' src={lupa} alt='' />
        </div>
    </header>
    </>
   )
  
}

export default Header;