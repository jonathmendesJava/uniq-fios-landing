
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Optimized Dark Theme Colors
				'dark': {
					'900': '#0A0A0B',
					'800': '#1A1A1B',
					'700': '#2A2A2B',
					'600': '#3A3A3B',
					'500': '#4A4A4B',
					'400': '#6A6A6B',
					'300': '#8A8A8B',
					'200': '#AAAAAB',
					'100': '#CACACA',
					'50': '#EAEAEA'
				},
				// Optimized Uniq colors
				'uniq': {
					'light': '#4A9EFF',
					'medium': '#2E7FDB',
					'dark': '#1B5FA8',
					'neon': '#5BA3FF',
					'electric': '#6BB2FF',
					'glow': '#7AC1FF'
				},
				'neon': {
					'blue': '#4A9EFF',
					'cyan': '#5BA3FF',
					'electric': '#6BB2FF',
					'purple': '#8B5CF6',
					'pink': '#EC4899',
					'green': '#10B981'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				// SIMPLIFIED keyframes for better performance
				'fade-up': {
					from: {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				'neon-pulse': {
					'0%, 100%': {
						transform: 'scale(1)',
						opacity: '0.8'
					},
					'50%': {
						transform: 'scale(1.05)',
						opacity: '1'
					}
				},
				'glow': {
					'0%': {
						filter: 'brightness(1)'
					},
					'100%': {
						filter: 'brightness(1.1)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-up': 'fade-up 0.6s ease-out forwards',
				'fade-in': 'fade-in 0.4s ease-out forwards',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'float': 'float 3s ease-in-out infinite',
				'float-slow': 'float-slow 4s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-dark': 'linear-gradient(135deg, #0A0A0B 0%, #1A1A1B 100%)',
				'gradient-neon': 'linear-gradient(135deg, #5BA3FF 0%, #4A9EFF 50%, #2E7FDB 100%)',
				'gradient-hero-dark': 'linear-gradient(135deg, #0A0A0B 0%, #2E7FDB 50%, #4A9EFF 100%)'
			},
			fontFamily: {
				'cyber': ['Inter', 'system-ui', 'sans-serif']
			},
			boxShadow: {
				'neon': '0 0 8px rgba(74, 158, 255, 0.3)',
				'neon-strong': '0 0 12px rgba(91, 163, 255, 0.4)',
				'cyber': '0 4px 16px rgba(74, 158, 255, 0.1)',
				'glass': '0 4px 16px rgba(0, 0, 0, 0.2)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
