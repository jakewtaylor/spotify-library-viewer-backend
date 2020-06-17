import React, { Suspense } from 'react';
import { ArtistList } from './Artist/ArtistList';
import { ArtistListSkeleton } from './Artist/ArtistListSkeleton';

export const Artists: React.FC = () => {
  return (
    <>
      <h5 className="text-2xl font-bold text-gray-400 mt-4 mx-4 mb-2">
        Artists
      </h5>

      <div className="flex flex-row w-full overflow-scroll">
        <Suspense fallback={<ArtistListSkeleton />}>
          <ArtistList />
        </Suspense>
      </div>
    </>
  );
};
