// prefer axios over fetch API
import axios from 'axios'
const qs = require('querystring');

const nwCaller = axios.create({
  baseURL: 'http://localhost:3010',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'avimehenwal' }
});


const networkCall = async (url, params = {}) => {
  try {
    const res = await nwCaller.get(url)
    // console.log(res);
    return res.data
  } catch (e) {
    console.log('API Error :' + e);
    return {}
  }
}

export const getBoardData = async () => {
  const result = await networkCall('/boardapp')
  return result
}

export const postStatusChange = async (id) => {
  const result = await nwCaller('/boardapp/:id')
  return result
}