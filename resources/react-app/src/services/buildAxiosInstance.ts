import axios from 'axios';
import { stringify } from 'querystring';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

const instance = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  paramsSerializer: params => stringify(params),
});

// createAuthRefreshInterceptor(instance);
