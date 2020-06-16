import React from 'react';
import { PictureContainer } from './PictureContainer';

export const ArtistListSkeleton: React.FC = () => {
  return (
    <>
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`flex-shrink-0 mr-4 text-center ${
              i === 0 ? 'ml-4' : ''
            }`}
          >
            <PictureContainer />
          </div>
        ))}
    </>
  );
};
