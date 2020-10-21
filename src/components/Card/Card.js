import React from 'react';
import './Card.scss';



const Card = ({url, title}) =>{
    return(
        <figure>
            <img src={url} alt={title}/>
            <figcaption>
                {title}
            </figcaption>
        </figure>
    );
}

export default Card;