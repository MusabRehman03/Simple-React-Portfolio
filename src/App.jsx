import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Add these imports
import './App.css';
import Sidebar from '../src/components/SideBar';
// Import your page components
import HomePage from '../src/pages/HomePage';
import EducationPage from '../src/pages/EducationPage';
import AchievemetsPage from '../src/pages/AchievementsPage';
import ProjectsPage from '../src/pages/ProjectsPage';
import SkillsPage from '../src/pages/SkillsPage';
import ContactPage from '../src/pages/ContactPage';
import Footer from './components/Footer';
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      {/* Sidebar / Navigation Drawer */}
      <Sidebar />

      {/* Routes for Page Navigation */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/achievements" element={<AchievemetsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;