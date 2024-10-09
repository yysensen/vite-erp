// src/api.js
import axios from 'axios';

// 从环境变量中读取基础 URL
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
console.log(VITE_BASE_URL, '请求呢');
// 创建 axios 实例
const apiClient = axios.create({
  baseURL: VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // 允许跨域请求携带凭证
});

// 请求拦截器
apiClient.interceptors.request.use(
  (config) => {
    console.log(
      `Request Method: ${config.method.toUpperCase()}, URL: ${config.url}, Data:`,
      config.data,
      'Params:',
      config.params
    );
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

/**
 * 封装请求函数
 * @param {string} method - 请求方法 ('GET' 或 'POST')
 * @param {string} url - 请求 URL
 * @param {Object} [data] - 请求参数（GET 请求是 params，POST 请求是 body）
 * @returns {Promise<any>}
 */
export const request = async (method, url, data = {}) => {
  console.log(`Request Method: ${method}, URL: ${url}, Data:`, data);
  try {
    const config = {
      method: method,
      url,
      ...(method === 'GET' ? { params: data } : { data }),
    };

    const response = await apiClient(config);
    return response.data;
  } catch (error) {
    console.error(`${method} 请求失败`, error);
    throw error;
  }
};
