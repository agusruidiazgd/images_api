import React, {useReducer,useEffect} from 'react';
import './App.scss';
import Lista from './components/Lista/Lista';
import {getData} from './services/services';
import {INIT, reducer} from './reducers/reducers';
import Content from './contexts/contentContext';

function App() {
  const [images, dispatchImg] = useReducer(reducer,[]);

  useEffect(() => {
    getImages();
  }, []);
  
  const getImages = async () =>{
    const dataImages = await getData();
    dispatchImg({type: INIT, payload: dataImages}); //pasamos propiedades de "action" a reducer 
  }
  
  return (
    <Content.Provider value={{images}}>
      <div className="App">
        <header>
          <h1>The best images ever</h1>
          <button>Add new image</button> 
        </header>
        <main className="main-container">
          <Lista />
        </main>
      </div>
    </Content.Provider>
    
  );
}

export default App;
