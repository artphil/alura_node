import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:5000'
})

async function busca(url, setDado) {
  const resposta = await api.get(url);
  setDado(resposta.data);
}

export { api, busca };