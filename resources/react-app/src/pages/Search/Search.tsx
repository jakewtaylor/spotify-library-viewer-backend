import React from 'react';
import { Artists } from './components/Artists';
import { Albums } from './components/Albums';
import { SearchBox } from './components/SearchBox';
import { useRecoilValue } from 'recoil';
import { searchTerm } from '../../recoil/atoms';

export const Search: React.FC = () => {
  const query = useRecoilValue(searchTerm);

  return (
    <div className="h-full">
      <SearchBox />

      {query ? (
        <>
          <Artists />

          <Albums />
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
