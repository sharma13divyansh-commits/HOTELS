import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Building } from 'lucide-react';

export default function DestinationCard({ destination }) {
  return (
    <Link
      to={`/hotels?destination=${encodeURIComponent(destination.name)}`}
      className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-luxury hover:shadow-luxury-hover transition-all duration-500 block transform hover:-translate-y-1.5"
    >
      {/* Background Image */}
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent transition-opacity duration-300" />

      {/* Top Badge */}
      <div className="absolute top-4 left-4">
        {destination.badge && (
          <span className="bg-navy-900/80 backdrop-blur-md text-gold text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-gold/30">
            {destination.badge}
          </span>
        )}
      </div>

      {/* Hotel Count Pill */}
      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-xs font-medium flex items-center gap-1.5">
        <Building className="w-3 h-3 text-gold" />
        <span>{destination.hotelCount} Stays</span>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[11px] tracking-wider uppercase text-gold font-semibold">
              {destination.country}
            </span>
            <h3 className="font-serif text-2xl font-bold tracking-wide mt-0.5 group-hover:text-gold transition-colors">
              {destination.name}
            </h3>
          </div>
          
          <div className="w-9 h-9 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy-900 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        <p className="text-xs text-gray-300 mt-2 line-clamp-2 leading-relaxed">
          {destination.description}
        </p>
      </div>

    </Link>
  );
}
