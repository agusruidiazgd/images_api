export const INIT = "Inicializar la api";
export const ADD_IMG = "Agregar imagen";

export const reducer = (state, action) =>{ //se invoca con el dispatch
    //en el case se ver las acciones
    switch(action.type){
        case INIT:
            return action.payload;
        case ADD_IMG:  
            return [...state,action.payload];    
    }
}