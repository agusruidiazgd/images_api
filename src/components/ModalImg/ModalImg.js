import React from 'react';
import './ModalImg.scss';

const ModalImg = ({url, title}) =>{
    return(
        <figure className="modal-img">
            <img src={url} alt={title}/>
            <figcaption>
                {title}
            </figcaption>
        </figure>
    )
};

export default ModalImg;