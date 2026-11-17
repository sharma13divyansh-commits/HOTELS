import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, ChevronRight } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-offwhite pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <nav className="flex items-center gap-2 text-xs text-charcoal-muted py-3">
          <Link to="/" className="hover:text-gold-dark transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-navy-900 font-semibold">Privacy Policy</span>
        </nav>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-luxury space-y-6 mt-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-serif text-3xl font-bold text-navy-900">
                Privacy Policy
              </h1>
              <p className="text-xs text-charcoal-muted mt-1">Effective Date: November 2026</p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-charcoal leading-relaxed pt-4 border-t border-gray-100">
            <h2 className="font-serif text-lg font-bold text-navy-900">1. Commitment to Privacy</h2>
            <p>
              At YoYo Hotels, we respect your privacy and are committed to safeguarding personal information collected when you browse our website, create a traveler account, or make hotel reservations.
            </p>

            <h2 className="font-serif text-lg font-bold text-navy-900">2. Information We Collect</h2>
            <p>
              We collect details you voluntarily provide including name, contact email, phone number, stay preferences, and special dietary or room requests necessary to confirm your hospitality booking.
            </p>

            <h2 className="font-serif text-lg font-bold text-navy-900">3. Data Security & Storage</h2>
            <p>
              All customer reservation records and saved wishlist items are stored securely and encrypted in transit using industry-standard TLS encryption protocols.
            </p>

            <h2 className="font-serif text-lg font-bold text-navy-900">4. Contact Privacy Officer</h2>
            <p>
              If you have any questions regarding your data or wish to request data erasure, please reach out to our Data Privacy Officer at <a href="mailto:privacy@yoyohotels.com" className="text-gold-dark font-medium underline">privacy@yoyohotels.com</a>.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
