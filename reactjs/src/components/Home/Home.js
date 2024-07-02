import './Home.css'
import React from 'react';

import HC from '../../image/HC.png';
import HS from '../../image/HS.png';
import HP from '../../image/HP.png';
import HD from '../../image/HD.png';
import HE from '../../image/HE.png';
import HV from '../../image/HV.png';
import HB from '../../image/HB.png';
import HEM from '../../image/HEM.png';
import HM from '../../image/HM.png';
import HCO from '../../image/HCO.png';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
function Home(){
    return(
     <>
      {/*P1*/}
      <Header/>
        <div id="container-home">
          
            <div className="bodyhome">
                 <img src={HC} id="imghome"/>
                 <h1>Melhores</h1>
                 <h1>preços</h1>
            </div>
            <div className="bodyhome">
                 <img src={HS} id="imghome"/>
                 <h1>Melhores</h1>
                 <h1>preços</h1>
            </div>
            <div className="bodyhome">
                 <img src={HP} id="imghome"/>
                 <h1>Melhores</h1>
                 <h1>preços</h1>
            </div>
            <div className="bodyhome">
                 <img src={HD} id="imghome"/>
                 <h1>Melhores</h1>
                 <h1>preços</h1>
            </div>
        </div>
        
        {/*P2*/}
        <div class="caixahome">
          <div>
          <h2 id='osmaisvendidos'>OS MAIS VENDIDOS</h2>
          </div>
          <div className='imgvendidos'>
          <img src={HE} id="imge" class="imge"/>
          <img src={HV} id="imge" class="imge"/>
          <img src={HB} id="imge" class="imge"/>
          </div>
          
          <h4 id='vertodos' ><u>VER TODOS</u></h4>
        </div>

        {/*P3*/}
        <div class="empre">
          <img src={HEM} id="em"/>
          <h3 id="emp">A empresa se destaca não apenas pela capacidade técnica, mas também pela dedicação em entender as necessidades específicas de cada cliente. Seja na produção de materiais promocionais, embalagens personalizadas ou projetos gráficos complexos, a GF Gráfica se empenha em entregar resultados que superam as expectativas.</h3>
        </div>

        {/*P4*/}
        <div class="desta">
          <h3 id="dest">Destaque-se no mercado e fortaleça sua presença com os serviços gráficos excepcionais da nossa empresa, elevando o impacto e a memorabilidade da sua marca.</h3>
          <img src={HM} id="des"/>
        </div>
        
        {/*P5*/}
        <div class="notu">

        <div class="noti">
          <img src={HCO} id="no"/>
        </div>

        <div class="noc">
        <div class="osdl">
        <h3 id="h3-1">Inscreva-se em nossa newsletter</h3>
        <h3 id="h3-2">para receber últimas noticias e descontos exclusivos</h3>
        </div>  
        <input id='email' type='text' placeholder='DIGITE O EMAIL'/>
        <div >
        <button id='botaohome'>Inscreva</button>
        </div>
        </div>
        </div>
        <Footer/>


        
     </>          
    )
}
export default Home;