import React from 'react';
import { useRecoilValue } from 'recoil';
import { albumResults } from '../../../recoil/atoms';

export const AlbumResults: React.FC = () => {
  const albums = useRecoilValue(albumResults);

  return (
    <>
      <h5 className="text-2xl font-bold text-gray-400 mt-4 mb-2 mx-4">
        Albums
      </h5>
      <div className="flex flex-row w-full overflow-scroll">
        {albums.items.map((album, i) => (
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
  );
};
