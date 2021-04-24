import axios from 'axios'

const BASE = 'http://localhost:3010'

// fetch API has issues => use axios
// Objects are not valid as a React child
const makeApiCall = async (url) => {
  try {
    const res = await axios.get(`${BASE}${url}`)
    console.log(res);
    return res.data
  } catch (e) {
    console.log('API Error :' + e);
    return {}
  }
}

export const getUsers = async () => {
  const users = await makeApiCall('/user')
  // console.log('API USERS :');
  // console.dir(users['users']);
  return users['users']
}