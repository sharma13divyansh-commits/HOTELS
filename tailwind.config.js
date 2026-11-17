/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0B1929',
          800: '#102237',
          DEFAULT: '#142B45',
          700: '#142B45',
          600: '#1D3B5E',
          500: '#2A5280',
          100: '#E7ECF2',
          50: '#F3F6FA',
        },
        gold: {
          DEFAULT: '#D6AD60',
          dark: '#B88F40',
          light: '#E8CA82',
          subtle: '#FAF4E8',
          50: '#FDFBF7',
        },
        charcoal: {
          DEFAULT: '#222222',
          light: '#4B5563',
          muted: '#6B7280',
        },
        offwhite: {
          DEFAULT: '#F8F8F5',
          warm: '#F3F3EE',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -5px rgba(20, 43, 69, 0.08), 0 4px 6px -2px rgba(20, 43, 69, 0.03)',
        'luxury-hover': '0 20px 35px -5px rgba(20, 43, 69, 0.15), 0 8px 10px -4px rgba(20, 43, 69, 0.06)',
        'gold': '0 8px 25px -4px rgba(214, 173, 96, 0.35)',
      }
    },
  },
  plugins: [],
}
