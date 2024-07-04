import Cards from "../Produtos/Cards";
import cartao from "../../image/Cartao_de_visita.png"
import banner from '../../image/BannerPersonalizado.png'
import envelopepro from '../../image/Envolepes-personalizado.png'
import pasta from '../../image/Pasta.png'
import folheto from '../../image/folheto.png'
import blocos from '../../image/blocos.png'
import Header from "../Header/Header"
import Footer from "../Footer/Footer";
import "./Produtos.css"
import CartaoVisita from "../Cartao_de_visita/CartaoVisita";


function Produtos(nome,imagem, valor,apartir,un) {
        return(
            <>
            <Header/>
            <div className="bloco1">
            <Cards nome='Cartão de visita' imagem= {cartao} apartir="A partir de" valor="R$ 80,00"un="500 un" link="/cartaovisita" />
            <Cards nome='Banner' imagem= {banner} apartir="A partir de" valor="R$ 60,00" un="1 un" link="/banner"/>
            <Cards nome='Envelope Personalizado' imagem= {envelopepro} apartir="A partir de" valor="R$ 140,00" un="500 un" link="/envelope"/>
            </div>
            < div className="bloco2">
            <Cards nome='Pastas' imagem= {pasta} apartir="A partir de" valor="R$ 400,00" un="500 un" link="/pastas"/>
            <Cards nome='Folheto' imagem= {folheto} apartir="A partir de" valor="R$ 200,00" un="1000 un" link="/folheto"/>
            <Cards nome='Blocos' imagem= {blocos} apartir="A partir de" valor="R$ 140,00" un="10 un" link="/blocos"/>
            </div>
            <Footer/>

            </>
        )
    }



export default Produtos;
