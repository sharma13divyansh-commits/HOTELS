import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Building2, 
  Compass, 
  Tag, 
  Info, 
  PhoneCall, 
  CalendarCheck, 
  User, 
  Menu, 
  X, 
  ChevronDown, 
  LogOut, 
  ShieldCheck, 
  Heart,
  Crown
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useBooking } from '../context/BookingContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const { currentUser, logout } = useAuth();
  const { bookings, wishlist } = useBooking();
  const location = useLocation();
  const navigate = useNavigate();

  const activeBookingsCount = bookings.filter(b => b.status === 'Upcoming').length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Explore Hotels', path: '/hotels' },
    { name: 'Destinations', path: '/#destinations' },
    { name: 'Offers', path: '/#offers' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const handleNavClick = (path) => {
    if (path.startsWith('/#')) {
      const elementId = path.substring(2);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(elementId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(elementId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy-900/95 backdrop-blur-md shadow-xl py-3 border-b border-gold/20' 
          : 'bg-gradient-to-b from-navy-900/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy-900 transition-all duration-300 shadow-md">
              <Crown className="w-5 h-5 transition-transform group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wider text-white flex items-center gap-1.5">
                YoYo <span className="text-gold">Hotels</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-gray-300 font-sans -mt-1">
                Stay Better. Travel Happier.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              link.path.startsWith('/#') ? (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.path)}
                  className="text-sm font-medium text-gray-200 hover:text-gold transition-colors duration-200"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                    location.pathname === link.path 
                      ? 'text-gold font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold' 
                      : 'text-gray-200 hover:text-gold'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* My Bookings Pill */}
            <Link
              to="/my-bookings"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-gray-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all"
            >
              <CalendarCheck className="w-4 h-4 text-gold" />
              <span>My Bookings</span>
              {activeBookingsCount > 0 && (
                <span className="bg-gold text-navy-900 text-[11px] font-bold px-1.5 py-0.2 rounded-full">
                  {activeBookingsCount}
                </span>
              )}
            </Link>

            {/* Auth Dropdown or Login Button */}
            {currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2.5 p-1.5 pr-3 rounded-full bg-navy-800/80 hover:bg-navy-700/80 border border-gold/30 text-white transition-all text-xs"
                >
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-7 h-7 rounded-full object-cover ring-1 ring-gold"
                  />
                  <div className="text-left hidden xl:block">
                    <p className="font-medium text-white truncate max-w-[100px] leading-tight">
                      {currentUser.name}
                    </p>
                    <p className="text-[10px] text-gold">{currentUser.tier}</p>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-300" />
                </button>

                {/* Dropdown Menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 animate-fade-in text-charcoal z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-xs text-gray-500">Signed in as</p>
                      <p className="text-sm font-semibold text-navy-900 truncate">{currentUser.name}</p>
                      <p className="text-xs text-gold-dark font-medium">{currentUser.tier} • {currentUser.loyaltyPoints} pts</p>
                    </div>

                    <Link
                      to="/my-bookings"
                      className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-charcoal hover:bg-gold/10 hover:text-navy-900 transition-colors"
                    >
                      <CalendarCheck className="w-4 h-4 text-gold-dark" />
                      <span>Manage Reservations</span>
                    </Link>

                    <Link
                      to="/hotels"
                      className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-charcoal hover:bg-gold/10 hover:text-navy-900 transition-colors"
                    >
                      <Compass className="w-4 h-4 text-gold-dark" />
                      <span>Explore Luxury Hotels</span>
                    </Link>

                    <div className="border-t border-gray-100 my-1"></div>

                    <button
                      onClick={() => {
                        logout();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs text-red-600 hover:bg-red-50 transition-colors text-left"
                    >
                      <LogOut className="w-4 h-4 text-red-500" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="text-xs font-semibold text-white hover:text-gold px-3 py-2 transition-colors"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="text-xs font-semibold text-navy-900 bg-gold hover:bg-gold-light px-4 py-2 rounded-full shadow-gold transition-all duration-200"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              to="/my-bookings"
              className="relative p-2 text-white bg-white/10 rounded-full"
            >
              <CalendarCheck className="w-5 h-5 text-gold" />
              {activeBookingsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-navy-900 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {activeBookingsCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-gold focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-6 pt-2 bg-navy-900/95 backdrop-blur-xl border-t border-gold/20 rounded-2xl px-5 text-white animate-fade-in">
            <nav className="flex flex-col gap-3 py-3">
              {navLinks.map((link) => (
                link.path.startsWith('/#') ? (
                  <button
                    key={link.name}
                    onClick={() => {
                      handleNavClick(link.path);
                      setMobileMenuOpen(false);
                    }}
                    className="text-left py-2 text-base font-medium text-gray-200 hover:text-gold border-b border-white/5"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="py-2 text-base font-medium text-gray-200 hover:text-gold border-b border-white/5"
                  >
                    {link.name}
                  </Link>
                )
              ))}

              <Link
                to="/my-bookings"
                className="py-2 text-base font-medium text-gold flex items-center justify-between border-b border-white/5"
              >
                <span>My Bookings</span>
                <span className="bg-gold/20 text-gold text-xs px-2 py-0.5 rounded-full">
                  {bookings.length} reservations
                </span>
              </Link>
            </nav>

            {/* Auth Buttons Mobile */}
            <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-2">
              {currentUser ? (
                <div className="flex items-center justify-between bg-navy-800 p-3 rounded-xl">
                  <div className="flex items-center gap-3">
                    <img
                      src={currentUser.avatar}
                      alt={currentUser.name}
                      className="w-9 h-9 rounded-full ring-1 ring-gold"
                    />
                    <div>
                      <p className="text-sm font-semibold">{currentUser.name}</p>
                      <p className="text-xs text-gold">{currentUser.tier}</p>
                    </div>
                  </div>
                  <button
                    onClick={logout}
                    className="text-xs text-red-400 hover:text-red-300 font-medium"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to="/login"
                    className="text-center py-2.5 rounded-xl border border-gold/40 text-sm font-medium text-white hover:bg-white/5"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/signup"
                    className="text-center py-2.5 rounded-xl bg-gold text-navy-900 text-sm font-semibold hover:bg-gold-light"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
