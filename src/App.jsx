import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { BookingProvider } from './context/BookingContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

// Pages
import HomePage from './pages/HomePage';
import ExploreHotelsPage from './pages/ExploreHotelsPage';
import HotelDetailsPage from './pages/HotelDetailsPage';
import MyBookingsPage from './pages/MyBookingsPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';

// Scroll to top automatically on route changes
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <BookingProvider>
          <div className="flex flex-col min-h-screen bg-offwhite text-charcoal font-sans antialiased selection:bg-gold selection:text-navy-900">
            <ScrollToTop />
            
            {/* Sticky Navigation Bar */}
            <Navbar />

            {/* Main Application Routes */}
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/hotels" element={<ExploreHotelsPage />} />
                <Route path="/hotels/:id" element={<HotelDetailsPage />} />
                <Route path="/my-bookings" element={<MyBookingsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                {/* Fallback route */}
                <Route path="*" element={<HomePage />} />
              </Routes>
            </div>

            {/* Global 7-Step Hotel Booking Reservation Modal */}
            <BookingModal />

            {/* Global Footer */}
            <Footer />
          </div>
        </BookingProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
