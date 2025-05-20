// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Tutors from './pages/Tutors';
import TutorProfile from './pages/TutorProfile';
import CreateProfile from './pages/CreateProfile';
import BookSession from './pages/BookSession';
import LoginPage from './pages/login'; // ✅ ADD THIS LINE

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />

          
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/tutor/:id" element={<TutorProfile />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/book-session" element={<BookSession />} />
          <Route path="/login" element={<LoginPage />} /> {/* ✅ ADD THIS LINE */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
