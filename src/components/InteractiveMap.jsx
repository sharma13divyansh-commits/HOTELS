import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Layers, Plus, Minus, ExternalLink } from 'lucide-react';

export default function InteractiveMap({ hotel }) {
  const [zoomLevel, setZoomLevel] = useState(15);
  const [viewMode, setViewMode] = useState('luxury'); // 'luxury' or 'satellite'
  const [activePoi, setActivePoi] = useState(null);

  const landmarks = [
    { id: 1, name: hotel.name, type: 'hotel', x: '50%', y: '48%', desc: 'Your Luxury Stay' },
    { id: 2, name: 'Private Beach / Waterfront', type: 'beach', x: '35%', y: '65%', desc: '3 mins walking distance' },
    { id: 3, name: 'International Airport Hub', type: 'airport', x: '78%', y: '25%', desc: '25 mins direct chauffeur' },
    { id: 4, name: 'Historic Heritage Plaza', type: 'shopping', x: '65%', y: '72%', desc: '10 mins drive' },
  ];

  return (
    <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-luxury bg-[#0e1a2b] text-white">
      {/* Map Graphic Canvas / Custom Styled Interactive SVG Map */}
      <div 
        className={`w-full h-80 relative transition-all duration-500 overflow-hidden ${
          viewMode === 'satellite' ? 'bg-[#0b1626]' : 'bg-[#142B45]'
        }`}
        style={{
          backgroundImage: viewMode === 'satellite' 
            ? 'radial-gradient(#203859 1px, transparent 1px), radial-gradient(#1a2e49 1px, #0b1626 1px)'
            : 'radial-gradient(#2a476f 1px, transparent 1px), radial-gradient(#1d3b5e 1px, #142B45 1px)',
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 15px 15px'
        }}
      >
        {/* Decorative Roads / Topography Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-50 150 Q 200 80, 450 180 T 950 140" fill="none" stroke="#D6AD60" strokeWidth="2.5" strokeDasharray="6 4" />
          <path d="M120 -50 Q 280 200, 320 400" fill="none" stroke="#335985" strokeWidth="3" />
          <path d="M300 220 C 500 240, 600 120, 850 320" fill="none" stroke="#335985" strokeWidth="2" />
          <circle cx="50%" cy="48%" r="45" fill="none" stroke="#D6AD60" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
        </svg>

        {/* Landmarks Markers */}
        {landmarks.map((poi) => (
          <div
            key={poi.id}
            style={{ left: poi.x, top: poi.y }}
            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
            onClick={() => setActivePoi(poi)}
          >
            {poi.type === 'hotel' ? (
              <div className="relative flex items-center justify-center">
                <span className="absolute w-12 h-12 rounded-full bg-gold/20 animate-ping" />
                <div className="w-10 h-10 rounded-full bg-gold text-navy-900 flex items-center justify-center shadow-lg border-2 border-white font-bold">
                  <MapPin className="w-5 h-5 fill-navy-900 text-navy-900" />
                </div>
                <div className="absolute top-12 whitespace-nowrap bg-navy-900 text-gold px-3 py-1 rounded-full text-xs font-bold border border-gold/40 shadow-xl">
                  {poi.name}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-navy-800/90 border border-gold/50 text-gold flex items-center justify-center text-[10px] group-hover:scale-125 transition-transform shadow-md">
                  •
                </div>
                <span className="text-[10px] bg-black/70 px-2 py-0.5 rounded text-gray-200 mt-1 whitespace-nowrap hidden group-hover:block">
                  {poi.name}
                </span>
              </div>
            )}
          </div>
        ))}

        {/* Active POI Card */}
        {activePoi && (
          <div className="absolute bottom-4 left-4 right-4 md:right-auto md:w-80 bg-white text-charcoal p-3.5 rounded-xl shadow-2xl border border-gold/30 z-20 animate-fade-in">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-bold text-navy-900">{activePoi.name}</p>
                <p className="text-[11px] text-charcoal-muted mt-0.5">{activePoi.desc}</p>
              </div>
              <button 
                onClick={() => setActivePoi(null)}
                className="text-xs text-gray-400 hover:text-charcoal px-1"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Map Control Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
          <button
            onClick={() => setViewMode(viewMode === 'luxury' ? 'satellite' : 'luxury')}
            className="p-2 bg-navy-900/90 hover:bg-navy-800 text-gold rounded-lg border border-gold/30 text-xs flex items-center gap-1 shadow-md"
            title="Toggle View Mode"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline capitalize">{viewMode}</span>
          </button>

          <div className="bg-navy-900/90 rounded-lg border border-gold/30 overflow-hidden shadow-md">
            <button
              onClick={() => setZoomLevel(prev => Math.min(18, prev + 1))}
              className="p-2 hover:bg-navy-800 text-white w-full flex items-center justify-center border-b border-white/10"
              title="Zoom In"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoomLevel(prev => Math.max(10, prev - 1))}
              className="p-2 hover:bg-navy-800 text-white w-full flex items-center justify-center"
              title="Zoom Out"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Coordinates / Address bar */}
        <div className="absolute top-4 left-4 bg-navy-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gold/30 text-xs flex items-center gap-2 z-20">
          <Navigation className="w-3.5 h-3.5 text-gold" />
          <span className="font-medium text-gray-200 truncate max-w-[200px] sm:max-w-xs">
            {hotel.address}
          </span>
        </div>
      </div>

      {/* Map Footer Bar */}
      <div className="p-3 bg-navy-900 border-t border-gold/20 flex items-center justify-between text-xs text-gray-300">
        <span className="flex items-center gap-1.5">
          <Compass className="w-4 h-4 text-gold" />
          <span>Interactive Location Guide • {hotel.destination}</span>
        </span>
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(hotel.name + ' ' + hotel.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-gold-light font-medium flex items-center gap-1"
        >
          <span>Open in Google Maps</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
