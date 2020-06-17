import React from 'react';
import { useRecoilValue } from 'recoil';
import { albumResults } from '../../../../recoil/atoms';
import { AlbumArt } from './AlbumArt';

export const AlbumList: React.FC = () => {
  const albums = useRecoilValue(albumResults);

  return (
    <>
      {albums.items.map((album, i) => (
        <div
          key={album.id}
          className={`flex-shrink-0 w-48 mr-4 ${i === 0 ? 'ml-4' : ''}`}
        >
          <AlbumArt image={album.images[0]} />
          <p className="text-sm text-gray-400 font-semibold whitespace-no-wrap truncate">
            {album.name}
          </p>
          <p className="text-sm text-gray-400 whitespace-no-wrap">
            {album.artists.map(artist => artist.name).join(', ')}
          </p>
        </div>
      ))}
      <p>&nbsp;</p>
    </>
  );
};
