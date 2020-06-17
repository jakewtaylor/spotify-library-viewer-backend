import { atom, selector } from 'recoil';
import { spotify } from '../services/SpotifyService';

export const searchTerm = atom({
  key: 'searchTerm',
  default: 'melvins',
});

export const searchResults = selector({
  key: 'searchResults',
  get: async ({ get }) => {
    const query = get(searchTerm);

    const res = await spotify.search(query);

    return res.data;
  },
});

export const artistResults = selector({
  key: 'searchResults-artists',
  get: ({ get }) => {
    const response = get(searchResults);

    return response.artists;
  },
});

export const albumResults = selector({
  key: 'searchResults-albums',
  get: ({ get }) => {
    const response = get(searchResults);

    return response.albums;
  },
});

export const trackResults = selector({
  key: 'searchResults-tracks',
  get: ({ get }) => {
    const response = get(searchResults);

    return response.tracks;
  },
});
