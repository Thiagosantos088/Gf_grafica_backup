import './Sobrenos.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function Sobrenos() {
        return(
            <>
            
            <main>
              <Header/>
            <h1 id="Logomarca">PORQUE A PRIMEIRA IMPRESSÃO É A QUE FICA</h1>
            <div className="mapa">
              <h3 id='ondeestamos'>ONDE ESTAMOS?</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7308.411399285664!2d-46.68265010532098!3d-23.668600795039374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5010f1175e57%3A0x1344ca8620b66a29!2sR.%20Ant%C3%B4nio%20Furlan%20J%C3%BAnior%2C%201%20-%20Campo%20Grande%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004676-020!5e0!3m2!1spt-BR!2sbr!4v1719579182578!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          className="rounded"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          title="Eiffel Tower Map"
        ></iframe>
        </div>
        <div className='sobreagf'>
        <h1 id='titulogf'>SOBRE A GF !</h1>
        
       <p id='tithistoria' >Surgimos no mercado em 2012, somos uma empresa familiar e nosso foco é a impressão em off-set (uma técnica indireta que transfere a imagem de uma placa metálica para o papel através de um cilindro de borracha.), uma gráfica plana.

Oferecemos uma ampla gama de serviços gráficos personalizados para atender às suas necessidades específicas. Desde cartões de visita elegantes, blocos e materiais promocionais , nossos serviços são personalizados e de alta qualidade para atender às necessidades específicas dos clientes.

Temos uma flexibilidade que nos permite adaptar-nos rapidamente às demandas do mercado, assegurando entregas pontuais e um serviço que você pode confiar.

Procuramos mantém tradições familiares, combinando experiência com inovação para competir no mercado gráfico.</p>
</div>
<Footer/>
             </main>
         
            </>
        )
    }



export default Sobrenos;

