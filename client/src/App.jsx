import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Loader from './components/Loader';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';
import Blogs from './pages/Blogs';
import ApplyNow from './pages/ApplyNow';
import Service from './pages/Service';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ScrollToTop from './components/ScrollToTop';
import FloatingButtons from './components/FloatingButtons';
import { API_BASE_URL } from './apiConfig';
import { useLocation } from 'react-router-dom';

const AppContent = () => {
  const location = useLocation();

  React.useEffect(() => {
    // Log visit on every route change
    fetch(`${API_BASE_URL}/analytics/log`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pageUrl: location.pathname })
    }).catch(err => console.error('Analytics logging failed:', err));
  }, [location]);

  const isDashboard = location.pathname.startsWith('/dashboard') || location.pathname === '/login';

  return (
    <div className="min-h-screen font-sans text-slate-900 overflow-x-hidden">
      {!isDashboard && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/apply" element={<ApplyNow />} />
        <Route path="/service" element={<Service />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {!isDashboard && <Footer />}
      {!isDashboard && <FloatingButtons />}
    </div>
  );
};

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
