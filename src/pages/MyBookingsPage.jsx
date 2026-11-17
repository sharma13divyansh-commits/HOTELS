import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CalendarCheck, 
  MapPin, 
  Calendar, 
  User, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  Printer, 
  ChevronRight, 
  Trash2, 
  Sparkles, 
  Building,
  ShieldCheck,
  Phone,
  Mail,
  Crown
} from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { useAuth } from '../context/AuthContext';

export default function MyBookingsPage() {
  const { bookings, cancelBooking } = useBooking();
  const { currentUser, updateProfile } = useAuth();

  const [activeTab, setActiveTab] = useState('upcoming'); // 'upcoming', 'past', 'cancelled', 'profile'
  const [selectedVoucher, setSelectedVoucher] = useState(null);
  const [cancelModalBooking, setCancelModalBooking] = useState(null);

  // Profile Form state
  const [profileName, setProfileName] = useState(currentUser?.name || '');
  const [profilePhone, setProfilePhone] = useState(currentUser?.phone || '');
  const [profileEmail, setProfileEmail] = useState(currentUser?.email || '');
  const [profileSaved, setProfileSaved] = useState(false);

  const upcomingBookings = bookings.filter(b => b.status === 'Upcoming');
  const pastBookings = bookings.filter(b => b.status === 'Past');
  const cancelledBookings = bookings.filter(b => b.status === 'Cancelled');

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    updateProfile({
      name: profileName,
      phone: profilePhone,
      email: profileEmail
    });
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 4000);
  };

  const confirmCancel = () => {
    if (cancelModalBooking) {
      cancelBooking(cancelModalBooking.id);
      setCancelModalBooking(null);
    }
  };

  const renderBookingCard = (booking) => {
    const isUpcoming = booking.status === 'Upcoming';
    const isCancelled = booking.status === 'Cancelled';

    return (
      <div 
        key={booking.id}
        className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col md:flex-row"
      >
        {/* Hotel Image */}
        <div className="md:w-4/12 relative aspect-[16/10] md:aspect-auto">
          <img 
            src={booking.image} 
            alt={booking.hotelName} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3">
            <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md ${
              isUpcoming 
                ? 'bg-emerald-600 text-white' 
                : isCancelled 
                  ? 'bg-red-500 text-white' 
                  : 'bg-navy-900 text-gold'
            }`}>
              {booking.status}
            </span>
          </div>
          <div className="absolute bottom-3 left-3 text-white text-xs font-semibold drop-shadow flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-gold" />
            <span>{booking.destination}</span>
          </div>
        </div>

        {/* Details Content */}
        <div className="p-6 md:w-8/12 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-gray-100">
              <div>
                <span className="text-[10px] text-charcoal-muted uppercase tracking-wider font-semibold">
                  Ref: <strong className="font-mono text-navy-900">{booking.id}</strong>
                </span>
                <h3 className="font-serif text-xl font-bold text-navy-900 mt-0.5">
                  {booking.hotelName}
                </h3>
              </div>
              <span className="text-xs text-charcoal-muted self-start sm:self-auto">
                Booked on {new Date(booking.createdAt).toLocaleDateString()}
              </span>
            </div>

            {/* Room & Stay Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 text-xs">
              <div>
                <span className="text-charcoal-muted block text-[10px] uppercase">Room Type</span>
                <span className="font-semibold text-navy-900 line-clamp-1">{booking.roomName}</span>
              </div>
              <div>
                <span className="text-charcoal-muted block text-[10px] uppercase">Check-in</span>
                <span className="font-semibold text-navy-900">{booking.checkIn}</span>
              </div>
              <div>
                <span className="text-charcoal-muted block text-[10px] uppercase">Check-out</span>
                <span className="font-semibold text-navy-900">{booking.checkOut}</span>
              </div>
              <div>
                <span className="text-charcoal-muted block text-[10px] uppercase">Guests & Nights</span>
                <span className="font-semibold text-navy-900">{booking.guests} Guests • {booking.nights}N</span>
              </div>
            </div>

            {/* Price line */}
            <div className="pt-2 flex items-baseline justify-between">
              <span className="text-xs text-charcoal-muted">Total Paid Amount:</span>
              <span className="font-serif font-bold text-lg text-gold-dark">
                ₹{booking.totalAmount.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => setSelectedVoucher(booking)}
              className="px-4 py-2 rounded-xl bg-navy-900 text-gold text-xs font-semibold hover:bg-navy-800 transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>View Confirmation Voucher</span>
            </button>

            <div className="flex items-center gap-2">
              <Link
                to={`/hotels/${booking.hotelId}`}
                className="px-3.5 py-2 rounded-xl border border-gray-200 text-xs font-medium text-charcoal hover:bg-gray-50"
              >
                View Hotel
              </Link>

              {isUpcoming && (
                <button
                  onClick={() => setCancelModalBooking(booking)}
                  className="px-3.5 py-2 rounded-xl text-xs font-medium text-red-600 hover:bg-red-50 border border-red-200 transition-colors"
                >
                  Cancel Demo Stay
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-offwhite pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header Banner */}
        <div className="bg-navy-900 rounded-3xl p-8 text-white mb-10 shadow-2xl border border-gold/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <img
              src={currentUser?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'}
              alt={currentUser?.name}
              className="w-16 h-16 rounded-2xl object-cover ring-2 ring-gold shadow-lg"
            />
            <div>
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4 text-gold" />
                <span className="text-xs text-gold font-bold uppercase tracking-wider">{currentUser?.tier || 'Gold Elite Member'}</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                {currentUser?.name || 'Devendra Sharma'}
              </h1>
              <p className="text-xs text-gray-300">
                {currentUser?.email || 'guest@yoyohotels.com'} • {currentUser?.loyaltyPoints || 3450} YoYo Loyalty Points
              </p>
            </div>
          </div>

          <Link
            to="/hotels"
            className="px-5 py-3 rounded-2xl bg-gold hover:bg-gold-light text-navy-900 text-xs font-bold shadow-gold transition-all self-start md:self-auto flex items-center gap-2"
          >
            <Building className="w-4 h-4" />
            <span>Book New Luxury Stay</span>
          </Link>
        </div>

        {/* Dashboard Tabs */}
        <div className="flex items-center gap-2 border-b border-gray-200 mb-8 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`pb-3 px-4 text-sm font-semibold transition-all relative ${
              activeTab === 'upcoming' 
                ? 'text-navy-900 border-b-2 border-gold font-bold' 
                : 'text-charcoal-muted hover:text-navy-900'
            }`}
          >
            Upcoming Stays ({upcomingBookings.length})
          </button>

          <button
            onClick={() => setActiveTab('past')}
            className={`pb-3 px-4 text-sm font-semibold transition-all relative ${
              activeTab === 'past' 
                ? 'text-navy-900 border-b-2 border-gold font-bold' 
                : 'text-charcoal-muted hover:text-navy-900'
            }`}
          >
            Past Stays ({pastBookings.length})
          </button>

          <button
            onClick={() => setActiveTab('cancelled')}
            className={`pb-3 px-4 text-sm font-semibold transition-all relative ${
              activeTab === 'cancelled' 
                ? 'text-navy-900 border-b-2 border-gold font-bold' 
                : 'text-charcoal-muted hover:text-navy-900'
            }`}
          >
            Cancelled ({cancelledBookings.length})
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`pb-3 px-4 text-sm font-semibold transition-all relative ${
              activeTab === 'profile' 
                ? 'text-navy-900 border-b-2 border-gold font-bold' 
                : 'text-charcoal-muted hover:text-navy-900'
            }`}
          >
            Profile & Settings
          </button>
        </div>

        {/* TAB CONTENTS */}
        <div>
          {/* UPCOMING TAB */}
          {activeTab === 'upcoming' && (
            <div className="space-y-6">
              {upcomingBookings.length > 0 ? (
                upcomingBookings.map(renderBookingCard)
              ) : (
                <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-luxury max-w-md mx-auto space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center mx-auto">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy-900">
                    No Upcoming Stays
                  </h3>
                  <p className="text-xs text-charcoal-muted">
                    You have no active reservations planned yet. Ready for your next unforgettable escape?
                  </p>
                  <Link
                    to="/hotels"
                    className="inline-block px-6 py-2.5 rounded-full bg-navy-900 text-gold text-xs font-bold hover:bg-navy-800 shadow-md"
                  >
                    Explore Destinations
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* PAST TAB */}
          {activeTab === 'past' && (
            <div className="space-y-6">
              {pastBookings.length > 0 ? (
                pastBookings.map(renderBookingCard)
              ) : (
                <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-luxury max-w-md mx-auto space-y-4">
                  <p className="text-sm font-bold text-navy-900">No Past Reservations</p>
                  <p className="text-xs text-charcoal-muted">Completed trips will appear here.</p>
                </div>
              )}
            </div>
          )}

          {/* CANCELLED TAB */}
          {activeTab === 'cancelled' && (
            <div className="space-y-6">
              {cancelledBookings.length > 0 ? (
                cancelledBookings.map(renderBookingCard)
              ) : (
                <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-luxury max-w-md mx-auto space-y-4">
                  <p className="text-sm font-bold text-navy-900">No Cancelled Bookings</p>
                  <p className="text-xs text-charcoal-muted">You have no cancelled stays on record.</p>
                </div>
              )}
            </div>
          )}

          {/* PROFILE SETTINGS TAB */}
          {activeTab === 'profile' && (
            <div className="max-w-2xl bg-white rounded-3xl p-8 border border-gray-100 shadow-luxury space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-navy-900">
                  Guest Profile & Preferences
                </h3>
                <p className="text-xs text-charcoal-muted mt-1">
                  Manage your personal information and reservation contact details.
                </p>
              </div>

              <form onSubmit={handleProfileSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={profileName}
                    onChange={(e) => setProfileName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-gold focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={profileEmail}
                      onChange={(e) => setProfileEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-gold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={profilePhone}
                      onChange={(e) => setProfilePhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-gold focus:outline-none"
                    />
                  </div>
                </div>

                {/* Membership info callout */}
                <div className="p-4 rounded-2xl bg-gold-subtle/50 border border-gold/30 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-navy-900">{currentUser?.tier || 'Gold Elite Member'}</span>
                    <p className="text-[11px] text-charcoal-muted">Complimentary 3 PM late checkout & room upgrades when available.</p>
                  </div>
                  <span className="font-bold font-serif text-sm text-gold-dark">{currentUser?.loyaltyPoints || 3450} Pts</span>
                </div>

                {profileSaved && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Profile information saved successfully!</span>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gold hover:bg-gold-light text-navy-900 text-xs font-bold shadow-gold transition-all"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

      </div>

      {/* CONFIRMATION VOUCHER MODAL */}
      {selectedVoucher && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-2xl border border-gold/30 space-y-6 animate-fade-in my-auto">
            
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-gold" />
                <span className="font-serif text-lg font-bold text-navy-900">
                  YoYo Hotels Booking Voucher
                </span>
              </div>
              <button
                onClick={() => setSelectedVoucher(null)}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Voucher Body */}
            <div className="space-y-4 text-xs">
              <div className="p-4 bg-navy-900 text-white rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gold uppercase tracking-wider">Booking Reference</span>
                  <p className="font-mono text-base font-bold text-white">{selectedVoucher.id}</p>
                </div>
                <span className="px-3 py-1 bg-gold text-navy-900 rounded-full font-bold text-[10px] uppercase">
                  {selectedVoucher.status}
                </span>
              </div>

              <div className="space-y-2 border-b border-gray-100 pb-3">
                <p><span className="text-charcoal-muted">Hotel:</span> <strong className="text-navy-900 text-sm">{selectedVoucher.hotelName}</strong></p>
                <p><span className="text-charcoal-muted">Address:</span> {selectedVoucher.address}</p>
                <p><span className="text-charcoal-muted">Room Type:</span> <strong>{selectedVoucher.roomName}</strong></p>
              </div>

              <div className="grid grid-cols-2 gap-3 py-1 border-b border-gray-100 pb-3">
                <div>
                  <span className="text-charcoal-muted">Check-in:</span>
                  <p className="font-semibold text-navy-900">{selectedVoucher.checkIn} (from 2 PM)</p>
                </div>
                <div>
                  <span className="text-charcoal-muted">Check-out:</span>
                  <p className="font-semibold text-navy-900">{selectedVoucher.checkOut} (until 12 PM)</p>
                </div>
                <div>
                  <span className="text-charcoal-muted">Guests:</span>
                  <p className="font-semibold text-navy-900">{selectedVoucher.guests} Adults/Children</p>
                </div>
                <div>
                  <span className="text-charcoal-muted">Nights:</span>
                  <p className="font-semibold text-navy-900">{selectedVoucher.nights} Nights</p>
                </div>
              </div>

              <div className="space-y-1 py-1 border-b border-gray-100 pb-3">
                <p><span className="text-charcoal-muted">Primary Guest:</span> <strong>{selectedVoucher.guestDetails?.fullName}</strong></p>
                <p><span className="text-charcoal-muted">Email:</span> {selectedVoucher.guestDetails?.email}</p>
                <p><span className="text-charcoal-muted">Phone:</span> {selectedVoucher.guestDetails?.phone}</p>
                {selectedVoucher.guestDetails?.specialRequests && (
                  <p><span className="text-charcoal-muted">Requests:</span> {selectedVoucher.guestDetails.specialRequests}</p>
                )}
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="font-bold text-navy-900 text-sm">Total Paid (Demo):</span>
                <span className="font-serif font-bold text-xl text-gold-dark">
                  ₹{selectedVoucher.totalAmount.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex gap-3">
              <button
                onClick={() => window.print()}
                className="flex-1 py-2.5 rounded-xl border border-gray-300 text-xs font-semibold text-charcoal hover:bg-gray-50 flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4 text-gray-500" />
                <span>Print Voucher PDF</span>
              </button>
              <button
                onClick={() => setSelectedVoucher(null)}
                className="flex-1 py-2.5 rounded-xl bg-navy-900 text-gold text-xs font-bold hover:bg-navy-800"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* CANCEL BOOKING CONFIRMATION MODAL */}
      {cancelModalBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 space-y-4 animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>

            <div className="text-center">
              <h3 className="font-serif text-lg font-bold text-navy-900">
                Cancel Demo Reservation?
              </h3>
              <p className="text-xs text-charcoal-muted mt-2">
                Are you sure you want to cancel booking <strong className="text-navy-900">{cancelModalBooking.id}</strong> at {cancelModalBooking.hotelName}?
              </p>
              <p className="text-[11px] text-emerald-600 mt-2 font-medium">
                Free cancellation applies. This demo booking status will be updated to Cancelled.
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setCancelModalBooking(null)}
                className="flex-1 py-2.5 rounded-xl border border-gray-300 text-xs font-semibold text-charcoal hover:bg-gray-50"
              >
                Keep Booking
              </button>
              <button
                onClick={confirmCancel}
                className="flex-1 py-2.5 rounded-xl bg-red-600 text-white text-xs font-bold hover:bg-red-700 shadow-md"
              >
                Yes, Cancel Stay
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
