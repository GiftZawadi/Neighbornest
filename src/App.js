import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Dashboard from './components/Dashboard';
import SuperAdminNotifications from './components/SuperAdminNotifications';
import SuperAdminProfilePage from './components/SuperAdminProfilePage';
import Logout from './components/Logout';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default route to redirect to the dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" />} />
          
          {/* About Us and Contact Us Routes */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          
          {/* Dashboard route */}
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/superadminnotifications" element={<SuperAdminNotifications />} /> {/* Add this route */}
          <Route path="/superadminprofile" element={<SuperAdminProfilePage />} /> {/* Add this route */}
          <Route path="/logout" element={<Logout />} /> {/* Add this route */}
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
