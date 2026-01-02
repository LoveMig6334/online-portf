import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import SubjectPage from './pages/SubjectPage';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subject/:id" element={<SubjectPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;