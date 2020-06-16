import React, { useEffect } from 'react';
import { useCookies } from '../../../hooks/useCookies';
import { useQueryParams } from '../../../hooks/useQueryParams';
import { spotify } from '../../../services/SpotifyService';

export const SpotifyGate: React.FC = ({ children }) => {
  const cookies = useCookies();
  const params = useQueryParams();

  useEffect(() => {
    const accessToken = cookies.accessToken || (params.accessToken as string);
    const refreshToken =
      cookies.refreshToken || (params.refreshToken as string);

    if (spotify.needsTokens() && accessToken && refreshToken) {
      spotify.setTokens(accessToken, refreshToken);
    }
  }, [cookies, params]);

  return <>{children}</>;
};
