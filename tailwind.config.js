/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        virtue: {
          purple: '#4B2E83',
          deepPurple: '#2E1A55',
          burgundy: '#8B1538',
          accent: '#6B3FA0',
          gold: '#D4AF37',
          black: '#0a0a0a',
          charcoal: '#2D2D2D',
          grey: '#666666',
          light: '#F5F2EB',
          white: '#FFFFFF',
          surface: '#ffffff',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #4B2E83 0%, #8B1538 100%)',
        'brand-gradient-hover': 'linear-gradient(135deg, #3a226b 0%, #70102d 100%)',
        'soft-glow': 'radial-gradient(circle at 50% 50%, rgba(75, 46, 131, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
      },
      boxShadow: {
        'soft': '0 20px 40px -15px rgba(75, 46, 131, 0.15)',
        'glow': '0 0 20px rgba(75, 46, 131, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: ['nativewind/plugin'],
}
