tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--color-primary))',
        clifford: 'rgba(var(--color-clifford))',
        foreground: {
          DEFAULT: 'rgba(var(--color-foreground))',
          subtitle: 'rgba(var(--color-foreground-subtitle))',
        },
        background: {
          DEFAULT: 'rgba(var(--color-background))',
        },
        neutral: {
          50: 'rgba(var(--color-neutral-50))',
          100: 'rgba(var(--color-neutral-100))',
          200: 'rgba(var(--color-neutral-200))',
          300: 'rgba(var(--color-neutral-300))',
          400: 'rgba(var(--color-neutral-400))',
          500: 'rgba(var(--color-neutral-500))',
          600: 'rgba(var(--color-neutral-600))',
          700: 'rgba(var(--color-neutral-700))',
          800: 'rgba(var(--color-neutral-800))',
          900: 'rgba(var(--color-neutral-900))',
          950: 'rgba(var(--color-neutral-950))',
        },
        danger: 'rgba(var(--color-danger))',
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'], // Custom sans-serif stack
        serif: ['Merriweather', 'serif'], // Custom serif stack
        mono: ['Fira Code', 'monospace'], // Custom monospace stack
        custom: ['"Your Custom Font"', 'sans-serif'], // Example custom font
      },
    },
  },
};
