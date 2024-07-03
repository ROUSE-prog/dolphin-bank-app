// components/MainContent.tsx
import React from 'react';

const MainContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="p-5 flex-grow bg-white bg-opacity-20 shadow-md backdrop-blur-lg rounded-lg overflow-hidden">
      {children}
    </div>
  );
};

export default MainContent;
