import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { parse } from 'querystring';

export const useQueryParams = () => {
  const { search } = useLocation();

  return useMemo(() => {
    return parse(search.slice(1));
  }, [search]);
};
