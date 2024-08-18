import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Dashboard from './components/Dashboard';
import SuperAdminNotifications from './components/SuperAdminNotifications';
import SuperAdminProfilePage from './components/SuperAdminProfilePage';
import Logout from './components/Logout';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import AdminView from './components/AdminView';
import News from './components/News';
import Settings from './components/Settings';
import Notifications from './components/Notifications';
import Events from './components/Events';
import AdminProfile from './components/AdminProfile';
import AddEvent from './components/AddEvent';
import AddNews from './components/AddNews';
import AddResident from './components/AddResident';


function App() {
  return (
    <Router>
      <Routes>         
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/superadminnotifications" element={<SuperAdminNotifications />} /> 
        <Route path="/superadminprofile" element={<SuperAdminProfilePage />} /> 
        <Route path="/logout" element={<Logout />} /> 
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminView />} />
        <Route path="/admin-news" element={<News />} />
        <Route path="/admin-settings" element={<Settings />} />
        <Route path="/admin-notifications" element={<Notifications />} />
        <Route path="/admin-events" element={<Events />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/admin-dashboard" element={<AdminView />} />
        <Route path="/create-event" element={<AddEvent />} />
        <Route path="/create-news" element={<AddNews />} />
        <Route path="/add-resident" element={<AddResident />} />
      </Routes>
    </Router>
  );
}

export default App;
