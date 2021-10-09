import axios from 'axios';

const API_KEY = '23774357-4793aa40ff26d1244539ecd6f';
const URL = 'https://pixabay.com/api/'

export const getImages = (text, count) => {
    try{
      const data= axios.get(`${URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}&safesearch=true`)
   return data;
    }catch(error){
        console.log(error);
    }
}