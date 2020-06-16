import React from 'react';

export const PictureContainer: React.FC = ({ children }) => (
  <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-800">
    {children}
  </div>
);
