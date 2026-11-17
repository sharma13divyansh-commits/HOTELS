import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Clock, 
  Award, 
  Sparkles, 
  Star, 
  ArrowRight, 
  Tag, 
  Percent, 
  Compass, 
  CheckCircle2, 
  Send,
  Building,
  Quote
} from 'lucide-react';
import SearchWidget from '../components/SearchWidget';
import HotelCard from '../components/HotelCard';
import DestinationCard from '../components/DestinationCard';
import { destinationsData } from '../data/destinationsData';
import { hotelsData } from '../data/hotelsData';
import { offersData } from '../data/offersData';
import { testimonialsData } from '../data/reviewsData';

export default function HomePage() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribedMessage, setSubscribedMessage] = useState(false);
  const [copiedCode, setCopiedCode] = useState(null);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim() && /\S+@\S+\.\S+/.test(newsletterEmail)) {
      setSubscribedMessage(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribedMessage(false), 5000);
    }
  };

  const copyPromoCode = (code) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  return (
    <div className="min-h-screen bg-offwhite">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Full-width Luxury Background Image with cinematic overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=90"
            alt="Luxury Hotel Resort"
            className="w-full h-full object-cover scale-105 animate-pulse duration-10000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/60 to-navy-900/95" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 mt-8">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/40 backdrop-blur-md text-gold text-xs font-semibold tracking-wider uppercase animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Exclusively Curated Luxury Stays</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.15] drop-shadow-lg">
            Discover Your <br />
            <span className="gold-text-gradient font-serif italic">Perfect Stay</span>
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl mx-auto text-gray-200 text-base sm:text-lg md:text-xl font-light leading-relaxed">
            Experience exceptional comfort, unforgettable destinations, and stays designed around you.
          </p>

          {/* Search & Booking Form Component */}
          <div className="pt-4">
            <SearchWidget />
          </div>

          {/* Trust stats below search */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-gray-300 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold" />
              <span>Over 500+ Handpicked Luxury Properties</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold" />
              <span>Best Rate Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold" />
              <span>Free Cancellation on Most Rooms</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. FEATURED DESTINATIONS */}
      <section id="destinations" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-gold-dark font-semibold text-xs uppercase tracking-widest mb-1.5">
              <Compass className="w-4 h-4" />
              <span>Iconic Escapes</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
              Featured Destinations
            </h2>
            <p className="text-sm text-charcoal-muted mt-2 max-w-xl">
              From sun-kissed beaches in Goa to glittering skyscrapers in Dubai and regal forts in Jaipur.
            </p>
          </div>

          <Link
            to="/hotels"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold text-navy-900 hover:text-gold-dark uppercase tracking-wider group"
          >
            <span>Explore All 45+ Cities</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinationsData.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>

      {/* 3. FEATURED HOTELS */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 text-gold-dark font-semibold text-xs uppercase tracking-widest mb-1.5">
                <Award className="w-4 h-4" />
                <span>Handpicked Collection</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
                Featured Luxury Hotels
              </h2>
              <p className="text-sm text-charcoal-muted mt-2 max-w-xl">
                Explore our premier 5-star properties, beachfront sanctuaries, and royal heritage manors.
              </p>
            </div>

            <Link
              to="/hotels"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold text-navy-900 hover:text-gold-dark uppercase tracking-wider group"
            >
              <span>View All Stays</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Hotels Grid (At least 8 sample hotels with realistic demo information) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotelsData.slice(0, 8).map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE YOYO HOTELS? */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>The YoYo Distinction</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
            Why Choose YoYo Hotels?
          </h2>
          <p className="text-sm text-charcoal-muted mt-3">
            Elevating every moment of your journey with industry-leading standards, guaranteed best rates, and unmatched peace of mind.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Best Price Guarantee */}
          <div className="p-7 rounded-2xl bg-white border border-gray-100 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 text-left group">
            <div className="w-14 h-14 rounded-2xl bg-gold/15 text-navy-900 flex items-center justify-center mb-5 group-hover:bg-gold transition-colors">
              <Tag className="w-6 h-6 text-gold-dark group-hover:text-navy-900 transition-colors" />
            </div>
            <h3 className="font-serif text-lg font-bold text-navy-900 mb-2">
              1. Best Price Guarantee
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Find a lower price elsewhere within 24 hours of booking? We will match it and give you an extra 15% discount.
            </p>
          </div>

          {/* Card 2: Secure Booking */}
          <div className="p-7 rounded-2xl bg-white border border-gray-100 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 text-left group">
            <div className="w-14 h-14 rounded-2xl bg-gold/15 text-navy-900 flex items-center justify-center mb-5 group-hover:bg-gold transition-colors">
              <ShieldCheck className="w-6 h-6 text-gold-dark group-hover:text-navy-900 transition-colors" />
            </div>
            <h3 className="font-serif text-lg font-bold text-navy-900 mb-2">
              2. Secure Booking
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              State-of-the-art encrypted reservation systems guarantee that your stay details and booking data remain private.
            </p>
          </div>

          {/* Card 3: 24/7 Customer Support */}
          <div className="p-7 rounded-2xl bg-white border border-gray-100 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 text-left group">
            <div className="w-14 h-14 rounded-2xl bg-gold/15 text-navy-900 flex items-center justify-center mb-5 group-hover:bg-gold transition-colors">
              <Clock className="w-6 h-6 text-gold-dark group-hover:text-navy-900 transition-colors" />
            </div>
            <h3 className="font-serif text-lg font-bold text-navy-900 mb-2">
              3. 24/7 Customer Support
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Our dedicated global concierge desk is available around the clock to handle special requests, rebookings, and travel advice.
            </p>
          </div>

          {/* Card 4: Premium Hotel Experiences */}
          <div className="p-7 rounded-2xl bg-white border border-gray-100 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 text-left group">
            <div className="w-14 h-14 rounded-2xl bg-gold/15 text-navy-900 flex items-center justify-center mb-5 group-hover:bg-gold transition-colors">
              <Sparkles className="w-6 h-6 text-gold-dark group-hover:text-navy-900 transition-colors" />
            </div>
            <h3 className="font-serif text-lg font-bold text-navy-900 mb-2">
              4. Premium Experiences
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Every property is audited against 150+ luxury hospitality benchmarks for cleanliness, gastronomy, and comfort.
            </p>
          </div>

        </div>
      </section>

      {/* 5. SPECIAL OFFERS */}
      <section id="offers" className="py-20 bg-navy-900 text-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 text-gold font-semibold text-xs uppercase tracking-widest mb-1.5">
                <Percent className="w-4 h-4" />
                <span>Exclusive Promotions</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Special Offers & Limited Deals
              </h2>
              <p className="text-sm text-gray-300 mt-2 max-w-xl">
                Take advantage of curated vacation packages, first-booking welcome privileges, and weekend escape credits.
              </p>
            </div>

            <Link
              to="/hotels"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold text-gold hover:text-gold-light uppercase tracking-wider group"
            >
              <span>Explore All Offers</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Offers Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offersData.map((offer) => (
              <div
                key={offer.id}
                className="bg-navy-800/90 rounded-2xl overflow-hidden border border-gold/30 hover:border-gold shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />
                  
                  <span className="absolute top-3 left-3 bg-gold text-navy-900 font-bold text-xs px-3 py-1 rounded-full shadow-md">
                    {offer.discount}
                  </span>

                  <span className="absolute bottom-3 left-3 text-xs text-gold font-medium">
                    {offer.validTill}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold transition-colors">
                      {offer.title}
                    </h3>
                    <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                      {offer.description}
                    </p>
                  </div>

                  {/* Promo code box & Explore button */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-gray-400">Code:</span>
                      <button
                        onClick={() => copyPromoCode(offer.code)}
                        className="font-mono text-xs font-bold bg-white/10 hover:bg-white/20 text-gold px-2.5 py-1 rounded border border-gold/30 transition-all"
                        title="Click to copy code"
                      >
                        {copiedCode === offer.code ? 'Copied! ✓' : offer.code}
                      </button>
                    </div>

                    <Link
                      to="/hotels"
                      className="text-xs font-semibold text-white hover:text-gold flex items-center gap-1 group-hover:translate-x-1 transition-all"
                    >
                      <span>Explore Deals</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CUSTOMER TESTIMONIALS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-4 h-4 fill-gold text-gold" />
            <span>Verified Guest Experiences</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
            What Our Travelers Say
          </h2>
          <p className="text-sm text-charcoal-muted mt-3">
            Real stories from discerning guests who chose YoYo Hotels for their memorable vacations and getaways.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-white rounded-2xl border border-gray-100 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon */}
                <Quote className="w-7 h-7 text-gold/40 mb-3" />

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xs text-charcoal leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Guest Profile */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-gold/40"
                />
                <div>
                  <h4 className="font-bold text-navy-900 text-xs">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-charcoal-muted">
                    {item.location}
                  </p>
                  <p className="text-[10px] text-gold-dark font-medium">
                    Stayed at {item.hotel}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 7. NEWSLETTER SUBSCRIPTION */}
      <section className="py-16 bg-navy-800 text-white border-t border-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center mx-auto text-gold">
            <Send className="w-5 h-5" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Get Exclusive Hotel Deals
          </h2>

          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Subscribe to receive member-only private sales, secret luxury suite promotions, and destination inspiration directly to your inbox.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3.5 rounded-xl sm:rounded-full bg-navy-900/90 text-white placeholder-gray-400 border border-white/20 focus:border-gold focus:outline-none text-sm"
            />
            <button
              type="submit"
              className="px-7 py-3.5 rounded-xl sm:rounded-full bg-gold hover:bg-gold-light text-navy-900 font-bold text-sm shadow-gold transition-all duration-200"
            >
              Subscribe
            </button>
          </form>

          {subscribedMessage && (
            <div className="p-3 bg-emerald-900/60 border border-emerald-500 text-emerald-200 text-xs rounded-xl max-w-md mx-auto animate-fade-in">
              ✓ Welcome aboard! You have been subscribed to YoYo Hotels VIP Deals. Check your inbox soon!
            </div>
          )}

          <p className="text-[11px] text-gray-400">
            We respect your privacy. Unsubscribe at any time with one click.
          </p>
        </div>
      </section>

    </div>
  );
}
