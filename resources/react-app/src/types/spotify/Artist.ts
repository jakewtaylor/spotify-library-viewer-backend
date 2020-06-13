import { HasImages, HasExternalUrls, Resource } from './utils';

export type Artist = Resource &
  HasImages &
  HasExternalUrls & {
    type: 'artist';
    followers: {
      href: string | null;
      total: number;
    };
    genres: string[];
    popularity: number;
  };

export type ShortArtist = Resource &
  HasExternalUrls & {
    type: 'artist';
  };
