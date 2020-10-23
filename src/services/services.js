import axios from 'axios';

const baseUrl = 'https://5f518d325e98480016123ada.mockapi.io/api/v1/images';


export const getData = async () =>{
    try {
        const res = await axios.get(baseUrl);
        return res.data;
    }catch(err) {
        throw new Error(`Unhandled - getData: ${err}`);
    }
}

export const addData = async (data) =>{
    try{
        const res = await axios.post(baseUrl,data);
        return res.data;
    }catch(err){
        throw new Error(`Unhandled - addData: ${err}`);
    }
}