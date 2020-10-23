import React,{useContext, useState} from 'react';
import './Modal.scss';
import Content from '../../contexts/contentContext';
import {addData} from '../../services/services';
import {ADD_IMG} from '../../reducers/reducers';

const Modal = () =>{
    //hacer state que guarde la nueva imagen
    const [newTitle, setNewTitle] = useState("");
    const [newUrl, setNewUrl] = useState("");

    const {close, dispatchImg} = useContext(Content);

    const save = async () =>{
        const newImage = {
            title: newTitle,
            url: newUrl
        }
        const newItem =  await addData(newImage);
       
        dispatchImg({type: ADD_IMG, payload: newItem});
        close();
        console.log(newImage);
        
    }

    const addTitle = e =>{
        setNewTitle(e.target.value)
    }

    const addUrl = e =>{
        setNewUrl(e.target.value)
    }

    return(
        <form id="form-modal">
            <button type="button" id="form-btn-cerrar" onClick={close}>Cerrar</button>
            <input className="input" type="text" onChange={addTitle} placeholder="Title" />
            <input className="input" type="text" onChange={addUrl} placeholder="image url" />
            <button type="button" id="guardar-form" onClick={save}>Guardar</button>
        </form>
    );
}

export default Modal;