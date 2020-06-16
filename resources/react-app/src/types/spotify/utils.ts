import { Image } from './Image';

export type Resource = {
  id: string;
  href: string;
  name: string;
  uri: string;
};

export type HasImages = {
  images: Image[];
};

export type HasExternalUrls = {
  spotify?: string;
};

export type Paginated<T> = {
  href: string;
  items: T[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
};
