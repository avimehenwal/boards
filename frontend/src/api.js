import axios from 'axios'

const BASE = 'http://localhost:3010'

// fetch API has issues => use axios
// Objects are not valid as a React child
const makeApiCall = async (url, params = {}) => {
  try {
    const res = await axios.get(`${BASE}${url}`, { params: params })
    // console.log(res);
    return res.data
  } catch (e) {
    console.log('API Error :' + e);
    return {}
  }
}

export const getUsers = async (limit = 10) => {
  const users = await makeApiCall('/user', { limit: limit })
  // console.log('API USERS :');
  // console.dir(users['users']);
  return users['users']
}

export const getUser = async (userId) => {
  const userInfo = await makeApiCall(`/user/${userId}`)
  return userInfo
}