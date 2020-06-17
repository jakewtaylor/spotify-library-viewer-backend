import { selector } from 'recoil';
import { api } from '../../services/ApiService';

export const favouriteAlbumsQuery = selector({
  key: 'favouriteAlbums',
  get: async () => {
    const res = await api.getFavouriteAlbums();

    return res.data;
  },
});
