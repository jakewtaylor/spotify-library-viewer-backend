import React from 'react';

export const AlbumListSkeleton: React.FC = () => {
  return (
    <>
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`flex-shrink-0 w-48 h-48 bg-gray-800 mr-4 ${
              i === 0 ? 'ml-4' : ''
            }`}
          />
        ))}
    </>
  );
};
