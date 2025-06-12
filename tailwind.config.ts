import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
      colors: {
        // New Palette
        'deep-teal': '#005058',
        'golden-ochre': '#C68E17',
        'cream': '#FFF7E8',
        'burnt-sienna': '#E07A5F',
        'light-steel-blue': '#B0C4DE',
        'charcoal-gray': '#36454F',
        'off-white': '#F8F8F8',

        // HSL Mapped Theme Colors (ensure these HSL values correctly map to the new palette)
        background: 'hsl(var(--background))', // Should map to Cream or Off-White
        foreground: 'hsl(var(--foreground))', // Should map to Charcoal Gray
        card: {
          DEFAULT: 'hsl(var(--card))', // Should map to Off-White or Cream
          foreground: 'hsl(var(--card-foreground))', // Should map to Charcoal Gray
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))', // Should map to Deep Teal
          foreground: 'hsl(var(--primary-foreground))', // Should map to Cream or Off-White
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))', // Should map to Golden Ochre
          foreground: 'hsl(var(--secondary-foreground))', // Should map to Charcoal Gray or Cream
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))', // Should map to a lighter Light Steel Blue
          foreground: 'hsl(var(--muted-foreground))', // Should map to a lighter Charcoal Gray
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))', // Should map to Burnt Sienna
          foreground: 'hsl(var(--accent-foreground))', // Should map to Cream or Off-White
        },
        destructive: { // Keep default or update if a specific destructive color from new palette is desired
          DEFAULT: 'hsl(var(--destructive))', // e.g., a darker Burnt Sienna or a specific red
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))', // Should map to a subtle Light Steel Blue or light gray
        input: 'hsl(var(--input))',   // Similar to border
        ring: 'hsl(var(--ring))',     // Should map to an accent like Golden Ochre or Deep Teal
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, rgba(0, 80, 88, 0.85) 0%, rgba(198, 142, 23, 0.7) 60%, rgba(255, 247, 232, 0.5) 100%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-10px)' } },
      },
      // Typography plugin custom styles
      typography: (theme: any) => ({ // Use `any` type for theme to avoid complex type errors here
        DEFAULT: {
          css: {
            color: theme('colors.charcoal-gray'),
            a: {
              color: theme('colors.deep-teal'),
              '&:hover': { color: theme('colors.golden-ochre') },
              textDecoration: 'none',
            },
            h1: { color: theme('colors.charcoal-gray') },
            h2: { color: theme('colors.charcoal-gray') },
            h3: { color: theme('colors.charcoal-gray') },
            h4: { color: theme('colors.charcoal-gray') },
            strong: { color: theme('colors.charcoal-gray') },
            blockquote: {
              color: theme('colors.charcoal-gray'),
              borderLeftColor: theme('colors.deep-teal'),
            },
            ul: { li: { '&::marker': { backgroundColor: theme('colors.deep-teal') } } },
            ol: { li: { '&::marker': { color: theme('colors.deep-teal') } } },
            'code': {
              color: theme('colors.burnt-sienna'),
              backgroundColor: theme('colors.cream'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            'pre': {
              backgroundColor: theme('colors.charcoal-gray'),
              color: theme('colors.cream'),
              padding: theme('spacing.4'),
              borderRadius: theme('borderRadius.md'),
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
              padding: '0',
              borderRadius: '0',
            },
          },
        },
        xl: { // For prose-xl
          css: {
            // You can add specific overrides for prose-xl if needed
            // For example, if h1 in prose-xl should be different from default prose h1
          },
        },
      }),
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography') // Ensure this is present
  ],
};

export default config;