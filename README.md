# YoYo Hotels – Premium Hotel Booking Website

> **Tagline:** "Stay Better. Travel Happier."  
> **Brand Identity:** Modern, luxurious, elegant, and minimal premium hospitality platform inspired by world-class travel services like Booking.com, Agoda, and Marriott.

---

## 🌟 Brand Design & Color Palette

- **Primary:** Deep Navy Blue (`#142B45`)
- **Secondary / Accent:** Warm Gold (`#D6AD60`)
- **Background:** Off-White (`#F8F8F5`)
- **Text:** Dark Charcoal (`#222222`)
- **Typography:** Google Fonts — *Playfair Display* (Editorial Serif Headings) & *Poppins* (Modern Sans-Serif Body)

---

## 🚀 Key Features & Pages

### 1. Navigation Bar (Sticky & Responsive)
- Elegant YoYo Hotels crown logo with custom gold branding.
- Sticky navigation bar that switches from transparent to frosted glass on scroll.
- Direct navigation links: Home, Explore Hotels, Destinations, Offers, About Us, Contact Us.
- Interactive user dropdown for signed-in travelers (Gold Elite Member, status, loyalty points).
- Real-time **"My Bookings"** pill displaying active upcoming reservations count.
- Responsive mobile drawer menu.

### 2. Homepage
- **Hero Section:** Full-width cinematic luxury hotel background, prominent heading *"Discover Your Perfect Stay"*, subtitle, and trust stats (500+ properties, best rate guarantee, free cancellation).
- **Interactive Hotel Search & Booking Form:**
  - Destination / City selector (Dubai, Goa, Mumbai, Delhi, Manali, Jaipur)
  - Interactive Check-in & Check-out date pickers
  - Guests & Rooms popover selector with counter controls
  - Functional *"Search Hotels"* button that filters results and routes to matching listings.
- **Featured Destinations:** Visually stunning destination cards for Dubai, Goa, Mumbai, Delhi, Manali, and Jaipur with hotel counts, descriptions, and direct filters.
- **Featured Hotels:** 8+ handpicked sample hotels with realistic rates, ratings, badges, amenities, and action buttons (*View Details* and *Book Now*).
- **Why Choose YoYo Hotels?** 4 feature cards:
  1. Best Price Guarantee
  2. Secure Booking
  3. 24/7 Customer Support
  4. Premium Hotel Experiences
- **Special Offers:** Promotional banners with discount codes (`YOYO20`, `WEEKENDESCAPE`, `ROYALVIBE`), one-click coupon copying, and explore links.
- **Customer Testimonials:** Verified guest reviews with star ratings, travel editor quotes, and avatar photos.
- **Newsletter Subscription:** VIP deals email signup with instant validation and confirmation message.

### 3. Hotel Listing Page (`/hotels`)
- Real-time search by hotel name, landmark, or city.
- Interactive price range slider (₹8,000 to ₹35,000+).
- Star rating filters (5-Star, 4-Star, 3-Star).
- Amenities filters (WiFi, Pool, Spa, Ocean View, Breakfast, Gym, Chauffeur, Pet Friendly).
- Sort options: Recommended, Price (Low to High), Price (High to Low), Highest Guest Rating.
- Destination quick chips (Dubai, Goa, Mumbai, Delhi, Manali, Jaipur).
- Live counter (*"Showing X of Y Luxury Hotels"*).
- Responsive mobile filter modal drawer.
- Empty states with one-click filter reset.

### 4. Hotel Details Page (`/hotels/:id`)
- High-resolution hotel photo gallery with full-screen lightbox photo previewer.
- Hotel name, address, star rating, verified guest review score, and badge.
- Detailed property description and 5-point highlights list.
- Available room types (Deluxe Room, Executive Suite, Presidential Beach Villa) with room images, size, bed type, amenities, and *"Reserve This Room"* buttons.
- Comprehensive amenities grid with custom icons.
- Hotel policies: Check-in/Check-out hours, cancellation rules, children/infant policy, pet friendliness.
- **Interactive Location Map:** Custom styled map with landmarks (Hotel, Waterfront/Beach, Airport, Heritage Plaza), zoom controls, satellite/luxury view toggle, and Google Maps direction link.
- Verified guest reviews list with detailed feedback.
- Sticky reservation summary box on the right.

### 5. 7-Step Functional Booking Reservation Flow
A guided, multi-step reservation system:
1. **Step 1:** Hotel selection and property overview.
2. **Step 2:** Room type choice (Deluxe, Suite, Villa).
3. **Step 3:** Stay dates (interactive date calculation of nights).
4. **Step 4:** Guests & Rooms counter.
5. **Step 5:** Primary guest information (Full Name, Email, Phone, Special Requests) with form validation.
6. **Step 6:** Review & price breakdown (Room rate × nights, 12% hospitality taxes, promo code field supporting `YOYO20` for instant 20% discount, total calculation, demo payment selector).
7. **Step 7:** Instant confirmation with unique reference number (e.g. `YY-2026-XXXXXX`), celebratory confetti animation, print receipt, and link to *"My Bookings"*.
*(Clearly identified as a simulated demo booking system; no real cards are charged).*

### 6. Authentication System (`/login` & `/signup`)
- Dedicated Login and Sign Up pages with form validation and password visibility toggles.
- Pre-seeded with a demo user account (*Devendra Sharma*, Gold Elite Member).
- One-click demo login button for quick evaluation.
- LocalStorage persistence for seamless user experience across pages.

### 7. My Bookings Dashboard (`/my-bookings`)
- Tabbed dashboard: **Upcoming Stays**, **Past Stays**, **Cancelled Stays**, and **Profile & Settings**.
- Action to view printable confirmation voucher modal.
- Ability to cancel eligible demo bookings with live status updates.
- Profile update form to change traveler contact info and preferences.

### 8. About Us & Contact Us Pages
- **About Us (`/about`):** YoYo Hotels brand story, mission, vision, core pillars, and luxury metrics (500+ properties, 1.2M+ guests).
- **Contact Us (`/contact`):** Validated contact form, global offices (Dubai, Mumbai, Delhi), 24/7 hotline numbers, concierge email, and interactive FAQ accordion.
- **Legal:** Terms & Conditions (`/terms`) and Privacy Policy (`/privacy`).

---

## 💻 Tech Stack

- **React 18** (Modern functional components, hooks, Context API)
- **Vite 5** (Ultra-fast build tool and development server)
- **Tailwind CSS 3** (Custom luxury color palette, shadows, glassmorphism)
- **React Router DOM 6** (Multi-page routing and navigation)
- **Lucide React** (Clean, modern iconography)
- **Canvas Confetti** (Celebratory animation upon booking confirmation)

---

## 🛠️ How to Run Locally

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Run the development server
npm run dev

# The site will be running at:
# http://localhost:3000
```
