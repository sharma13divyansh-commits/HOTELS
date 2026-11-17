import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { 
  X, 
  Check, 
  Calendar, 
  Users, 
  BedDouble, 
  ShieldCheck, 
  CreditCard, 
  Sparkles, 
  Tag, 
  Info, 
  ArrowRight, 
  ArrowLeft, 
  Printer, 
  CheckCircle,
  Building2,
  Clock,
  AlertCircle
} from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { useAuth } from '../context/AuthContext';
import { offersData } from '../data/offersData';

export default function BookingModal() {
  const { bookingModalState, closeBookingModal, createBooking, searchParams } = useBooking();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const { isOpen, hotel, selectedRoom: initialRoom } = bookingModalState;

  // Step state (1 to 7)
  // Step 1: Hotel preview/confirm
  // Step 2: Room selection
  // Step 3: Dates selection
  // Step 4: Guests & Rooms
  // Step 5: Customer Details
  // Step 6: Summary & Promo Code
  // Step 7: Confirmation / Success
  const [currentStep, setCurrentStep] = useState(2); // start with room if hotel is opened
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Dates
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(tomorrow);
  dayAfter.setDate(dayAfter.getDate() + 3);

  const formatDate = (d) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(searchParams.checkIn || formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(searchParams.checkOut || formatDate(dayAfter));
  const [guests, setGuests] = useState(searchParams.guests || 2);
  const [rooms, setRooms] = useState(searchParams.rooms || 1);

  // Customer Details Form
  const [fullName, setFullName] = useState(currentUser?.name || '');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [phone, setPhone] = useState(currentUser?.phone || '');
  const [specialRequests, setSpecialRequests] = useState('');
  const [formErrors, setFormErrors] = useState({});

  // Promo Code & Payment
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('demo-card');

  // Confirmation Result
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // Sync state when modal opens
  useEffect(() => {
    if (isOpen && hotel) {
      setSelectedRoom(initialRoom || hotel.roomTypes[0]);
      setCurrentStep(2);
      setConfirmedBooking(null);
      setAppliedDiscount(0);
      setPromoCode('');
      setPromoMessage(null);
      if (currentUser) {
        setFullName(currentUser.name || '');
        setEmail(currentUser.email || '');
        setPhone(currentUser.phone || '');
      }
    }
  }, [isOpen, hotel, initialRoom, currentUser]);

  if (!isOpen || !hotel) return null;

  // Calculate nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const diffTime = Math.max(1, checkOutDate - checkInDate);
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  const roomPrice = selectedRoom ? selectedRoom.price : hotel.pricePerNight;
  const subtotal = roomPrice * nights * rooms;
  const taxes = Math.round(subtotal * 0.12); // 12% luxury tax & service charges
  const discountAmount = Math.round(subtotal * (appliedDiscount / 100));
  const totalAmount = Math.max(0, subtotal + taxes - discountAmount);

  const handleApplyPromo = () => {
    const trimmed = promoCode.trim().toUpperCase();
    const found = offersData.find(o => o.code === trimmed);
    if (found) {
      setAppliedDiscount(found.discountPercent);
      setPromoMessage({ type: 'success', text: `Success! Code "${trimmed}" applied (${found.discountPercent}% off)` });
    } else if (trimmed === 'YOYO20') {
      setAppliedDiscount(20);
      setPromoMessage({ type: 'success', text: 'Success! Code "YOYO20" applied (20% off)' });
    } else {
      setPromoMessage({ type: 'error', text: 'Invalid promo code. Try "YOYO20" for 20% off!' });
    }
  };

  const validateStep5 = () => {
    const errors = {};
    if (!fullName.trim()) errors.fullName = 'Please enter your full name.';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) errors.email = 'Valid email is required.';
    if (!phone.trim()) errors.phone = 'Phone number is required.';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 5) {
      if (!validateStep5()) return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(1, prev - 1));
  };

  const handleConfirmReservation = () => {
    const bookingPayload = {
      hotelId: hotel.id,
      hotelName: hotel.name,
      destination: hotel.destination,
      image: hotel.mainImage,
      address: hotel.address,
      roomName: selectedRoom ? selectedRoom.name : 'Deluxe Room',
      checkIn,
      checkOut,
      nights,
      guests,
      rooms,
      pricePerNight: roomPrice,
      subtotal,
      taxes,
      discount: discountAmount,
      totalAmount,
      guestDetails: {
        fullName,
        email,
        phone,
        specialRequests
      },
      paymentMethod: paymentMethod === 'demo-card' ? 'Demo Card (ending in •••• 4242)' : paymentMethod === 'demo-upi' ? 'Demo UPI Payment' : 'Pay at Hotel Check-in'
    };

    const newBooking = createBooking(bookingPayload);
    setConfirmedBooking(newBooking);
    setCurrentStep(7);

    // Confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-navy-900/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-gold/30 overflow-hidden animate-fade-in flex flex-col my-auto max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="bg-navy-900 text-white p-5 border-b border-gold/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center text-gold font-bold">
              {currentStep < 7 ? currentStep : '✓'}
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gold font-semibold">
                {currentStep === 7 ? 'Booking Confirmed' : `Step ${currentStep} of 6 • Hotel Reservation`}
              </p>
              <h3 className="font-serif text-lg font-bold text-white line-clamp-1">
                {hotel.name}
              </h3>
            </div>
          </div>

          <button
            onClick={closeBookingModal}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step Progress Bar */}
        {currentStep < 7 && (
          <div className="w-full bg-gray-100 h-1.5">
            <div 
              className="bg-gold h-full transition-all duration-300"
              style={{ width: `${(currentStep / 6) * 100}%` }}
            />
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">

          {/* STEP 1: Hotel Overview */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <h4 className="font-serif text-xl font-bold text-navy-900">
                1. Selected Luxury Property
              </h4>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md">
                <img src={hotel.mainImage} alt={hotel.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white">
                    <p className="text-xs font-semibold text-gold uppercase">{hotel.destination}</p>
                    <p className="text-lg font-serif font-bold">{hotel.name}</p>
                    <p className="text-xs text-gray-200">{hotel.address}</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                {hotel.description}
              </p>
            </div>
          )}

          {/* STEP 2: Choose Room Type */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-xl font-bold text-navy-900">
                  Choose Your Room Type
                </h4>
                <span className="text-xs text-charcoal-muted">
                  {hotel.roomTypes.length} Available Suites
                </span>
              </div>

              <div className="space-y-3">
                {hotel.roomTypes.map((room) => {
                  const isSelected = selectedRoom?.id === room.id;
                  return (
                    <div
                      key={room.id}
                      onClick={() => setSelectedRoom(room)}
                      className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between ${
                        isSelected 
                          ? 'border-gold bg-gold-subtle/40 shadow-md' 
                          : 'border-gray-200 hover:border-gold/50 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <img 
                          src={room.image} 
                          alt={room.name} 
                          className="w-20 h-20 rounded-xl object-cover shrink-0 border border-gray-100"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <h5 className="font-semibold text-navy-900 text-sm">{room.name}</h5>
                            {isSelected && (
                              <span className="bg-gold text-navy-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                Selected
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-charcoal-muted mt-0.5">{room.size} • {room.bed}</p>
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {room.features.slice(0, 2).map((feat, idx) => (
                              <span key={idx} className="text-[10px] bg-white px-2 py-0.5 rounded border border-gray-100 text-charcoal-light">
                                ✓ {feat}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="sm:text-right shrink-0 w-full sm:w-auto border-t sm:border-t-0 pt-2 sm:pt-0">
                        <p className="text-lg font-bold font-serif text-navy-900">
                          ₹{room.price.toLocaleString()}
                        </p>
                        <p className="text-[10px] text-charcoal-muted">per night + taxes</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: Dates */}
          {currentStep === 3 && (
            <div className="space-y-5">
              <h4 className="font-serif text-xl font-bold text-navy-900">
                Select Your Stay Dates
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl border border-gray-200 bg-offwhite">
                  <label htmlFor="modal-checkin" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-2">
                    Check-in Date
                  </label>
                  <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-200">
                    <Calendar className="w-5 h-5 text-gold-dark" />
                    <input
                      id="modal-checkin"
                      type="date"
                      value={checkIn}
                      min={formatDate(today)}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-transparent text-sm font-semibold text-navy-900 focus:outline-none cursor-pointer"
                    />
                  </div>
                  <p className="text-[11px] text-charcoal-muted mt-2">Standard check-in from 2:00 PM</p>
                </div>

                <div className="p-4 rounded-2xl border border-gray-200 bg-offwhite">
                  <label htmlFor="modal-checkout" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-2">
                    Check-out Date
                  </label>
                  <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-200">
                    <Calendar className="w-5 h-5 text-gold-dark" />
                    <input
                      id="modal-checkout"
                      type="date"
                      value={checkOut}
                      min={checkIn}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-transparent text-sm font-semibold text-navy-900 focus:outline-none cursor-pointer"
                    />
                  </div>
                  <p className="text-[11px] text-charcoal-muted mt-2">Check-out until 12:00 Noon</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-between">
                <span className="text-xs font-medium text-navy-900">Duration of stay:</span>
                <span className="text-sm font-bold text-navy-900 font-serif">
                  {nights} {nights === 1 ? 'Night' : 'Nights'}
                </span>
              </div>
            </div>
          )}

          {/* STEP 4: Number of Guests */}
          {currentStep === 4 && (
            <div className="space-y-5">
              <h4 className="font-serif text-xl font-bold text-navy-900">
                Number of Guests & Rooms
              </h4>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-offwhite rounded-2xl border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-navy-900 border border-gray-200">
                      <Users className="w-5 h-5 text-gold-dark" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-900">Adults & Children</p>
                      <p className="text-xs text-charcoal-muted">Ages 2 and above</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      disabled={guests <= 1}
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-9 h-9 rounded-full bg-white border border-gray-300 font-bold hover:bg-gray-100 disabled:opacity-40"
                    >
                      -
                    </button>
                    <span className="font-bold text-base w-6 text-center">{guests}</span>
                    <button
                      type="button"
                      disabled={guests >= 10}
                      onClick={() => setGuests(Math.min(10, guests + 1))}
                      className="w-9 h-9 rounded-full bg-white border border-gray-300 font-bold hover:bg-gray-100 disabled:opacity-40"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-offwhite rounded-2xl border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-navy-900 border border-gray-200">
                      <BedDouble className="w-5 h-5 text-gold-dark" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-900">Total Rooms</p>
                      <p className="text-xs text-charcoal-muted">Capacity up to 3 guests per room</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      disabled={rooms <= 1}
                      onClick={() => setRooms(Math.max(1, rooms - 1))}
                      className="w-9 h-9 rounded-full bg-white border border-gray-300 font-bold hover:bg-gray-100 disabled:opacity-40"
                    >
                      -
                    </button>
                    <span className="font-bold text-base w-6 text-center">{rooms}</span>
                    <button
                      type="button"
                      disabled={rooms >= 5}
                      onClick={() => setRooms(Math.min(5, rooms + 1))}
                      className="w-9 h-9 rounded-full bg-white border border-gray-300 font-bold hover:bg-gray-100 disabled:opacity-40"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: Customer Details */}
          {currentStep === 5 && (
            <div className="space-y-4">
              <h4 className="font-serif text-xl font-bold text-navy-900">
                Primary Guest Information
              </h4>
              <p className="text-xs text-charcoal-muted">
                Please enter the details of the primary guest for hotel check-in ID verification.
              </p>

              <div className="space-y-3.5">
                <div>
                  <label htmlFor="modal-fullname" className="block text-xs font-semibold text-charcoal mb-1">
                    Full Name *
                  </label>
                  <input
                    id="modal-fullname"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Devendra Sharma"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-gold focus:outline-none text-sm"
                  />
                  {formErrors.fullName && (
                    <p className="text-xs text-red-500 mt-1">{formErrors.fullName}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="modal-email" className="block text-xs font-semibold text-charcoal mb-1">
                      Email Address *
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. guest@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-gold focus:outline-none text-sm"
                    />
                    {formErrors.email && (
                      <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="modal-phone" className="block text-xs font-semibold text-charcoal mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="modal-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-gold focus:outline-none text-sm"
                    />
                    {formErrors.phone && (
                      <p className="text-xs text-red-500 mt-1">{formErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-requests" className="block text-xs font-semibold text-charcoal mb-1">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="modal-requests"
                    rows="2"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="High floor, quiet room, late check-in notice, or anniversary celebration..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-gold focus:outline-none text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 6: Summary & Payment */}
          {currentStep === 6 && (
            <div className="space-y-5">
              <h4 className="font-serif text-xl font-bold text-navy-900">
                Review & Confirm Booking
              </h4>

              {/* Booking breakdown card */}
              <div className="bg-offwhite rounded-2xl p-4 border border-gray-200 space-y-3 text-sm">
                <div className="flex justify-between items-start pb-2 border-b border-gray-200">
                  <div>
                    <p className="font-bold text-navy-900">{hotel.name}</p>
                    <p className="text-xs text-charcoal-muted">{selectedRoom?.name} • {rooms} Room(s)</p>
                  </div>
                  <span className="text-xs font-semibold text-gold-dark bg-gold/15 px-2 py-0.5 rounded">
                    {hotel.destination}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs py-1">
                  <div>
                    <span className="text-charcoal-muted">Check-in:</span>
                    <p className="font-semibold text-navy-900">{checkIn}</p>
                  </div>
                  <div>
                    <span className="text-charcoal-muted">Check-out:</span>
                    <p className="font-semibold text-navy-900">{checkOut}</p>
                  </div>
                  <div>
                    <span className="text-charcoal-muted">Guests:</span>
                    <p className="font-semibold text-navy-900">{guests} Guests</p>
                  </div>
                  <div>
                    <span className="text-charcoal-muted">Duration:</span>
                    <p className="font-semibold text-navy-900">{nights} Night(s)</p>
                  </div>
                </div>

                {/* Price Math */}
                <div className="pt-2 border-t border-gray-200 space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-charcoal-muted">
                      ₹{roomPrice.toLocaleString()} x {nights} nights x {rooms} room(s)
                    </span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-muted">Taxes & Hospitality Fees (12%)</span>
                    <span>₹{taxes.toLocaleString()}</span>
                  </div>
                  {appliedDiscount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-medium">
                      <span>Promo Discount ({appliedDiscount}%)</span>
                      <span>-₹{discountAmount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between pt-2 border-t border-gray-300 text-sm font-bold text-navy-900">
                    <span>Total Demo Amount</span>
                    <span className="text-lg font-serif text-gold-dark">
                      ₹{totalAmount.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Promo Code Input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-charcoal">
                  Have a Promo Code? (Try <span className="text-gold-dark font-mono font-bold cursor-pointer" onClick={() => setPromoCode('YOYO20')}>YOYO20</span>)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter promo code"
                    className="flex-1 px-3 py-2 rounded-xl border border-gray-200 uppercase font-mono text-sm focus:border-gold focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleApplyPromo}
                    className="px-4 py-2 bg-navy-900 text-gold text-xs font-semibold rounded-xl hover:bg-navy-800"
                  >
                    Apply
                  </button>
                </div>
                {promoMessage && (
                  <p className={`text-xs ${promoMessage.type === 'success' ? 'text-emerald-600' : 'text-red-500'}`}>
                    {promoMessage.text}
                  </p>
                )}
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-2">
                  Select Demo Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'demo-card', label: 'Credit Card', icon: CreditCard },
                    { id: 'demo-upi', label: 'UPI / NetBank', icon: Sparkles },
                    { id: 'pay-at-hotel', label: 'Pay at Check-in', icon: Building2 },
                  ].map((method) => {
                    const Icon = method.icon;
                    return (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setPaymentMethod(method.id)}
                        className={`p-2.5 rounded-xl border text-center flex flex-col items-center gap-1 transition-all ${
                          paymentMethod === method.id 
                            ? 'border-gold bg-gold/10 text-navy-900 font-semibold shadow-sm' 
                            : 'border-gray-200 text-charcoal-muted hover:border-gray-300'
                        }`}
                      >
                        <Icon className="w-4 h-4 text-gold-dark" />
                        <span className="text-xs">{method.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Demo Mode Notice */}
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
                <span>
                  <strong>Demo Reservation:</strong> No real payment or card charges will be made. You will receive an instant simulated booking confirmation voucher.
                </span>
              </div>
            </div>
          )}

          {/* STEP 7: Confirmation Page */}
          {currentStep === 7 && confirmedBooking && (
            <div className="text-center space-y-5 py-2 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-emerald-600">
                  Reservation Confirmed!
                </span>
                <h4 className="font-serif text-2xl font-bold text-navy-900 mt-1">
                  Thank You, {confirmedBooking.guestDetails.fullName}!
                </h4>
                <p className="text-xs text-charcoal-muted mt-1">
                  A confirmation email has been sent to <span className="font-semibold text-charcoal">{confirmedBooking.guestDetails.email}</span>.
                </p>
              </div>

              {/* Booking Reference Card */}
              <div className="bg-gold-subtle/50 border border-gold/40 rounded-2xl p-4 text-left max-w-md mx-auto space-y-2.5">
                <div className="flex justify-between items-center pb-2 border-b border-gold/30">
                  <span className="text-xs text-charcoal-muted uppercase tracking-wider font-semibold">
                    Booking Reference
                  </span>
                  <span className="font-mono text-sm font-bold text-navy-900 bg-white px-2.5 py-0.5 rounded border border-gold/40">
                    {confirmedBooking.id}
                  </span>
                </div>

                <div className="text-xs space-y-1">
                  <p><span className="text-charcoal-muted">Hotel:</span> <strong className="text-navy-900">{confirmedBooking.hotelName}</strong></p>
                  <p><span className="text-charcoal-muted">Room:</span> {confirmedBooking.roomName}</p>
                  <p><span className="text-charcoal-muted">Stay Dates:</span> {confirmedBooking.checkIn} to {confirmedBooking.checkOut} ({confirmedBooking.nights} nights)</p>
                  <p><span className="text-charcoal-muted">Guests:</span> {confirmedBooking.guests} Guests</p>
                  <p><span className="text-charcoal-muted">Total Paid:</span> <strong className="text-gold-dark font-serif text-sm">₹{confirmedBooking.totalAmount.toLocaleString()}</strong></p>
                  <p><span className="text-charcoal-muted">Status:</span> <span className="text-emerald-700 font-semibold bg-emerald-100 px-2 py-0.5 rounded">Upcoming Confirmed</span></p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => window.print()}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-gray-300 hover:bg-gray-50 text-xs font-semibold text-charcoal flex items-center justify-center gap-2"
                >
                  <Printer className="w-4 h-4 text-gray-500" />
                  <span>Print Receipt</span>
                </button>

                <button
                  onClick={() => {
                    closeBookingModal();
                    navigate('/my-bookings');
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-gold text-xs font-bold shadow-md flex items-center justify-center gap-2"
                >
                  <span>View in My Bookings</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        {currentStep < 7 && (
          <div className="bg-gray-50 p-4 border-t border-gray-200 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-charcoal hover:bg-gray-200 flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : <div />}

            {currentStep < 6 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-gold hover:bg-gold-light text-navy-900 text-xs font-bold shadow-gold flex items-center gap-1.5 transition-all"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleConfirmReservation}
                className="px-7 py-3 rounded-xl bg-gold hover:bg-gold-light text-navy-900 text-sm font-bold shadow-gold flex items-center gap-2 transition-all active:scale-95"
              >
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Confirm Demo Booking (₹{totalAmount.toLocaleString()})</span>
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
