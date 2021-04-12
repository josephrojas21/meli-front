import axios from 'axios';
import Constants from './constants';

console.log(Constants);
axios.defaults.baseURL = Constants.apiUrl;

export default axios;
