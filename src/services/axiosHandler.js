import axios from "axios";

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function createHeaders() {
    const auth = JSON.parse(localStorage.getItem("trackit"));
    const config = {
      headers: {
        Authorization: `Bearer ${auth.token}`
      }
    };
  
    return config;
}

function errorMessage(resp){
    const initial=0;
    const txt = 'Attention: ';
    if(resp.data.details){
        alert(txt+resp.data.details[initial]);
    } else if(resp.data.message){
        alert(txt+resp.data.message);
    } else {
        alert('ERROR '+resp.status);
    }
}

function getHabits(){
    const config = createHeaders();
    const promise = axios.get(`${BASE_URL}/habits`,config)
    return promise
}

function getToday(){
    const config = createHeaders();
    const promise = axios.get(`${BASE_URL}/habits/today`,config);
    return promise;
}

function postSignup(body){
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
    return promise;
}

function postLogin(body){
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    return promise;
}

export {postSignup , postLogin , getHabits, getToday , errorMessage};