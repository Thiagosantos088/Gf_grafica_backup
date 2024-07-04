import whats from '../../image/whatsapp.png';
import face from '../../image/facebook.png';
import insta from '../../image/instagram.png';
import logo from '../../image/logoatu.png';
import { Link } from 'react-router-dom';
import "./Footer.css";

function Footer() {
    return (
        <>
            <footer>
                <div className='menufooter'>
                    <Link to="home" id='home'>Home</Link>
                    <Link to="produtos" id='produtos'>Produtos</Link>
                    <Link to="produtos" id='sobrenos'>Sobre nos</Link>
                    <Link to="contatos">Contatos</Link>
                </div>
                <div className='logofooter'>
                    <img id='logo' src={logo} alt='logo' />
                </div>
                <div className='redesfooter'>
                    <a href='https://wa.me/55119959364604' target='_blank'>
                        <img id='whatsfo' src={whats} alt='WhatsApp' />
                    </a>
                    <a href='https://www.facebook.com/' target='_blank' >
                        <img id='facefo' src={face} alt='Facebook' />
                    </a>
                    <a href='https://www.instagram.com/gf_graf' target='_blank' >
                        <img id='instafo' src={insta} alt='Instagram' />
                    </a>
                </div>
            </footer>
        </>
    );
}

export default Footer;
