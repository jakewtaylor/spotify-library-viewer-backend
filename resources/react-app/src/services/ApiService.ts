import axios, { AxiosInstance } from 'axios';
import { stringify } from 'querystring';

class ApiService {
  protected instance: AxiosInstance;

  constructor() {
    this.instance = this.buildInstance();

    this.instance.get('../sanctum/csrf-token').then(() => {
      //
    });
  }

  protected buildInstance() {
    const instance = axios.create({
      baseURL: '/api',
      paramsSerializer: params => stringify(params),
      withCredentials: true,
    });

    return instance;
  }

  public async getFavouriteAlbums() {
    return this.instance.get<any>('/albums');
  }
}

export const api = new ApiService();
