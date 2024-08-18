
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ResidentDashboard from './components/ResidentDashboard';
import ResidentEvents from './components/ResidentEvents';
import ResidentNews from './components/ResidentNews';
import ResidentProfile from './components/ResidentProfile';
import ResidentNotification from './components/ResidentNotification';
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
        <Route path="/" element={<ResidentDashboard />} />
        <Route path="/resident/events" element={<ResidentEvents />} />
        <Route path="/resident/news" element={<ResidentNews />} />
        <Route path="/resident/profile" element={<ResidentProfile />} />
        <Route path="/resident/notifications" element={<ResidentNotification />} />
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
