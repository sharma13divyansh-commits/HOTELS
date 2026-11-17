import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Star, 
  MapPin, 
  Share2, 
  Heart, 
  ShieldCheck, 
  Wifi, 
  Waves, 
  Sparkles, 
  Utensils, 
  Car, 
  Clock, 
  Ban, 
  Calendar, 
  Users, 
  CheckCircle2, 
  ChevronRight, 
  ExternalLink, 
  Info,
  Maximize2,
  X
} from 'lucide-react';
import { hotelsData } from '../data/hotelsData';
import { useBooking } from '../context/BookingContext';
import InteractiveMap from '../components/InteractiveMap';

export default function HotelDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { wishlist, toggleWishlist, openBookingModal } = useBooking();

  const hotel = hotelsData.find(h => h.id === id) || hotelsData[0];
  const isWishlisted = wishlist.includes(hotel.id);

  // Lightbox modal state
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(hotel.roomTypes[0]);
  const [copiedShare, setCopiedShare] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-offwhite pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-charcoal-muted py-3">
          <Link to="/" className="hover:text-gold-dark transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link to="/hotels" className="hover:text-gold-dark transition-colors">Explore Hotels</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link to={`/hotels?destination=${hotel.destination}`} className="hover:text-gold-dark transition-colors">{hotel.destination}</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-navy-900 font-semibold truncate max-w-xs">{hotel.name}</span>
        </nav>

        {/* Hotel Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 py-4 mb-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {hotel.badge && (
                <span className="bg-navy-900 text-gold text-xs font-bold px-3 py-0.5 rounded-full border border-gold/40">
                  {hotel.badge}
                </span>
              )}
              <div className="flex items-center gap-0.5 text-gold">
                {[...Array(hotel.starRating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-xs font-semibold text-charcoal-muted">• {hotel.starRating}-Star Luxury Resort</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900">
              {hotel.name}
            </h1>

            <p className="flex items-center gap-2 text-xs sm:text-sm text-charcoal-muted mt-2">
              <MapPin className="w-4 h-4 text-gold-dark shrink-0" />
              <span>{hotel.address}</span>
            </p>
          </div>

          {/* Share & Wishlist action buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-gray-200 text-xs font-semibold text-charcoal hover:bg-gray-50 shadow-sm transition-all"
            >
              <Share2 className="w-3.5 h-3.5 text-gold-dark" />
              <span>{copiedShare ? 'Link Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={() => toggleWishlist(hotel.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl border text-xs font-semibold shadow-sm transition-all ${
                isWishlisted
                  ? 'bg-red-50 text-red-600 border-red-200'
                  : 'bg-white border-gray-200 text-charcoal hover:bg-gray-50'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-red-600 text-red-600' : 'text-gray-500'}`} />
              <span>{isWishlisted ? 'Saved' : 'Save'}</span>
            </button>
          </div>
        </div>

        {/* 1. LARGE HOTEL IMAGE GALLERY */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-12">
          {/* Main Hero Photo (2 cols on md) */}
          <div 
            onClick={() => { setActiveImageIndex(0); setLightboxOpen(true); }}
            className="md:col-span-2 md:row-span-2 relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer group shadow-luxury"
          >
            <img
              src={hotel.gallery[0] || hotel.mainImage}
              alt={hotel.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <div className="absolute bottom-4 left-4 bg-navy-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Maximize2 className="w-3 h-3 text-gold" />
              <span>Click to Expand Photos ({hotel.gallery.length} Views)</span>
            </div>
          </div>

          {/* Thumbnail Grid */}
          {hotel.gallery.slice(1, 5).map((imgUrl, idx) => (
            <div
              key={idx}
              onClick={() => { setActiveImageIndex(idx + 1); setLightboxOpen(true); }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group shadow-sm bg-gray-100"
            >
              <img
                src={imgUrl}
                alt={`${hotel.name} view ${idx + 2}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>

        {/* Main Content & Sticky Booking Box Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* LEFT 2 COLUMNS: Details, Rooms, Amenities, Policies, Map, Reviews */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview / Description */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-luxury space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="bg-navy-900 text-gold font-bold text-sm px-3 py-1 rounded-xl">
                    ★ {hotel.guestRating}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 text-sm">{hotel.ratingLabel} Hospitality</h3>
                    <p className="text-xs text-charcoal-muted">Based on {hotel.reviewCount.toLocaleString()} verified guests</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs text-emerald-600 font-semibold bg-emerald-50 px-3 py-1 rounded-full">
                  <ShieldCheck className="w-4 h-4" />
                  <span>YoYo Certified</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-navy-900">
                  About the Property
                </h3>
                <p className="text-sm text-charcoal leading-relaxed">
                  {hotel.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-3">
                  Property Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {hotel.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-charcoal">
                      <CheckCircle2 className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. AVAILABLE ROOM TYPES */}
            <div id="rooms" className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900">
                    Available Room Types
                  </h3>
                  <p className="text-xs text-charcoal-muted mt-1">
                    Select a luxury suite to customize your reservation.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {hotel.roomTypes.map((room) => {
                  const isChosen = selectedRoom.id === room.id;
                  return (
                    <div
                      key={room.id}
                      className={`bg-white rounded-3xl overflow-hidden border-2 transition-all duration-300 shadow-luxury flex flex-col md:flex-row ${
                        isChosen ? 'border-gold ring-2 ring-gold/20' : 'border-gray-100 hover:border-gray-300'
                      }`}
                    >
                      {/* Room Image */}
                      <div className="md:w-5/12 relative aspect-[16/10] md:aspect-auto">
                        <img
                          src={room.image}
                          alt={room.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-navy-900/80 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                          {room.size}
                        </div>
                      </div>

                      {/* Room Content */}
                      <div className="p-6 md:w-7/12 flex flex-col justify-between space-y-4">
                        <div>
                          <div className="flex items-center justify-between">
                            <h4 className="font-serif text-xl font-bold text-navy-900">
                              {room.name}
                            </h4>
                            {isChosen && (
                              <span className="bg-gold text-navy-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                Selected Room
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-4 text-xs text-charcoal-muted mt-2">
                            <span>Bed: <strong>{room.bed}</strong></span>
                            <span>Capacity: <strong>{room.capacity}</strong></span>
                          </div>

                          {/* Features */}
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {room.features.map((feat, idx) => (
                              <span
                                key={idx}
                                className="text-[11px] bg-offwhite px-2.5 py-1 rounded-md border border-gray-100 text-charcoal font-medium"
                              >
                                ✓ {feat}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Room Price & Reserve Action */}
                        <div className="pt-4 border-t border-gray-100 flex items-end justify-between">
                          <div>
                            <span className="text-[11px] text-charcoal-muted">Starting at</span>
                            <div className="flex items-baseline gap-1">
                              <span className="text-2xl font-bold font-serif text-navy-900">
                                ₹{room.price.toLocaleString()}
                              </span>
                              <span className="text-xs text-charcoal-muted">/ night</span>
                            </div>
                            <span className="text-[10px] text-emerald-600 font-medium block">
                              Free cancellation • No prepay required
                            </span>
                          </div>

                          <button
                            onClick={() => {
                              setSelectedRoom(room);
                              openBookingModal(hotel, room);
                            }}
                            className="px-5 py-2.5 rounded-xl bg-gold hover:bg-gold-light text-navy-900 text-xs font-bold shadow-gold transition-all"
                          >
                            Reserve This Room
                          </button>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. AMENITIES & FACILITIES */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-luxury space-y-6">
              <h3 className="font-serif text-2xl font-bold text-navy-900">
                Amenities & Facilities
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {hotel.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-offwhite border border-gray-100 text-xs font-medium text-navy-900">
                    <CheckCircle2 className="w-4 h-4 text-gold-dark shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. POLICIES */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-luxury space-y-6">
              <h3 className="font-serif text-2xl font-bold text-navy-900">
                Stay Policies & Guidelines
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-charcoal">
                <div className="p-4 rounded-2xl bg-offwhite border border-gray-100 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-navy-900 text-sm">
                    <Clock className="w-4 h-4 text-gold-dark" />
                    <span>Check-in & Check-out</span>
                  </div>
                  <p><strong>Check-in:</strong> {hotel.policies.checkIn}</p>
                  <p><strong>Check-out:</strong> {hotel.policies.checkOut}</p>
                </div>

                <div className="p-4 rounded-2xl bg-offwhite border border-gray-100 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-navy-900 text-sm">
                    <Ban className="w-4 h-4 text-gold-dark" />
                    <span>Cancellation Policy</span>
                  </div>
                  <p>{hotel.policies.cancellation}</p>
                </div>

                <div className="p-4 rounded-2xl bg-offwhite border border-gray-100 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-navy-900 text-sm">
                    <Users className="w-4 h-4 text-gold-dark" />
                    <span>Children & Extra Beds</span>
                  </div>
                  <p>{hotel.policies.children}</p>
                </div>

                <div className="p-4 rounded-2xl bg-offwhite border border-gray-100 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-navy-900 text-sm">
                    <Sparkles className="w-4 h-4 text-gold-dark" />
                    <span>Pet Guidelines</span>
                  </div>
                  <p>{hotel.policies.pets}</p>
                </div>
              </div>
            </div>

            {/* 5. INTERACTIVE LOCATION MAP */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-navy-900">
                Location & Surroundings
              </h3>
              <p className="text-xs text-charcoal-muted">
                Landmark: {hotel.locationMap.landmark}
              </p>
              <InteractiveMap hotel={hotel} />
            </div>

            {/* 6. CUSTOMER REVIEWS */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-luxury space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-navy-900">
                    Guest Reviews & Ratings
                  </h3>
                  <p className="text-xs text-charcoal-muted mt-0.5">
                    100% verified stays from YoYo Travelers
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-serif font-bold text-navy-900">
                    {hotel.guestRating}
                  </span>
                  <span className="text-xs text-charcoal-muted block">out of 5.0</span>
                </div>
              </div>

              {/* Reviews List */}
              <div className="space-y-4">
                {hotel.reviews.map((rev) => (
                  <div key={rev.id} className="p-5 rounded-2xl bg-offwhite border border-gray-100 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={rev.avatar}
                          alt={rev.author}
                          className="w-10 h-10 rounded-full object-cover ring-2 ring-gold/40"
                        />
                        <div>
                          <p className="text-xs font-bold text-navy-900">{rev.author}</p>
                          <p className="text-[10px] text-charcoal-muted">{rev.country} • {rev.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-0.5 text-gold">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-charcoal leading-relaxed italic">
                      "{rev.comment}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT 1 COLUMN: Sticky Reservation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-7 border border-gold/30 shadow-2xl sticky top-28 space-y-6">
              
              {/* Price Callout */}
              <div className="pb-4 border-b border-gray-100">
                <div className="flex items-baseline gap-2">
                  {hotel.originalPrice && (
                    <span className="text-xs text-charcoal-muted line-through">
                      ₹{hotel.originalPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="text-xs text-gold-dark font-bold bg-gold/15 px-2 py-0.5 rounded">
                    Special Member Rate
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-bold font-serif text-navy-900">
                    ₹{selectedRoom ? selectedRoom.price.toLocaleString() : hotel.pricePerNight.toLocaleString()}
                  </span>
                  <span className="text-xs text-charcoal-muted">/ night</span>
                </div>
                <p className="text-[11px] text-charcoal-muted mt-1">
                  Selected: <strong>{selectedRoom.name}</strong>
                </p>
              </div>

              {/* Quick Perks List */}
              <div className="space-y-2.5 text-xs text-charcoal">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Free Cancellation up to 48 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Complimentary Gourmet Breakfast</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Pay nothing today (Demo Reservation)</span>
                </div>
              </div>

              {/* Big Prominent Action Button */}
              <button
                onClick={() => openBookingModal(hotel, selectedRoom)}
                className="w-full py-4 rounded-2xl bg-gold hover:bg-gold-light text-navy-900 text-sm font-bold shadow-gold transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Reserve Your Room</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="text-center">
                <span className="text-[11px] text-charcoal-muted block">
                  You won't be charged yet. Instant confirmation.
                </span>
              </div>

              {/* Concierge Support Box */}
              <div className="p-4 rounded-2xl bg-navy-900 text-white space-y-2 text-xs">
                <p className="font-serif font-bold text-gold text-sm">Need VIP Concierge Help?</p>
                <p className="text-gray-300 text-[11px]">
                  Speak directly with our reservation advisors to plan customized itinerary or airport chauffeur.
                </p>
                <p className="text-gold font-bold text-xs pt-1">+1 (800) 969-6969 (Toll Free)</p>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* LIGHTBOX PHOTO MODAL */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-8 animate-fade-in">
          <div className="flex items-center justify-between text-white">
            <span className="text-xs tracking-wider uppercase text-gold font-semibold">
              Photo {activeImageIndex + 1} of {hotel.gallery.length} • {hotel.name}
            </span>
            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="max-w-5xl max-h-[75vh] mx-auto my-auto flex items-center justify-center">
            <img
              src={hotel.gallery[activeImageIndex] || hotel.mainImage}
              alt="Gallery View"
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl"
            />
          </div>

          <div className="flex items-center justify-center gap-2 overflow-x-auto py-2">
            {hotel.gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="thumb"
                onClick={() => setActiveImageIndex(idx)}
                className={`w-16 h-12 object-cover rounded-lg cursor-pointer border-2 transition-all ${
                  activeImageIndex === idx ? 'border-gold scale-105' : 'border-transparent opacity-60'
                }`}
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
