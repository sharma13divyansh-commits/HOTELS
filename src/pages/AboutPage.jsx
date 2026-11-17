import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Crown, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Compass, 
  Award, 
  CheckCircle2, 
  Users, 
  Building2, 
  Globe2 
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-offwhite pt-24 pb-20">
      
      {/* Hero Banner */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-navy-900 text-white overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80"
            alt="About YoYo"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/20 text-gold text-xs font-bold uppercase tracking-wider">
            <Crown className="w-3.5 h-3.5" />
            <span>Our Brand Story</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Stay Better. Travel Happier.
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            YoYo Hotels was born from a singular passion: to elevate every voyage into an unforgettable story through handpicked elegance, authentic warmth, and bespoke hospitality.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Brand Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-100 shadow-luxury space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-gold/15 text-gold-dark flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              Our Mission
            </h2>
            <p className="text-xs sm:text-sm text-charcoal leading-relaxed">
              To connect modern travelers with extraordinary hotel sanctuaries where thoughtful architecture, Michelin-grade culinary artistry, and intuitive service come together seamlessly. We remove the uncertainty from luxury travel with verified property standards and honest pricing.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-100 shadow-luxury space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              Our Vision
            </h2>
            <p className="text-xs sm:text-sm text-charcoal leading-relaxed">
              To be the world’s most trusted hospitality collective—celebrated not merely for our breathtaking suites, but for how our guests feel when they step through our doors: valued, revitalized, and genuinely cared for.
            </p>
          </div>

        </div>

        {/* Brand Pillars & Values */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-gold-dark uppercase tracking-wider">
              The Foundations of Excellence
            </span>
            <h2 className="font-serif text-3xl font-bold text-navy-900 mt-1">
              What Defines YoYo Hotels
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Handpicked Curation',
                icon: Award,
                desc: 'Only 1 in 20 inspected hotels meets our rigorous 150-point hospitality benchmark.'
              },
              {
                title: 'Authentic Heritage',
                icon: Building2,
                desc: 'We honor indigenous architectural traditions, cultural narratives, and regional delicacies.'
              },
              {
                title: 'Sustainable Luxury',
                icon: Globe2,
                desc: 'Committed to zero single-use plastics, energy efficiency, and supporting local communities.'
              },
              {
                title: 'Traveler-First Support',
                icon: ShieldCheck,
                desc: '24/7 dedicated personal concierge assistance from reservation to long after check-out.'
              }
            ].map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-luxury transition-all text-left">
                  <div className="w-10 h-10 rounded-xl bg-gold/15 text-navy-900 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-gold-dark" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-navy-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Impressive Metrics Bar */}
        <div className="bg-navy-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-gold/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gold">500+</span>
              <p className="text-xs text-gray-300 mt-1 uppercase tracking-wider">Bespoke Properties</p>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gold">45+</span>
              <p className="text-xs text-gray-300 mt-1 uppercase tracking-wider">Iconic Destinations</p>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gold">1.2M+</span>
              <p className="text-xs text-gray-300 mt-1 uppercase tracking-wider">Delighted Travelers</p>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gold">4.9 / 5</span>
              <p className="text-xs text-gray-300 mt-1 uppercase tracking-wider">Guest Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center bg-white rounded-3xl p-10 border border-gray-100 shadow-luxury space-y-4">
          <h2 className="font-serif text-3xl font-bold text-navy-900">
            Begin Your Next Journey With Us
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-muted max-w-xl mx-auto">
            Whether you seek a beachfront villa in Goa, a skyscraper penthouse in Dubai, or a cedar chalet in Manali, your dream stay awaits.
          </p>
          <div className="pt-2">
            <Link
              to="/hotels"
              className="inline-block px-7 py-3 rounded-full bg-gold hover:bg-gold-light text-navy-900 font-bold text-xs shadow-gold transition-all"
            >
              Explore Hotel Collection
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
