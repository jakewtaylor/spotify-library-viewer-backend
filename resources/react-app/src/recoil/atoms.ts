import { atom } from 'recoil';
export * from './search';

export const accessTokenState = atom<string | null>({
  key: 'accessToken',
  default: null,
  // @ts-ignore
  persistence_UNSTABLE: { type: 'test' },
});

export const refreshTokenState = atom<string | null>({
  key: 'refreshToken',
  default: null,
  // @ts-ignore
  persistence_UNSTABLE: { type: 'test' },
});
