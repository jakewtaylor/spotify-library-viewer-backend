import React, { useEffect, createContext, useContext, useMemo } from 'react';
import {
  useRecoilState,
  // @ts-ignore
  useTransactionObservation_UNSTABLE,
} from 'recoil';
import { useCookies } from '../../../hooks/useCookies';
import { useQueryParams } from '../../../hooks/useQueryParams';
import { SpotifyService } from '../../../services/SpotifyService';
import { accessTokenState, refreshTokenState } from '../../../recoil/atoms';

const SpotifyServiceContext = createContext<SpotifyService>(
  {} as SpotifyService,
);
export const useSpotifyService = () => useContext(SpotifyServiceContext);

export const SpotifyGate: React.FC = ({ children }) => {
  const cookies = useCookies();
  const params = useQueryParams();

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [refreshToken, setRefreshToken] = useRecoilState(refreshTokenState);

  useEffect(() => {
    if (!accessToken) {
      setAccessToken(
        cookies.accessToken || (params.accessToken as string) || null,
      );
    }
  }, [accessToken, cookies.accessToken, params.accessToken, setAccessToken]);

  useEffect(() => {
    if (!refreshToken) {
      setRefreshToken(
        cookies.refreshToken || (params.refreshToken as string) || null,
      );
    }
  }, [
    refreshToken,
    cookies.refreshToken,
    params.refreshToken,
    setRefreshToken,
  ]);

  const spotifyService = useMemo(
    () => (accessToken ? new SpotifyService(accessToken) : null),
    [accessToken],
  );

  useTransactionObservation_UNSTABLE(
    ({ atomValues, atomInfo, modifiedAtoms }: any) => {
      for (const modifiedAtom of modifiedAtoms) {
        console.log(JSON.stringify({ value: atomValues.get(modifiedAtoms) }));

        localStorage.setItem(
          modifiedAtom,
          JSON.stringify({ value: atomValues.get(modifiedAtom) }),
        );
      }
    },
  );

  return spotifyService && accessToken ? (
    <SpotifyServiceContext.Provider value={spotifyService}>
      {children}
    </SpotifyServiceContext.Provider>
  ) : (
    <>{children}</>
  );
};
