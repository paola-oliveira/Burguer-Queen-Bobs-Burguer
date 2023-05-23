import { Link } from 'react-router-dom';
import './Cards.css';

const Cards = (props) => {
    const cardsClassName = `cards ${props.cardsClassName}`;
    const imagemClassName = `imagem-card ${props.imagemClassName}`;
    const textoClassName = `texto-card ${props.textoClassName}`;

    return (
        <Link to={`/pedidos?mesa=${props.numeroMesa}`} className='link'>
            <div className={cardsClassName} data-testid="div-cards">
                {props.texto1 && <p className={textoClassName}>{props.texto1}</p>}
                <img src={props.imagem} alt="Imagem do card" className={imagemClassName}/>
                {props.texto2 && <p className={textoClassName}>{props.texto2}</p>}
            </div>
        </Link>
    )
}

export default Cards;