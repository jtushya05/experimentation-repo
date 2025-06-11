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
      typography: (theme) => ({
        DEFAULT: { // This targets the base 'prose' class
          css: {
            color: theme('colors.charcoal-gray'), // Default text color
            a: {
              color: theme('colors.deep-teal'),
              '&:hover': {
                color: theme('colors.golden-ochre'),
              },
              textDecoration: 'none', // Optional: remove underline by default
            },
            h1: { color: theme('colors.charcoal-gray') },
            h2: { color: theme('colors.charcoal-gray') },
            h3: { color: theme('colors.charcoal-gray') },
            h4: { color: theme('colors.charcoal-gray') },
            strong: { color: theme('colors.charcoal-gray') }, // Or a slightly darker shade
            blockquote: {
              color: theme('colors.charcoal-gray'),
              borderLeftColor: theme('colors.deep-teal'),
            },
            ul: {
              li: {
                '&::marker': { backgroundColor: theme('colors.deep-teal') }, // For bullets
              },
            },
            ol: {
              li: {
                '&::marker': { color: theme('colors.deep-teal') }, // For numbers
              },
            },
            // Add more overrides as needed for code blocks, etc.
            // Example for code blocks (inline and block)
            'code': {
              color: theme('colors.burnt-sienna'),
              backgroundColor: theme('colors.cream'), // A light background for code
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            'code::before': { content: '""' }, // Remove default backticks for inline code
            'code::after': { content: '""' },  // Remove default backticks for inline code
            'pre': { // For fenced code blocks
              backgroundColor: theme('colors.charcoal-gray'), // Dark background for code blocks
              color: theme('colors.cream'),
              padding: theme('spacing.4'),
              borderRadius: theme('borderRadius.md'),
            },
            'pre code': { // Reset inline code styles within a pre block
              backgroundColor: 'transparent',
              color: 'inherit',
              padding: '0',
              borderRadius: '0',
            },
          },
        },
        // Optional: Define styles for prose-xl if needed, or let it inherit and scale
        xl: {
          css: {
            // Larger font sizes are applied by default by prose-xl
            // You can override specific xl styles here if necessary
            // For example, if you want xl headings to be a different color
            // h1: { color: theme('colors.anotherShade') },
          }
        }
      }),
      colors: {
        'deep-teal': '#005058',
        'golden-ochre': '#C68E17',
        'cream': '#FFF7E8',
        'burnt-sienna': '#E07A5F',
        'light-steel-blue': '#B0C4DE',
        'charcoal-gray': '#36454F',
        'off-white': '#F8F8F8',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, rgba(0, 80, 88, 0.95) 0%, rgba(106, 68, 11, 0.85) 100%)',
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
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate')
  ],
};

export default config;