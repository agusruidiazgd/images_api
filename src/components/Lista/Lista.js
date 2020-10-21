import React,{useContext} from 'react';
import './Lista.scss';
import Card from '../Card/Card';
import Content from '../../contexts/contentContext';

 
const Lista = () => {
    
    const {images} = useContext(Content);

    return(
        <ul className="lista-img">
            {
                images.slice(-10).reverse().map(image =>{
                    return(
                        <li key={image.id}> <Card url={image.url} title={image.title}/> </li>
                    );
                })
            }
        </ul>
    );
}

export default Lista;