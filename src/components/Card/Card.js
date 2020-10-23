import React,{useState} from 'react';
import ModalImg from '../ModalImg/ModalImg';
import './Card.scss';



const Card = ({url, title}) =>{
    const [displayModalImg, setDisplayModalImg] = useState(false);

    const showModalImg = () =>{
        setDisplayModalImg(true);
    }

    return(
        <React.Fragment>
            {
                displayModalImg ? <ModalImg url={url} title={title}/> : null
            }
        
            <figure>
                <img src={url} alt={title}/>
                <div className="overlay" onClick={showModalImg}></div>
                <figcaption>
                    {title}
                </figcaption>
            </figure>
        </React.Fragment>
        
    );
}

export default Card;