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
        // ── Light tokens — soft pastel ──
        bg:       '#ffffff',   // blush-tinted white
        bg2:      '#fdf8fb',   // slightly deeper blush
        surface:  '#ffffff',
        border:   '#ecd6e8',   // soft pink-purple border
        border2:  '#b39cd0',   // lavender hover border

        // Light accents
        'light-cyan':     '#a8dadc',   // soft teal
        'light-pink':     '#ffc1cc',   // blush pink
        'light-lavender': '#b39cd0',   // muted lavender
        'light-cyan-dim': 'rgba(168,218,220,0.2)',
        'light-pink-dim': 'rgba(255,193,204,0.2)',
        'light-lav-dim':  'rgba(179,156,208,0.2)',

        ink:   '#3a2d3f',   // deep plum — warm dark text
        ink2:  '#6b5472',   // medium plum secondary text
        muted: '#a88cb0',   // muted mauve

        // ── Dark tokens — muted pastel ──
        dark: {
          bg:       '#2c2c2c',
          bg2:      '#353535',
          surface:  '#3d3d3d',
          border:   '#4a4a4a',
          border2:  '#b39cd0',
          ink:      '#e4e4e4',
          ink2:     '#c8c8c8',
          muted:    '#909090',
          cyan:     '#a8dadc',
          'cyan-dim':     'rgba(168,218,220,0.15)',
          pink:     '#ffc1cc',
          'pink-dim':     'rgba(255,193,204,0.15)',
          lavender: '#b39cd0',
          'lavender-dim': 'rgba(179,156,208,0.18)',
        },
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
