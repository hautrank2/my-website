tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#2979a9',
        clifford: '#da373d',
        foreground: {
          DEFAULT: '#fffff', // Neutral text color
          subtle: '#4a5568', // Subtle variation
        },
        neutral: {
          50: '#FFFFFF', // Pure white
          100: '#F9FAFB', // Very light gray
          200: '#F3F4F6', // Light gray
          300: '#E5E7EB', // Soft gray
          400: '#D1D5DB', // Medium light gray
          500: '#9CA3AF', // Neutral gray
          600: '#6B7280', // Medium dark gray
          700: '#4B5563', // Dark gray
          800: '#374151', // Very dark gray
          900: '#1F2937', // Near black
          950: '#111827', // Pure blackish gray
        },
        danger: {
          DEFAULT: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Custom sans-serif stack
        serif: ['Merriweather', 'serif'], // Custom serif stack
        mono: ['Fira Code', 'monospace'], // Custom monospace stack
        custom: ['"Your Custom Font"', 'sans-serif'], // Example custom font
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: '2.25rem', // 36px
              lineHeight: '2.5rem', // 40px
              fontWeight: '700', // Bold
              color: '#1f2937', // Dark text color
            },
            h2: {
              fontSize: '1.875rem', // 30px
              lineHeight: '2.25rem', // 36px
              fontWeight: '600', // Semi-bold
              color: '#374151', // Slightly lighter
            },
            h3: {
              fontSize: '1.5rem', // 24px
              lineHeight: '2rem', // 32px
              fontWeight: '600',
              color: '#4b5563',
            },
            h4: {
              fontSize: '1.25rem', // 20px
              lineHeight: '1.75rem', // 28px
              fontWeight: '500', // Medium
              color: '#6b7280',
            },
            h5: {
              fontSize: '1.125rem', // 18px
              lineHeight: '1.5rem', // 24px
              fontWeight: '500',
              color: '#6b7280',
            },
            p: {
              fontSize: '1rem', // 16px
              lineHeight: '1.75rem', // 28px
              color: '#4b5563', // Body text color
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftWidth: '4px',
              borderLeftColor: '#1d4ed8', // Primary color
              color: '#374151',
              paddingLeft: '1rem',
            },
          },
        },
      },
    },
  },
};
