import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-app-48867.firebaseio.com/'
})

export default instance;