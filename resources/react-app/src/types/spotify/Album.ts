import { HasImages, Resource } from './utils';
import { ShortArtist } from './Artist';

export type Album = Resource &
  HasImages & {
    album_type: 'album' | 'compilation';
    release_date: string;
    total_tracks: number;
    type: 'album';
    artists: ShortArtist[];
  };
