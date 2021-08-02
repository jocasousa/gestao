import axios from 'axios';

export const api = axios.create({
     baseURL: 'http://cotacaoprincesa.com.br:8000/',
     headers: {'Authorization': 'Basic b21uaXBkdjpvbW5pQDIwMjA='}
 })