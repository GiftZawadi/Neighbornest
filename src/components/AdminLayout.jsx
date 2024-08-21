import React from 'react';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout flex">
      <AdminSidebar />
      <div className="main-content w-full bg-ccdae4">
        <AdminHeader />
        <div className="content-area p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
