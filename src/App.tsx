import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="w-full max-w-none mx-auto" style={{ width: '70%' }}>
            <div className="px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              © 2025 Your Name. All rights reserved. BI Expert specializing in data-driven insights.
            </p>
            </div>
          </div>
        </footer>
        </div>
    </Router>
  );
}

export default App;