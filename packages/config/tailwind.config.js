module.exports = {
  content: [
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#a78bfa',
          secondary: '#7dd3fc',
          accent: '#f472b6',
          neutral: '#d6d3d1',
          'base-100': '#212121',
          info: '#93E6FB',
          success: '#4ade80',
          warning: '#fde047',
          error: '#f87171',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
