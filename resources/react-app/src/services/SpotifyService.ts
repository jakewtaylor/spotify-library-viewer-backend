import axios, { AxiosInstance } from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { stringify } from 'querystring';
import { SearchResponse } from '../types/spotify/SearchResponse';

const accessTokenKey = 'access_token';
const refreshTokenKey = 'refresh_token';

class SpotifyService {
  protected instance: AxiosInstance;

  protected _accessToken: string = localStorage.getItem(accessTokenKey) || '';
  protected _refreshToken: string = localStorage.getItem(refreshTokenKey) || '';

  protected get accessToken() {
    return this._accessToken;
  }
  protected set accessToken(val: string) {
    localStorage.setItem(accessTokenKey, val);
    this._accessToken = val;
  }

  protected get refreshToken() {
    return this._refreshToken;
  }
  protected set refreshToken(val: string) {
    localStorage.setItem(refreshTokenKey, val);
    this._refreshToken = val;
  }

  constructor() {
    this.instance = this.buildInstance();
  }

  protected buildInstance() {
    const instance = axios.create({
      baseURL: 'https://api.spotify.com/v1',
      paramsSerializer: params => stringify(params),
    });

    createAuthRefreshInterceptor(instance, () => this.handleRefresh());

    instance.interceptors.request.use(req => {
      if (this.accessToken) {
        req.headers['Authorization'] = `Bearer ${this.accessToken}`;
      }

      return req;
    });

    return instance;
  }

  protected async handleRefresh() {
    await axios.get('http://spotify-viewer-api.test/sanctum/csrf-cookie', {
      withCredentials: true,
    });

    return axios
      .post(
        'http://spotify-viewer-api.test/api/spotify/refresh-token',
        {
          refresh_token: this.refreshToken,
        },
        { withCredentials: true },
      )
      .then(res => {
        this.accessToken = res.data.access_token;
      })
      .catch(() => {
        // Whoops...
      });
  }

  public needsTokens() {
    return !this.accessToken;
  }

  public setTokens(accessToken: string, refreshToken: string) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  public search(term: string) {
    return this.instance.get<SearchResponse>('/search', {
      params: {
        q: term,
        type: ['album', 'artist', 'track'].join(','),
        market: 'from_token',
      },
    });
  }
}

export const spotify = new SpotifyService();
