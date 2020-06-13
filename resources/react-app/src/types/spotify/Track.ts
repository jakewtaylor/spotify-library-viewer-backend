import { Resource, HasImages, HasExternalUrls } from './utils';
import { Album } from './Album';
import { ShortArtist } from './Artist';

export type Track = Resource &
  HasImages &
  HasExternalUrls & {
    album: Album;
    artists: ShortArtist[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: {
      [key: string]: string;
    };
    is_local: boolean;
    is_playable: boolean;
    popularity: number;
    preview_url: string;
    track_number: string;
    type: 'track';
  };
