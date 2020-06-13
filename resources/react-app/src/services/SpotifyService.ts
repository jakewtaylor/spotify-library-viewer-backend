import axios, { AxiosInstance } from 'axios';
import { stringify } from 'querystring';
import { SearchResponse } from '../types/spotify/SearchResponse';

export class SpotifyService {
  protected instance: AxiosInstance;
  protected accessToken: string | null = null;

  public constructor(accessToken: string) {
    this.accessToken = accessToken;
    this.instance = this.buildInstance();
  }

  protected buildInstance() {
    return axios.create({
      baseURL: 'https://api.spotify.com/v1',
      paramsSerializer: params => stringify(params),
      headers: {
        Authorization: `Bearer ${this.accessToken || ''}`,
      },
    });
  }

  public setAccessToken(token: string) {
    this.accessToken = token;
    this.instance = this.buildInstance();
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
