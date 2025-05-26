module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: '#39ff14', // Neon green
        darkBg: '#111111',
        darkCard: '#1a1a1a',
        textPrimary: '#eaeaea',
        textSecondary: '#a3a3a3',
      },
      backgroundImage : {
        'card1' : "url('assets/quantamind.png')",
        'card2' : "url('assets/kbLogo.png')",
        'card3' : "url('assets/kbLogo.png')",
      }
    },
  },
  plugins: [],
};
