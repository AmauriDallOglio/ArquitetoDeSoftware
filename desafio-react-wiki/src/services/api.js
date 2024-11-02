import axios from 'axios';

export const api = axios.create({

    baseURL: 'https://api.github.com'
    //https://api.github.com/repos/amauridalloglio/WebDeveloper

})