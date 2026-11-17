import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  Users, 
  BedDouble, 
  Search, 
  ChevronDown 
} from 'lucide-react';
import { useBooking } from '../context/BookingContext';

export default function SearchWidget({ initialDestination = '', isCompact = false }) {
  const navigate = useNavigate();
  const { searchParams, setSearchParams } = useBooking();

  // Tomorrow's date for check-in default
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(tomorrow);
  dayAfter.setDate(dayAfter.getDate() + 3);

  const formatDate = (d) => d.toISOString().split('T')[0];

  const [destination, setDestination] = useState(initialDestination || searchParams.destination || '');
  const [checkIn, setCheckIn] = useState(searchParams.checkIn || formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(searchParams.checkOut || formatDate(dayAfter));
  const [guests, setGuests] = useState(searchParams.guests || 2);
  const [rooms, setRooms] = useState(searchParams.rooms || 1);
  const [guestPickerOpen, setGuestPickerOpen] = useState(false);

  const popularDestinations = [
    { name: 'All Destinations', value: '' },
    { name: 'Dubai, UAE', value: 'Dubai' },
    { name: 'Goa, India', value: 'Goa' },
    { name: 'Mumbai, India', value: 'Mumbai' },
    { name: 'Delhi, India', value: 'Delhi' },
    { name: 'Manali, Himachal', value: 'Manali' },
    { name: 'Jaipur, Rajasthan', value: 'Jaipur' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({
      destination,
      checkIn,
      checkOut,
      guests,
      rooms
    });

    const query = new URLSearchParams();
    if (destination) query.set('destination', destination);
    if (checkIn) query.set('checkIn', checkIn);
    if (checkOut) query.set('checkOut', checkOut);
    if (guests) query.set('guests', guests.toString());
    if (rooms) query.set('rooms', rooms.toString());

    navigate(`/hotels?${query.toString()}`);
  };

  return (
    <div className={`w-full ${isCompact ? '' : 'max-w-5xl mx-auto'}`}>
      <form
        onSubmit={handleSearch}
        className={`bg-white rounded-2xl md:rounded-full p-3 md:p-2.5 shadow-2xl border border-gold/30 grid grid-cols-1 md:grid-cols-12 gap-2 items-center backdrop-blur-md`}
      >
        
        {/* Destination / City */}
        <div className="md:col-span-4 px-4 py-2 hover:bg-offwhite rounded-xl md:rounded-full transition-colors relative flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center text-navy-800 shrink-0">
            <MapPin className="w-5 h-5 text-gold-dark" />
          </div>
          <div className="flex-1 min-w-0 text-left">
            <label htmlFor="search-destination" className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal-muted">
              Destination / City
            </label>
            <select
              id="search-destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-transparent text-sm font-semibold text-navy-900 focus:outline-none cursor-pointer truncate"
            >
              {popularDestinations.map(d => (
                <option key={d.value} value={d.value} className="text-charcoal">
                  {d.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Check-in & Check-out Dates */}
        <div className="md:col-span-4 grid grid-cols-2 gap-2 px-3 py-2 hover:bg-offwhite rounded-xl md:rounded-full transition-colors border-y md:border-y-0 md:border-x border-gray-100">
          
          {/* Check-in */}
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gold-dark shrink-0" />
            <div className="text-left w-full">
              <label htmlFor="search-checkin" className="block text-[10px] font-semibold uppercase tracking-wider text-charcoal-muted">
                Check-in
              </label>
              <input
                id="search-checkin"
                type="date"
                value={checkIn}
                min={formatDate(today)}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-transparent text-xs font-semibold text-navy-900 focus:outline-none cursor-pointer"
              />
            </div>
          </div>

          {/* Check-out */}
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gold-dark shrink-0" />
            <div className="text-left w-full">
              <label htmlFor="search-checkout" className="block text-[10px] font-semibold uppercase tracking-wider text-charcoal-muted">
                Check-out
              </label>
              <input
                id="search-checkout"
                type="date"
                value={checkOut}
                min={checkIn || formatDate(tomorrow)}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-transparent text-xs font-semibold text-navy-900 focus:outline-none cursor-pointer"
              />
            </div>
          </div>

        </div>

        {/* Guests & Rooms */}
        <div className="md:col-span-2 px-3 py-2 hover:bg-offwhite rounded-xl md:rounded-full transition-colors relative">
          <button
            type="button"
            onClick={() => setGuestPickerOpen(!guestPickerOpen)}
            className="w-full flex items-center justify-between text-left focus:outline-none"
          >
            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-gold-dark shrink-0" />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-charcoal-muted">
                  Guests & Rooms
                </p>
                <p className="text-xs font-semibold text-navy-900 truncate">
                  {guests} {guests === 1 ? 'Guest' : 'Guests'}, {rooms} {rooms === 1 ? 'Room' : 'Rooms'}
                </p>
              </div>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </button>

          {/* Guest Count Popover */}
          {guestPickerOpen && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-40 animate-fade-in text-charcoal">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div>
                  <p className="text-xs font-semibold text-navy-900">Total Guests</p>
                  <p className="text-[10px] text-gray-500">Ages 12 and above</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={guests <= 1}
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-xs font-bold text-gray-600 disabled:opacity-30 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold w-4 text-center">{guests}</span>
                  <button
                    type="button"
                    disabled={guests >= 10}
                    onClick={() => setGuests(Math.min(10, guests + 1))}
                    className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-xs font-bold text-gray-600 disabled:opacity-30 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3">
                <div>
                  <p className="text-xs font-semibold text-navy-900">Rooms</p>
                  <p className="text-[10px] text-gray-500">Reserved suites</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={rooms <= 1}
                    onClick={() => setRooms(Math.max(1, rooms - 1))}
                    className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-xs font-bold text-gray-600 disabled:opacity-30 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold w-4 text-center">{rooms}</span>
                  <button
                    type="button"
                    disabled={rooms >= 5}
                    onClick={() => setRooms(Math.min(5, rooms + 1))}
                    className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-xs font-bold text-gray-600 disabled:opacity-30 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setGuestPickerOpen(false)}
                className="w-full mt-3 py-1.5 rounded-lg bg-navy-900 text-gold text-xs font-semibold hover:bg-navy-800"
              >
                Apply
              </button>
            </div>
          )}
        </div>

        {/* Search Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full py-3.5 px-5 bg-gold hover:bg-gold-light active:scale-95 text-navy-900 font-semibold rounded-xl md:rounded-full flex items-center justify-center gap-2 shadow-gold transition-all duration-200 text-sm"
          >
            <Search className="w-4 h-4 stroke-[2.5]" />
            <span>Search Hotels</span>
          </button>
        </div>

      </form>
    </div>
  );
}
