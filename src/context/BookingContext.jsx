import React, { createContext, useContext, useState, useEffect } from 'react';

const BookingContext = createContext();

const INITIAL_BOOKINGS = [
  {
    id: 'YY-2026-89412',
    hotelId: 'yoyo-royal-mirage-dubai',
    hotelName: 'YoYo Royal Mirage & Spa Resort',
    destination: 'Dubai',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    address: 'King Salman Bin Abdulaziz Al Saud St, Dubai Marina, Dubai, UAE',
    roomName: 'Deluxe Arabian Sea King Room',
    checkIn: '2026-12-15',
    checkOut: '2026-12-19',
    nights: 4,
    guests: 2,
    rooms: 1,
    pricePerNight: 24500,
    subtotal: 98000,
    taxes: 11760,
    discount: 0,
    totalAmount: 109760,
    status: 'Upcoming',
    guestDetails: {
      fullName: 'Devendra Sharma',
      email: 'guest@yoyohotels.com',
      phone: '+91 98765 43210',
      specialRequests: 'High floor with Gulf sea view please.'
    },
    paymentMethod: 'Demo Card (ending in •••• 4242)',
    createdAt: '2026-11-10T14:30:00Z'
  },
  {
    id: 'YY-2026-67104',
    hotelId: 'yoyo-azure-beach-goa',
    hotelName: 'YoYo Azure Beachfront Resort & Spa',
    destination: 'Goa',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    address: 'Sinquerim Beach Road, Candolim, North Goa, India',
    roomName: 'Portuguese Heritage Garden Room',
    checkIn: '2026-08-10',
    checkOut: '2026-08-14',
    nights: 4,
    guests: 2,
    rooms: 1,
    pricePerNight: 14800,
    subtotal: 59200,
    taxes: 7104,
    discount: 0,
    totalAmount: 66304,
    status: 'Past',
    guestDetails: {
      fullName: 'Devendra Sharma',
      email: 'guest@yoyohotels.com',
      phone: '+91 98765 43210',
      specialRequests: 'Quiet garden area.'
    },
    paymentMethod: 'Demo UPI (devendra@okhdfc)',
    createdAt: '2026-07-28T09:15:00Z'
  }
];

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState(() => {
    try {
      const saved = localStorage.getItem('yoyo_hotel_bookings');
      return saved ? JSON.parse(saved) : INITIAL_BOOKINGS;
    } catch {
      return INITIAL_BOOKINGS;
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('yoyo_wishlist');
      return saved ? JSON.parse(saved) : ['yoyo-royal-mirage-dubai', 'yoyo-rajvilas-palace-jaipur'];
    } catch {
      return ['yoyo-royal-mirage-dubai', 'yoyo-rajvilas-palace-jaipur'];
    }
  });

  const [searchParams, setSearchParams] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    rooms: 1
  });

  // Booking modal state for quick booking from anywhere
  const [bookingModalState, setBookingModalState] = useState({
    isOpen: false,
    hotel: null,
    selectedRoom: null
  });

  useEffect(() => {
    localStorage.setItem('yoyo_hotel_bookings', JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem('yoyo_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (hotelId) => {
    setWishlist(prev => {
      if (prev.includes(hotelId)) {
        return prev.filter(id => id !== hotelId);
      } else {
        return [...prev, hotelId];
      }
    });
  };

  const openBookingModal = (hotel, selectedRoom = null) => {
    setBookingModalState({
      isOpen: true,
      hotel,
      selectedRoom: selectedRoom || (hotel.roomTypes ? hotel.roomTypes[0] : null)
    });
  };

  const closeBookingModal = () => {
    setBookingModalState({
      isOpen: false,
      hotel: null,
      selectedRoom: null
    });
  };

  const createBooking = (bookingData) => {
    const referenceNumber = 'YY-' + new Date().getFullYear() + '-' + Math.floor(100000 + Math.random() * 900000);
    const newBooking = {
      ...bookingData,
      id: referenceNumber,
      status: 'Upcoming',
      createdAt: new Date().toISOString()
    };

    setBookings(prev => [newBooking, ...prev]);
    return newBooking;
  };

  const cancelBooking = (bookingId) => {
    setBookings(prev =>
      prev.map(b => (b.id === bookingId ? { ...b, status: 'Cancelled' } : b))
    );
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        wishlist,
        toggleWishlist,
        searchParams,
        setSearchParams,
        bookingModalState,
        openBookingModal,
        closeBookingModal,
        createBooking,
        cancelBooking
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
