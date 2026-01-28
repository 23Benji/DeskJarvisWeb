module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        sci: {
          base: '#030712',
          panel: '#0f172a',
          cyan: '#06b6d4',
          cyanHover: '#22d3ee',
          purple: '#8b5cf6',
          orange: '#f97316',
          text: '#e2e8f0',
          muted: '#64748b'
        }
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif'],
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at 50% 0%, rgba(6,182,212,0.15) 0%, rgba(3,7,18,0) 70%)',
      }
    },
  },
  plugins: [],
}
