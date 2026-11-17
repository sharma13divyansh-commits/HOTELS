import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Crown, Mail, Lock, User, Phone, Eye, EyeOff, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function SignUpPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    if (!phone.trim() || phone.length < 8) {
      setErrorMessage('Please enter a valid phone number.');
      return;
    }
    if (!password || password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please re-enter.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      try {
        signup({ fullName, email, phone, password });
        navigate('/my-bookings');
      } catch (err) {
        setErrorMessage(err.message || 'Registration failed.');
        setLoading(false);
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-offwhite flex items-center justify-center pt-28 pb-20 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-100 animate-fade-in space-y-6">
        
        {/* Brand Icon & Heading */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold">
              <Crown className="w-5 h-5" />
            </div>
            <span className="font-serif text-2xl font-bold text-navy-900">
              YoYo <span className="text-gold-dark">Hotels</span>
            </span>
          </Link>
          <h2 className="font-serif text-2xl font-bold text-navy-900 pt-2">
            Join YoYo Club
          </h2>
          <p className="text-xs text-charcoal-muted">
            Enjoy 20% off your first stay and unlock VIP member benefits.
          </p>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl animate-fade-in">
            {errorMessage}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1">
              Full Name *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Natasha Romanov"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-gold focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="natasha@example.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-gold focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1">
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-gold focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1">
              Password *
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 6 characters"
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-gold focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-charcoal-muted hover:text-charcoal"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1">
              Confirm Password *
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your password"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-gold focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <input type="checkbox" required id="agree-terms" className="accent-gold rounded" />
            <label htmlFor="agree-terms" className="text-[11px] text-charcoal-muted">
              I agree to the <Link to="/terms" className="text-gold-dark hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-gold-dark hover:underline">Privacy Policy</Link>.
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gold hover:bg-gold-light text-navy-900 text-xs font-bold shadow-gold transition-all duration-200 flex items-center justify-center gap-2 mt-2"
          >
            <span>{loading ? 'Creating Account...' : 'Complete Registration'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center pt-2 border-t border-gray-100 text-xs text-charcoal-muted">
          <span>Already registered? </span>
          <Link to="/login" className="text-gold-dark font-bold hover:underline">
            Log In
          </Link>
        </div>

      </div>
    </div>
  );
}
