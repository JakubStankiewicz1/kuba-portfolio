import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage/MainPage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import ContactPage from './components/ContactPage/ContactPage';
import './App.css';

const App = () => {
  const location = useLocation();

  return (
    <div className="app">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;