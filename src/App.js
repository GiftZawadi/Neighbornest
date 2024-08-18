import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ResidentDashboard from './components/ResidentDashboard';
import ResidentEvents from './components/ResidentEvents';
import ResidentNews from './components/ResidentNews';
import ResidentProfile from './components/ResidentProfile';
import ResidentNotification from './components/ResidentNotification';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ResidentDashboard />} />
          <Route path="/resident/events" element={<ResidentEvents />} />
          <Route path="/resident/news" element={<ResidentNews />} />
          <Route path="/resident/profile" element={<ResidentProfile />} />
          <Route path="/resident/notifications" element={<ResidentNotification />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
