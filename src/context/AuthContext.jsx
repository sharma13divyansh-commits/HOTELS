import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const DEMO_USER = {
  id: 'usr-101',
  name: 'Devendra Sharma',
  email: 'guest@yoyohotels.com',
  phone: '+91 98765 43210',
  tier: 'Gold Elite Member',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
  memberSince: '2024',
  loyaltyPoints: 3450
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('yoyo_auth_user');
      return saved ? JSON.parse(saved) : DEMO_USER;
    } catch {
      return DEMO_USER;
    }
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('yoyo_auth_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('yoyo_auth_user');
    }
  }, [currentUser]);

  const login = (email, password) => {
    // Demo validation
    if (!email || !password) {
      throw new Error('Please enter both email and password.');
    }
    const user = {
      ...DEMO_USER,
      email: email,
      name: email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    };
    setCurrentUser(user);
    return user;
  };

  const signup = (userData) => {
    if (!userData.email || !userData.password) {
      throw new Error('Please fill in all required fields.');
    }
    const newUser = {
      id: 'usr-' + Date.now(),
      name: userData.fullName || 'Guest Traveler',
      email: userData.email,
      phone: userData.phone || '+91 98000 00000',
      tier: 'Silver Member',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      memberSince: '2026',
      loyaltyPoints: 500
    };
    setCurrentUser(newUser);
    return newUser;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const updateProfile = (updatedFields) => {
    setCurrentUser(prev => ({
      ...prev,
      ...updatedFields
    }));
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, signup, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
