import React from 'react';
import ResidentHeader from './ResidentHeader';
import ResidentSidebar from './ResidentSidebar';

const ResidentLayout = ({ children, showSidebar = true }) => {
  return (
    <div className="flex flex-col h-screen">
      <ResidentHeader />
      <div className="flex flex-1">
        {showSidebar && <ResidentSidebar />}
        <main className="flex-1 p-4 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default ResidentLayout;
