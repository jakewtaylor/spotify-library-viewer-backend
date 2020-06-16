import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { searchTerm } from '../../../recoil/atoms';

export const SearchBox: React.FC = () => {
  const [recoilSearchTerm, setRecoilSearchTerm] = useRecoilState(searchTerm);
  const [search, setSearch] = useState(recoilSearchTerm);

  useEffect(() => {
    const t = setTimeout(() => {
      setRecoilSearchTerm(search);
    }, 500);

    return () => clearTimeout(t);
  }, [search, setRecoilSearchTerm]);

  return (
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
  );
};
