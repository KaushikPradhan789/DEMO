import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Spaces } from './pages/Spaces';
import { Flow } from './pages/Flow';
import { Connect } from './pages/Connect';
import { Booking } from './pages/Booking';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="/flow" element={<Flow />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Layout>
    </Router>
  );
}