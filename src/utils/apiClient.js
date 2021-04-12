import axios from 'axios';
import Constants from './constants';

axios.defaults.baseURL = Constants.apiUrl;

export default axios;
