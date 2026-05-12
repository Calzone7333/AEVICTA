import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Mail, Clock, Headset, Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const shouldBeWhite = !isHomePage || isScrolled || isMenuOpen;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/service', label: 'Service' },
    { path: '/apply', label: 'Loan' },
    { path: '/blogs', label: 'Blog' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`w-full z-[1000] font-sans transition-all duration-500 ${shouldBeWhite ? 'fixed top-0 left-0 bg-white shadow-xl' : 'absolute top-0 left-0 bg-transparent'}`}
    >
      {/* Top Bar - Hidden on Mobile and when scrolled */}
      <div className={`transition-all duration-500 overflow-hidden hidden lg:block ${isScrolled ? 'h-0 opacity-0' : 'h-auto opacity-100'}`}>
        <div className={`flex w-full text-[12px] font-medium transition-all duration-500 ${shouldBeWhite ? 'bg-slate-900 border-b border-slate-800' : 'bg-transparent border-b border-white/5'}`}>
          <div className={`px-8 py-1 flex items-center gap-5 transition-all duration-500 ${shouldBeWhite ? 'border-r border-slate-800' : 'border-r border-white/5'}`}>
            {[
              { Icon: Facebook, url: 'https://www.facebook.com/profile.php?id=61589597423685' },
              { Icon: Instagram, url: 'https://www.instagram.com/aevicta/' }
            ].map((item, idx) => (
              <a 
                key={idx} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-primary transition-colors"
              >
                <item.Icon size={14} {...(item.Icon === Instagram ? {} : { fill: 'currentColor' })} />
              </a>
            ))}
          </div>
          
          <div className="flex-1 px-8 py-1 flex justify-end items-center text-white/80">
              <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-primary" fill="currentColor" />
                <span>contact@aevicta.com</span>
              </div>
              <div className="flex items-center gap-2 border-l border-white/20 pl-8">
                <Clock size={14} className="text-primary" fill="currentColor" />
                <span>Mon - Sat 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-500 ${shouldBeWhite ? 'py-4 lg:py-5 bg-white' : 'py-3 lg:py-4 bg-transparent'}`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0 z-[1001]">
            <Link to="/" className="flex items-center gap-3 group">
              <div className={`transition-all duration-500 rounded-sm ${(!shouldBeWhite && !isMenuOpen) ? 'bg-white p-2 px-3 shadow-lg' : ''}`}>
                <img 
                  src="/logowithoutbg.png" 
                  alt="Aevicta Logo" 
                  className={`w-auto object-contain transition-all duration-500 ${shouldBeWhite ? 'h-10 lg:h-14' : 'h-8 lg:h-10'}`} 
                />
              </div>
            </Link>
          </div>

          {/* Centered Menu - Hidden on Mobile */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center h-full">
            {navItems.map((item) => (
              <NavLink 
                key={item.path}
                to={item.path} 
                className={({ isActive }) => `
                  text-[16px] font-medium font-menu transition-all duration-500 py-2 relative
                  ${shouldBeWhite ? 'text-slate-900' : 'text-white'}
                  ${isActive ? 'after:w-full text-primary font-black' : 'after:w-0 hover:text-primary'}
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-primary after:transition-all after:duration-300
                `}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Call Section & Mobile Toggle */}
          <div className="flex items-center gap-4 z-[1001]">
            {/* Call Info - Hidden on Tablet/Mobile */}
            <div className={`hidden sm:flex items-center gap-4 pl-6 border-l transition-colors duration-500 ${shouldBeWhite ? 'border-slate-200' : 'border-white/20'}`}>
              <div className="w-10 h-10 flex items-center justify-center text-primary">
                <Headset size={28} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className={`text-[10px] font-medium font-menu uppercase tracking-widest leading-none mb-1 transition-colors duration-500 ${shouldBeWhite ? 'text-slate-400' : 'text-white/60'}`}>Call Anytime</span>
                <span className={`text-[16px] font-semibold font-display tracking-tight transition-colors duration-500 ${shouldBeWhite ? 'text-slate-900' : 'text-white'}`}>+91 9943048554</span>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 transition-colors duration-500 ${shouldBeWhite ? 'text-slate-900' : 'text-white'}`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-white z-[999] lg:hidden flex flex-col p-8 pt-24 overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink 
                  key={item.path}
                  to={item.path} 
                  className={({ isActive }) => `
                    text-xl font-black font-display uppercase tracking-tight py-2 border-b border-slate-50
                    ${isActive ? 'text-primary' : 'text-slate-900'}
                  `}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            
            <div className="mt-12 space-y-8 pb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Headset size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Customer Support</p>
                  <p className="text-xl font-black text-slate-900">+91 9943048554</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                {[
                  { Icon: Facebook, url: 'https://www.facebook.com/profile.php?id=61589597423685' },
                  { Icon: Instagram, url: 'https://www.instagram.com/aevicta/' }
                ].map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all"
                  >
                    <item.Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
