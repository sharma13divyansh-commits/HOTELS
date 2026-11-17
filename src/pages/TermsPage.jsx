import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-offwhite pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <nav className="flex items-center gap-2 text-xs text-charcoal-muted py-3">
          <Link to="/" className="hover:text-gold-dark transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-navy-900 font-semibold">Terms & Conditions</span>
        </nav>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-luxury space-y-6 mt-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-serif text-3xl font-bold text-navy-900">
                Terms and Conditions
              </h1>
              <p className="text-xs text-charcoal-muted mt-1">Last Updated: November 2026</p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-charcoal leading-relaxed pt-4 border-t border-gray-100">
            <h2 className="font-serif text-lg font-bold text-navy-900">1. Demo Platform Disclaimer</h2>
            <p>
              YoYo Hotels ("Platform") is currently operating in a demonstration capacity. All hotel listings, prices, and room reservations generated on this platform are for demonstration, simulation, and preview purposes. No actual financial charges or genuine credit card debits are processed.
            </p>

            <h2 className="font-serif text-lg font-bold text-navy-900">2. Reservation Policies</h2>
            <p>
              When initiating a reservation, guests agree to provide accurate identification information. Standard check-in begins at 2:00 PM and check-out is by 12:00 noon local hotel time, unless an early arrival or late departure has been confirmed in writing.
            </p>

            <h2 className="font-serif text-lg font-bold text-navy-900">3. Cancellation & Refunds</h2>
            <p>
              Most reservations can be cancelled up to 48 hours prior to arrival without penalty via the My Bookings dashboard. Specific cancellation timeframes may vary for special promotional suites or peak seasonal periods.
            </p>

            <h2 className="font-serif text-lg font-bold text-navy-900">4. Best Rate Guarantee</h2>
            <p>
              Our Best Rate Guarantee applies to publicly bookable identical rates within 24 hours of confirmation. If a lower identical rate is identified, YoYo Hotels matches the lower price and applies an additional 15% discount.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
