/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#111315',
          900: '#181C20',
          850: '#232830',
          800: '#323942',
          700: '#48525E',
          600: '#64707D',
        },
        gold: {
          50: '#FCF9EE',
          100: '#F7EFCF',
          200: '#EEDDA0',
          300: '#E1C466',
          400: '#D4AF37', // Liquid Gold main
          500: '#B89324',
          600: '#997616',
          700: '#75580C',
          800: '#523C05',
          900: '#2D2001',
        },
        olive: {
          900: '#1A291E',
          800: '#243A2B',
          700: '#2F4C38',
          600: '#3D6148',
          500: '#4E795B',
          400: '#669675',
          100: '#EBF2ED',
          50: '#F5F8F6',
        },
        champagne: {
          50: '#FFFFFF',
          100: '#FAF8F4',
          200: '#F4EFE6',
          300: '#E8E1D3',
          400: '#D4C9B5',
          500: '#B0A28B',
        },
        surface: {
          white: '#FFFFFF',
          cream: '#FAF9F5',
          muted: '#F5F3EB',
          subtle: '#EEEAE0',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cinzel', 'Playfair Display', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 10px 30px -5px rgba(184, 147, 36, 0.25)',
        'gold-glow-lg': '0 20px 50px -10px rgba(184, 147, 36, 0.35)',
        'gold-glow-sm': '0 4px 15px -2px rgba(184, 147, 36, 0.2)',
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.06), 0 0 1px 1px rgba(184, 147, 36, 0.15)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #ECC859 0%, #C8991F 50%, #997312 100%)',
        'gold-gradient-soft': 'linear-gradient(135deg, rgba(184,147,36,0.12) 0%, rgba(184,147,36,0.02) 100%)',
        'light-radial': 'radial-gradient(circle at 50% 30%, #FFFFFF 0%, #FAF8F2 85%)',
        'dark-radial': 'radial-gradient(circle at 50% 30%, #FFFFFF 0%, #FAF6EE 85%)',
      }
    },
  },
  plugins: [],
}
