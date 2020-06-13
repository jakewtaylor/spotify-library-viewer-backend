import { useMemo } from 'react';

export const useCookies = () => {
  return useMemo(() => {
    return document.cookie
      .split('; ')
      .reduce<Record<string, string>>((acc, cookie) => {
        const [key, val] = cookie.split('=');
        return {
          ...acc,
          [key]: val,
        };
      }, {});
  }, []);
};
