import React, {useState, useReducer,useEffect} from 'react';
import './App.scss';
import Lista from './components/Lista/Lista';
import {getData} from './services/services';
import {INIT, reducer} from './reducers/reducers';
import Content from './contexts/contentContext';
import Modal from './components/Modal/Modal';

function App() {
  const [images, dispatchImg] = useReducer(reducer,[]);
  const [displayModal, setDisplayModal] = useState(false);

  //useEffect para inicializar la pagina 
  useEffect(() => {
    getImages();
  }, []);
  
  //useEffect para escuchar cambios de images (res.data) ????? loop infinito
  // useEffect(() => {
  //   getImages();
  // }, images);

  const getImages = async () =>{
    const dataImages = await getData();
    dispatchImg({type: INIT, payload: dataImages}); //pasamos propiedades de "action" a reducer 
  }

  const close = () =>{
    setDisplayModal(false);
  }
  
  return (
    <Content.Provider value={{images, dispatchImg, close}}>

      {
        displayModal ? <Modal /> : null
      }

      <div className="App">
        <header>
          <h1>The best images ever</h1>
          <button onClick={()=>{setDisplayModal(true)}}>Add new image</button> 
        </header>
        <main className="main-container">
          <Lista />
        </main>
      </div>
    </Content.Provider>
    
  );
}

export default App;
