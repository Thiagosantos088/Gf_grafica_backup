import "./Cards.css"
import { Link } from 'react-router-dom';


function Cards (props){
    return(
        
        <div className="card">
        <Link to={props.link}>
        <img id='imgcards' src={props.imagem} alt='' />
        <h1 id="titulo">{props.nome}</h1>
        <h2 id="titulo">{props.apartir}</h2>
        <p id="valor">{props.valor}</p> 
        <h3 id="un">{props.un}</h3>
        </Link>
        </div>
        
    

    )
}

    export default Cards;