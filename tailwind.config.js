/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:           '#faf8f5',
        bg2:          '#f4f0eb',
        surface:      '#ffffff',
        border:       '#e8e0d8',
        border2:      '#d4c8be',
        mint:         '#a8d8b0',
        'mint-light': '#dff2e3',
        lavender:     '#c4b5e8',
        blush:        '#f0b8c4',
        peach:        '#f5c9a0',
        sky:          '#a8d0e8',
        ink:          '#2d2820',
        ink2:         '#5a5048',
        muted:        '#9a8e84',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        serif:   ['var(--font-lora)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-up-d1': 'fadeUp 0.6s 0.15s ease forwards',
        'fade-up-d2': 'fadeUp 0.6s 0.30s ease forwards',
        'fade-up-d3': 'fadeUp 0.6s 0.45s ease forwards',
        'fade-up-d4': 'fadeUp 0.6s 0.60s ease forwards',
        'blink':      'blink 1s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
