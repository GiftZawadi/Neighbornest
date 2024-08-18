// components/Settings.jsx
import React from 'react';
import AdminLayout from './AdminLayout';

export default function Settings() {
  return (
    <AdminLayout>
        <div className="p-4">
      <h2 className="font-semibold text-xl mb-4">Settings</h2>
      <form>
        <div className="mb-4">
          <label className="block mb-2">Change Password:</label>
          <input type="password" placeholder="New Password" className="border p-2 w-full rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Notification Preferences:</label>
          <select className="border p-2 w-full rounded">
            <option>Email Notifications</option>
            <option>Push Notifications</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save Settings</button>
      </form>
    </div>
    </AdminLayout>
  );
}
