import axios from 'axios';

export const authAxios = axios.create({
    //baseURL : "process.env.REACT_APP_BACKEND_URL"
    baseURL : "http://challenge-react.alkemy.org"
});

export const heroesAxios = axios.create({
    baseURL:'https://superheroapi.com/api/1299661203827579/'
})