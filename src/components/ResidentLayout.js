import React, { useState, useEffect } from 'react';
import ResidentHeader from './ResidentHeader';
import ResidentSidebar from './ResidentSidebar';

const ResidentLayout = ({ children, showSidebar = true }) => {
  const [residentId, setResidentId] = useState(null);
  const [jwtToken, setJwtToken] = useState('');

  useEffect(() => {
    const storedResidentId = localStorage.getItem('userID');
    const storedJwtToken = localStorage.getItem('jwtToken');

    if (storedResidentId) {
      setResidentId(parseInt(storedResidentId, 10));
    }
    if (storedJwtToken) {
      setJwtToken(storedJwtToken);
    }
  }, []);

  if (residentId === null) {
    return <p>Loading resident information...</p>;
  }

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { residentId, jwtToken })
  );

  return (
    <div className="resident-layout flex">
      {showSidebar && <ResidentSidebar />}
      <div className="main-content w-full">
        <ResidentHeader />
        <div className="content-area p-4">
          {childrenWithProps}
        </div>
      </div>
    </div>
  );
};

export default ResidentLayout;
