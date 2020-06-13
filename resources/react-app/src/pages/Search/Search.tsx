import React, { useState, useEffect } from 'react';
import { useDebounced } from '../../hooks/useDebounced';
import { useSpotifyService } from '../../components/auth/spotify/SpotifyGate';
import { SearchResponse } from '../../types/spotify/SearchResponse';

export const Search: React.FC = () => {
  const spotify = useSpotifyService();
  const [search, setSearch] = useState('melvins');
  const debouncedSearch = useDebounced(search, 500);

  const [res, setRes] = useState<SearchResponse | null>(null);

  useEffect(() => {
    if (!debouncedSearch) return;

    spotify
      .search(debouncedSearch)
      .then(({ data }) => {
        setRes(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [debouncedSearch, spotify]);

  return (
    <div className="h-full">
      <div className="p-4">
        <div className="bg-gray-800 rounded">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="block w-full bg-transparent p-4 text-gray-200 placeholder:text-gray-200 focus:outline-none focus:shadow-lg"
            placeholder="Search..."
          />
        </div>
      </div>

      {res ? (
        <>
          <h5 className="text-2xl font-bold text-gray-400 mt-4 mx-4 mb-2">
            Artists
          </h5>
          <div className="flex flex-row w-full overflow-scroll">
            {res.artists.items.map((artist, i) => (
              <div
                key={artist.id}
                className={`flex-shrink-0 mr-4 text-center ${
                  i === 0 ? 'ml-4' : ''
                }`}
              >
                {artist.images.length > 0 ? (
                  <div className="w-48 h-48 rounded-full overflow-hidden">
                    <img
                      src={artist.images[0].url}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="w-48 h-48 rounded-full bg-gray-800" />
                )}
                <p className="w-48 text-lg font-bold text-gray-400 mt-2">
                  {artist.name}
                </p>
              </div>
            ))}
            <p>&nbsp;</p>
          </div>

          <h5 className="text-2xl font-bold text-gray-400 mt-4 mb-2 mx-4">
            Albums
          </h5>
          <div className="flex flex-row w-full overflow-scroll">
            {res.albums.items.map((album, i) => (
              <div
                key={album.id}
                className={`flex-shrink-0 w-48 mr-4 ${i === 0 ? 'ml-4' : ''}`}
              >
                <img src={album.images[0].url} className="mb-2" />
                <p className="text-sm text-gray-400 font-semibold whitespace-no-wrap truncate">
                  {album.name}
                </p>
                <p className="text-sm text-gray-400 whitespace-no-wrap">
                  {album.artists.map(artist => artist.name).join(', ')}
                </p>
              </div>
            ))}
            <p>&nbsp;</p>
          </div>
        </>
      ) : (
        <div className="p-4 text-center">
          <p className="text-gray-400">
            Enter a search term to see some results...
          </p>
        </div>
      )}
    </div>
  );
};
