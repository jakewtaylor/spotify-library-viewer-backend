import React, { Suspense } from 'react';
import { AlbumList } from './Album/AlbumList';
import { AlbumListSkeleton } from './Album/AlbumListSkeleton';

export const Albums: React.FC = () => {
  return (
    <>
      <h5 className="text-2xl font-bold text-gray-400 mt-4 mb-2 mx-4">
        Albums
      </h5>

      <div className="flex flex-row w-full overflow-scroll">
        <Suspense fallback={<AlbumListSkeleton />}>
          <AlbumList />
        </Suspense>
      </div>
    </>
  );
};
