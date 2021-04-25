import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.100.43:3333',
    //Náo colocar local host e sim ip do
    // ambiente de desenvolvimento
});

export default api;

//Vamos instalar o Json server
// eh uma biblioteca que simula APIS fakes
// assim nao precisamos ficar dependentes
//de apis extermas