import { Album } from './Album';
import { Paginated } from './utils';
import { Artist } from './Artist';
import { Track } from './Track';

export type SearchResponse = {
  albums: Paginated<Album>;
  artists: Paginated<Artist>;
  tracks: Paginated<Track>;
};
