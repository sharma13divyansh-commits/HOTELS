import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Filter, 
  SlidersHorizontal, 
  RotateCcw, 
  Search, 
  MapPin, 
  Star, 
  Check, 
  X, 
  Sparkles,
  Building,
  ArrowUpDown
} from 'lucide-react';
import HotelCard from '../components/HotelCard';
import { hotelsData } from '../data/hotelsData';

export default function ExploreHotelsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read URL query params
  const initialDestination = searchParams.get('destination') || '';

  // Local filter states
  const [selectedDestination, setSelectedDestination] = useState(initialDestination);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [maxPrice, setMaxPrice] = useState(35000);
  const [selectedStars, setSelectedStars] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [sortBy, setSortBy] = useState('recommended'); // 'recommended', 'price-asc', 'price-desc', 'rating-desc'
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync if URL query param changes
  useEffect(() => {
    const dest = searchParams.get('destination') || '';
    setSelectedDestination(dest);
  }, [searchParams]);

  const allDestinations = ['Dubai', 'Goa', 'Mumbai', 'Delhi', 'Manali', 'Jaipur'];

  const availableAmenities = [
    'Free High-Speed WiFi',
    'Infinity Swimming Pool',
    'Luxury Wellness Spa',
    'Ocean View Balcony',
    'Gourmet Breakfast Included',
    '24/7 Fitness Center',
    'Airport Chauffeur',
    'Pet Friendly',
    'Valet Parking'
  ];

  const handleStarToggle = (star) => {
    setSelectedStars(prev => 
      prev.includes(star) ? prev.filter(s => s !== star) : [...prev, star]
    );
  };

  const handleAmenityToggle = (amenity) => {
    setSelectedAmenities(prev =>
      prev.includes(amenity) ? prev.filter(a => a !== amenity) : [...prev, amenity]
    );
  };

  const resetFilters = () => {
    setSelectedDestination('');
    setSearchKeyword('');
    setMaxPrice(35000);
    setSelectedStars([]);
    setSelectedAmenities([]);
    setSortBy('recommended');
    setSearchParams({});
  };

  // Filter logic
  const filteredHotels = useMemo(() => {
    return hotelsData.filter(hotel => {
      // 1. Destination filter
      if (selectedDestination && hotel.destination.toLowerCase() !== selectedDestination.toLowerCase()) {
        return false;
      }

      // 2. Keyword search
      if (searchKeyword.trim()) {
        const q = searchKeyword.toLowerCase();
        const matchName = hotel.name.toLowerCase().includes(q);
        const matchDest = hotel.destination.toLowerCase().includes(q);
        const matchAddr = hotel.address.toLowerCase().includes(q);
        if (!matchName && !matchDest && !matchAddr) return false;
      }

      // 3. Price filter
      if (hotel.pricePerNight > maxPrice) {
        return false;
      }

      // 4. Star rating filter
      if (selectedStars.length > 0 && !selectedStars.includes(hotel.starRating)) {
        return false;
      }

      // 5. Amenities filter
      if (selectedAmenities.length > 0) {
        const hasAllAmenities = selectedAmenities.every(a => 
          hotel.amenities.some(hotelA => hotelA.toLowerCase().includes(a.toLowerCase()))
        );
        if (!hasAllAmenities) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.pricePerNight - b.pricePerNight;
      if (sortBy === 'price-desc') return b.pricePerNight - a.pricePerNight;
      if (sortBy === 'rating-desc') return b.guestRating - a.guestRating;
      return 0; // recommended default
    });
  }, [selectedDestination, searchKeyword, maxPrice, selectedStars, selectedAmenities, sortBy]);

  const activeFilterCount = (selectedDestination ? 1 : 0) + 
    (searchKeyword ? 1 : 0) + 
    (maxPrice < 35000 ? 1 : 0) + 
    selectedStars.length + 
    selectedAmenities.length;

  return (
    <div className="min-h-screen bg-offwhite pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title & Breadcrumbs */}
        <div className="py-6 border-b border-gray-200 mb-8">
          <span className="text-xs uppercase tracking-widest text-gold-dark font-bold">
            Curated Hospitality Collection
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 mt-1">
            Explore Luxury Hotels & Resorts
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-muted mt-2">
            Discover bespoke suites, royal palaces, and tropical beachfront sanctuaries across our premier destinations.
          </p>

          {/* Destination Quick Chips */}
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
            <button
              onClick={() => {
                setSelectedDestination('');
                setSearchParams({});
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                !selectedDestination 
                  ? 'bg-navy-900 text-gold shadow-md' 
                  : 'bg-white text-charcoal hover:bg-gold/15 border border-gray-200'
              }`}
            >
              All Destinations ({hotelsData.length})
            </button>
            {allDestinations.map((dest) => {
              const count = hotelsData.filter(h => h.destination === dest).length;
              const isActive = selectedDestination.toLowerCase() === dest.toLowerCase();
              return (
                <button
                  key={dest}
                  onClick={() => {
                    setSelectedDestination(dest);
                    setSearchParams({ destination: dest });
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive 
                      ? 'bg-navy-900 text-gold shadow-md' 
                      : 'bg-white text-charcoal hover:bg-gold/15 border border-gray-200'
                  }`}
                >
                  {dest} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Top Search & Filter Bar */}
        <div className="bg-white p-4 rounded-2xl shadow-luxury border border-gray-100 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Keyword Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="Search by hotel name, city, landmark..."
              className="w-full pl-10 pr-4 py-2.5 bg-offwhite rounded-xl text-xs sm:text-sm text-navy-900 placeholder-charcoal-muted border border-gray-200 focus:outline-none focus:border-gold"
            />
            {searchKeyword && (
              <button
                onClick={() => setSearchKeyword('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-charcoal text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Results count & Sort by */}
          <div className="flex items-center justify-between w-full md:w-auto gap-4">
            <span className="text-xs font-semibold text-charcoal">
              Showing <strong className="text-navy-900">{filteredHotels.length}</strong> of {hotelsData.length} Stays
            </span>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="md:hidden flex items-center gap-2 px-3.5 py-2 rounded-xl bg-navy-900 text-gold text-xs font-semibold"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filters {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-charcoal-muted hidden sm:block" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-offwhite border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-navy-900 focus:outline-none cursor-pointer"
              >
                <option value="recommended">Featured: Recommended</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-desc">Guest Rating: Highest First</option>
              </select>
            </div>
          </div>

        </div>

        {/* Main Content Layout (Sidebar + Hotel Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* DESKTOP FILTER SIDEBAR */}
          <aside className="hidden lg:block lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-luxury space-y-6 sticky top-28">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-gold-dark" />
                  <h3 className="font-bold text-navy-900 text-sm">Filter Hotels</h3>
                </div>
                {activeFilterCount > 0 && (
                  <button
                    onClick={resetFilters}
                    className="text-[11px] text-red-500 hover:text-red-700 font-semibold flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              {/* Price Range */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-charcoal">Max Price per Night</label>
                  <span className="text-xs font-bold text-navy-900 font-serif">
                    ₹{maxPrice.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="8000"
                  max="35000"
                  step="1000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-gold cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-charcoal-muted mt-1">
                  <span>₹8,000</span>
                  <span>₹35,000+</span>
                </div>
              </div>

              {/* Star Rating Filter */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-xs font-semibold text-charcoal mb-3">Star Rating</h4>
                <div className="space-y-2">
                  {[5, 4, 3].map((stars) => {
                    const isChecked = selectedStars.includes(stars);
                    return (
                      <label 
                        key={stars}
                        className="flex items-center justify-between text-xs text-charcoal cursor-pointer hover:text-navy-900"
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleStarToggle(stars)}
                            className="rounded text-gold focus:ring-gold accent-gold"
                          />
                          <div className="flex items-center gap-0.5 text-gold">
                            {[...Array(stars)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                            ))}
                          </div>
                          <span>{stars}-Star Luxury</span>
                        </div>
                        <span className="text-[11px] text-charcoal-muted">
                          ({hotelsData.filter(h => h.starRating === stars).length})
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Amenities Filter */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-xs font-semibold text-charcoal mb-3">Hotel Amenities</h4>
                <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                  {availableAmenities.map((amenity) => {
                    const isChecked = selectedAmenities.includes(amenity);
                    return (
                      <label 
                        key={amenity}
                        className="flex items-center gap-2 text-xs text-charcoal cursor-pointer hover:text-navy-900"
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleAmenityToggle(amenity)}
                          className="rounded text-gold focus:ring-gold accent-gold"
                        />
                        <span className="truncate">{amenity}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Clear filters banner */}
              {activeFilterCount > 0 && (
                <button
                  onClick={resetFilters}
                  className="w-full py-2.5 rounded-xl border border-gold/40 text-xs font-bold text-navy-900 bg-gold/10 hover:bg-gold hover:text-navy-900 transition-colors"
                >
                  Clear All Filters ({activeFilterCount})
                </button>
              )}

            </div>
          </aside>

          {/* HOTEL LISTINGS (3 cols on lg) */}
          <main className="lg:col-span-3">
            {filteredHotels.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredHotels.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-luxury max-w-lg mx-auto space-y-4">
                <div className="w-16 h-16 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center mx-auto">
                  <Building className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy-900">
                  No Hotels Found
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  We could not find any luxury stays matching your chosen criteria. Try adjusting your filters or search keywords.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 rounded-full bg-navy-900 text-gold text-xs font-bold hover:bg-navy-800 transition-all shadow-md"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </main>

        </div>

      </div>

      {/* MOBILE FILTER MODAL DRAWER */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4">
          <div className="bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl max-h-[85vh] overflow-y-auto p-6 space-y-5 animate-fade-in text-charcoal">
            
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <h3 className="font-serif text-lg font-bold text-navy-900">Filter Hotels</h3>
              <button 
                onClick={() => setMobileFilterOpen(false)}
                className="p-1 rounded-full text-gray-400 hover:text-charcoal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Destination */}
            <div>
              <label className="text-xs font-semibold text-charcoal mb-2 block">Destination</label>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full bg-offwhite p-2.5 rounded-xl border border-gray-200 text-xs font-semibold"
              >
                <option value="">All Destinations</option>
                {allDestinations.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            {/* Price */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span>Max Price / Night</span>
                <span className="font-bold font-serif text-navy-900">₹{maxPrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="8000"
                max="35000"
                step="1000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-gold"
              />
            </div>

            {/* Stars */}
            <div>
              <label className="text-xs font-semibold text-charcoal mb-2 block">Star Rating</label>
              <div className="flex gap-2">
                {[5, 4, 3].map(stars => (
                  <button
                    key={stars}
                    onClick={() => handleStarToggle(stars)}
                    className={`flex-1 py-2 rounded-xl text-xs font-semibold border ${
                      selectedStars.includes(stars) ? 'border-gold bg-gold/15 text-navy-900 font-bold' : 'border-gray-200'
                    }`}
                  >
                    ★ {stars} Star
                  </button>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <label className="text-xs font-semibold text-charcoal mb-2 block">Amenities</label>
              <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                {availableAmenities.map(amenity => (
                  <label key={amenity} className="flex items-center gap-1.5 text-[11px] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedAmenities.includes(amenity)}
                      onChange={() => handleAmenityToggle(amenity)}
                      className="accent-gold"
                    />
                    <span className="truncate">{amenity}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-gray-200 flex gap-3">
              <button
                onClick={resetFilters}
                className="flex-1 py-3 rounded-xl border border-gray-300 text-xs font-semibold text-charcoal"
              >
                Reset
              </button>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="flex-1 py-3 rounded-xl bg-gold text-navy-900 text-xs font-bold shadow-md"
              >
                Show {filteredHotels.length} Stays
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
