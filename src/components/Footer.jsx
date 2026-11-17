import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Crown, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  HeartHandshake, 
  Instagram, 
  Twitter, 
  Facebook, 
  Linkedin, 
  ExternalLink 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300 pt-16 pb-12 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold shadow-md">
                <Crown className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-white">
                  YoYo <span className="text-gold">Hotels</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase text-gray-400 font-sans">
                  Stay Better. Travel Happier.
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              YoYo Hotels brings together handpicked luxury resorts, heritage palaces, and modern sky residences designed around unparalleled comfort, memorable gastronomy, and authentic hospitality.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="#social" 
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-gold hover:border-gold hover:bg-gold/10 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#social" 
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-gold hover:border-gold hover:bg-gold/10 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#social" 
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-gold hover:border-gold hover:bg-gold/10 transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#social" 
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-gold hover:border-gold hover:bg-gold/10 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Demo Notice Banner */}
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs text-gray-400">
              <span className="text-gold font-medium">Demo Experience:</span> All bookings and transactions on YoYo Hotels are simulated demonstrations for preview purposes.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-gold pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/hotels" className="text-gray-300 hover:text-gold transition-colors">
                  Explore All Hotels
                </Link>
              </li>
              <li>
                <Link to="/my-bookings" className="text-gray-300 hover:text-gold transition-colors">
                  My Bookings
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold transition-colors">
                  About YoYo Brand
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-gold transition-colors">
                  Traveler Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-gold pl-2">
              Destinations
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/hotels?destination=dubai" className="text-gray-300 hover:text-gold transition-colors">
                  Dubai Luxury Stays
                </Link>
              </li>
              <li>
                <Link to="/hotels?destination=goa" className="text-gray-300 hover:text-gold transition-colors">
                  Goa Beach Resorts
                </Link>
              </li>
              <li>
                <Link to="/hotels?destination=mumbai" className="text-gray-300 hover:text-gold transition-colors">
                  Mumbai Seafront Suites
                </Link>
              </li>
              <li>
                <Link to="/hotels?destination=delhi" className="text-gray-300 hover:text-gold transition-colors">
                  Delhi Heritage Manors
                </Link>
              </li>
              <li>
                <Link to="/hotels?destination=manali" className="text-gray-300 hover:text-gold transition-colors">
                  Manali Alpine Chalets
                </Link>
              </li>
              <li>
                <Link to="/hotels?destination=jaipur" className="text-gray-300 hover:text-gold transition-colors">
                  Jaipur Royal Palaces
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support & Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-gold pl-2">
              Concierge Desk
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>+1 (800) 969-6969 <br /><span className="text-xs text-gray-400">24/7 Global Hotline</span></span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <a href="mailto:concierge@yoyohotels.com" className="hover:text-gold transition-colors">
                  concierge@yoyohotels.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-xs text-gray-300">
                  Global HQ: One DIFC Gate Tower, Dubai, UAE
                </span>
              </li>
              <li className="flex items-center gap-2 pt-2">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span className="text-xs text-gray-300">YoYo Certified Clean & Safe</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 YoYo Hotels Hospitality Group Inc. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gold transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/contact" className="hover:text-gold transition-colors">
              FAQ & Help
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
