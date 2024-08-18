import React from 'react';
import AdminLayout from './AdminLayout';
import AdminDashboardMainContent from './AdminDashboardMainContent';

const AdminView = () => {
  return (
    <AdminLayout>
      <AdminDashboardMainContent />
    </AdminLayout>
  );
};

export default AdminView;
