//封装axios

import axios from 'axios'
import Vue from 'vue';

axios.defaults.baseURL = 'https://cnodejs.org/api/v1/'

// axios.defaults.timeout = 2500;

//改变传出结果。
axios.interceptors.response.use((res) => res.data)

Vue.prototype.$axios = axios

export default axios