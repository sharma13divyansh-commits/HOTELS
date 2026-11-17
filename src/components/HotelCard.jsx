import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  MapPin, 
  Wifi, 
  Waves, 
  Sparkles, 
  Utensils, 
  Heart, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { useBooking } from '../context/BookingContext';

export default function HotelCard({ hotel }) {
  const { wishlist, toggleWishlist, openBookingModal } = useBooking();
  const isWishlisted = wishlist.includes(hotel.id);

  // Amenity icon helper
  const renderAmenityBadge = (amenity) => {
    let icon = <CheckCircle2 className="w-3 h-3 text-gold-dark" />;
    if (amenity.includes('WiFi')) icon = <Wifi className="w-3 h-3 text-gold-dark" />;
    else if (amenity.includes('Pool')) icon = <Waves className="w-3 h-3 text-gold-dark" />;
    else if (amenity.includes('Spa')) icon = <Sparkles className="w-3 h-3 text-gold-dark" />;
    else if (amenity.includes('Breakfast')) icon = <Utensils className="w-3 h-3 text-gold-dark" />;

    return (
      <span 
        key={amenity}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-offwhite text-charcoal-light text-[11px] font-medium border border-gray-100"
      >
        {icon}
        <span className="truncate max-w-[110px]">{amenity}</span>
      </span>
    );
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-hover border border-gray-100 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src={hotel.mainImage}
          alt={hotel.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          {hotel.badge && (
            <span className="bg-navy-900/90 backdrop-blur-md text-gold text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-gold/40 shadow-sm">
              {hotel.badge}
            </span>
          )}
          <div className="flex items-center gap-0.5 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full text-gold">
            {[...Array(hotel.starRating)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-gold text-gold" />
            ))}
          </div>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(hotel.id);
          }}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            isWishlisted 
              ? 'bg-red-500 text-white shadow-md' 
              : 'bg-white/80 hover:bg-white text-charcoal hover:text-red-500 backdrop-blur-sm'
          }`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
        </button>

        {/* Location chip on bottom */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-medium drop-shadow-md">
          <MapPin className="w-3.5 h-3.5 text-gold" />
          <span>{hotel.destination}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating and Reviews */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="bg-navy-900 text-gold text-xs font-bold px-2 py-0.5 rounded-md">
                ★ {hotel.guestRating}
              </span>
              <span className="text-xs font-semibold text-navy-800">
                {hotel.ratingLabel}
              </span>
            </div>
            <span className="text-xs text-charcoal-muted">
              ({hotel.reviewCount.toLocaleString()} reviews)
            </span>
          </div>

          {/* Hotel Title */}
          <Link to={`/hotels/${hotel.id}`}>
            <h3 className="font-serif text-lg font-bold text-navy-900 group-hover:text-gold-dark transition-colors line-clamp-1">
              {hotel.name}
            </h3>
          </Link>

          {/* Address */}
          <p className="text-xs text-charcoal-muted mt-1 line-clamp-1">
            {hotel.address}
          </p>

          {/* Amenities Badges */}
          <div className="flex flex-wrap gap-1.5 mt-3.5">
            {hotel.amenities.slice(0, 3).map(renderAmenityBadge)}
            {hotel.amenities.length > 3 && (
              <span className="text-[10px] text-charcoal-muted font-medium self-center pl-1">
                +{hotel.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Price & Actions */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex items-end justify-between">
          <div>
            <div className="flex items-baseline gap-1.5">
              {hotel.originalPrice && (
                <span className="text-xs text-charcoal-muted line-through">
                  ₹{hotel.originalPrice.toLocaleString()}
                </span>
              )}
              <span className="text-xs text-charcoal-muted font-medium">Starts from</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold font-serif text-navy-900">
                ₹{hotel.pricePerNight.toLocaleString()}
              </span>
              <span className="text-[11px] text-charcoal-muted">/ night</span>
            </div>
            <span className="text-[10px] text-emerald-600 font-medium block">
              + Free cancellation
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Link
              to={`/hotels/${hotel.id}`}
              className="px-3 py-2 rounded-xl border border-navy-900/20 text-navy-900 hover:bg-navy-900 hover:text-white text-xs font-semibold transition-all duration-200"
            >
              View Details
            </Link>
            
            <button
              onClick={() => openBookingModal(hotel)}
              className="px-3.5 py-2 rounded-xl bg-gold hover:bg-gold-light text-navy-900 text-xs font-bold shadow-sm transition-all duration-200 hover:shadow-gold flex items-center gap-1"
            >
              <span>Book Now</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
