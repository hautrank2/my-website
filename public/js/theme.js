tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#2979a9',
        clifford: '#da373d',
        foreground: {
          DEFAULT: '#fff', // Neutral text color
          subtle: '#4a5568', // Subtle variation
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Custom sans-serif stack
        serif: ['Merriweather', 'serif'], // Custom serif stack
        mono: ['Fira Code', 'monospace'], // Custom monospace stack
        custom: ['"Your Custom Font"', 'sans-serif'], // Example custom font
      },
    },
  },
};
