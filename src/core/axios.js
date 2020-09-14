import axios from 'axios';

axios.defaults.baseURL = process.env.SERVER_DEV_URL;

export default axios