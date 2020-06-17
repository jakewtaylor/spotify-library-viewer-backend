import React from 'react';
import { useRecoilValue } from 'recoil';
import { artistResults } from '../../../../recoil/atoms';
import { PictureContainer } from './PictureContainer';

export const ArtistList: React.FC = () => {
  const artists = useRecoilValue(artistResults);

  return (
    <>
      {artists.items.map((artist, i) => (
        <div
          key={artist.id}
          className={`flex-shrink-0 mr-4 text-center ${i === 0 ? 'ml-4' : ''}`}
        >
          {artist.images.length > 0 ? (
            <PictureContainer>
              <img
                src={artist.images[0].url}
                className="object-cover w-full h-full"
                alt={artist.name}
              />
            </PictureContainer>
          ) : (
            <PictureContainer />
          )}
          <p className="w-48 text-lg font-bold text-gray-400 mt-2">
            {artist.name}
          </p>
        </div>
      ))}
      <p>&nbsp;</p>
    </>
  );
};
