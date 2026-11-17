import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Crown, Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.from || '/my-bookings';

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!password.trim() || password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      try {
        login(email, password);
        navigate(redirectPath);
      } catch (err) {
        setErrorMessage(err.message || 'Login failed.');
        setLoading(false);
      }
    }, 400);
  };

  const handleQuickDemoLogin = () => {
    login('guest@yoyohotels.com', 'demo123456');
    navigate(redirectPath);
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
            Welcome Back
          </h2>
          <p className="text-xs text-charcoal-muted">
            Access your bookings, loyalty rewards, and saved properties.
          </p>
        </div>

        {/* Demo Fast Login Banner */}
        <div className="p-3.5 bg-gold-subtle/70 rounded-2xl border border-gold/30 text-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-navy-900">Demo Account Available</span>
            <span className="text-[10px] bg-gold/20 text-navy-900 font-semibold px-2 py-0.5 rounded">Quick Access</span>
          </div>
          <p className="text-[11px] text-charcoal-muted">
            Log in instantly with preloaded reservations and Gold Elite status:
          </p>
          <button
            type="button"
            onClick={handleQuickDemoLogin}
            className="w-full py-2 bg-navy-900 hover:bg-navy-800 text-gold text-xs font-bold rounded-xl shadow-sm transition-all"
          >
            One-Click Demo Traveler Login
          </button>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl animate-fade-in">
            {errorMessage}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="guest@example.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-gold focus:outline-none"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-xs font-semibold text-charcoal">
                Password
              </label>
              <span className="text-[11px] text-gold-dark hover:underline cursor-pointer">
                Forgot password?
              </span>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
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

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gold hover:bg-gold-light text-navy-900 text-xs font-bold shadow-gold transition-all duration-200 flex items-center justify-center gap-2 mt-2"
          >
            <span>{loading ? 'Signing in...' : 'Sign In to YoYo Hotels'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center pt-2 border-t border-gray-100 text-xs text-charcoal-muted">
          <span>Don't have an account? </span>
          <Link to="/signup" className="text-gold-dark font-bold hover:underline">
            Create an Account
          </Link>
        </div>

      </div>
    </div>
  );
}
