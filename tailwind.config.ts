
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
				// Enhanced Dark Theme Colors
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
				// Enhanced Uniq colors with neon variants
				'uniq': {
					'light': '#00AEEF',
					'medium': '#0077C8',
					'dark': '#004C7F',
					'neon': '#00FFFF',
					'electric': '#00D4FF',
					'glow': '#33C1FF'
				},
				'neon': {
					'blue': '#00AEEF',
					'cyan': '#00FFFF',
					'electric': '#00D4FF',
					'purple': '#8B5CF6',
					'pink': '#EC4899',
					'green': '#10B981'
				},
				'cyber': {
					'grid': 'rgba(0, 174, 239, 0.1)',
					'glow': 'rgba(0, 255, 255, 0.5)',
					'shadow': 'rgba(0, 174, 239, 0.3)'
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
				'fade-up': {
					from: {
						opacity: '0',
						transform: 'translateY(50px)'
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
						boxShadow: '0 0 5px #00AEEF, 0 0 10px #00AEEF, 0 0 15px #00AEEF'
					},
					'50%': {
						boxShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00AEEF'
					}
				},
				'glow': {
					'0%': {
						textShadow: '0 0 10px rgba(0, 174, 239, 0.8), 0 0 20px rgba(0, 174, 239, 0.6)'
					},
					'100%': {
						textShadow: '0 0 20px rgba(0, 255, 255, 1), 0 0 30px rgba(0, 174, 239, 0.8), 0 0 40px rgba(0, 174, 239, 0.6)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-20px) rotate(5deg)' }
				},
				'spin-slow': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				},
				'scan-line': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100vw)' }
				},
				'cyber-glitch': {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-up': 'fade-up 0.8s ease-out forwards',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite alternate',
				'float': 'float 3s ease-in-out infinite',
				'float-slow': 'float-slow 6s ease-in-out infinite',
				'spin-slow': 'spin-slow 8s linear infinite',
				'scan-line': 'scan-line 3s linear infinite',
				'cyber-glitch': 'cyber-glitch 0.3s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-dark': 'linear-gradient(135deg, #0A0A0B 0%, #1A1A1B 100%)',
				'gradient-cyber': 'linear-gradient(135deg, #0A0A0B 0%, #1A1A1B 50%, #2A2A2B 100%)',
				'gradient-neon': 'linear-gradient(135deg, #00FFFF 0%, #00AEEF 50%, #0077C8 100%)',
				'gradient-hero-dark': 'linear-gradient(135deg, #0A0A0B 0%, #0077C8 50%, #00AEEF 100%)',
				'gradient-glass': 'linear-gradient(135deg, rgba(26, 26, 27, 0.3) 0%, rgba(42, 42, 43, 0.2) 100%)'
			},
			fontFamily: {
				'cyber': ['Inter', 'system-ui', 'sans-serif']
			},
			boxShadow: {
				'neon': '0 0 20px rgba(0, 174, 239, 0.8), 0 0 40px rgba(0, 174, 239, 0.4)',
				'neon-strong': '0 0 30px rgba(0, 255, 255, 1), 0 0 60px rgba(0, 174, 239, 0.6)',
				'cyber': '0 8px 32px rgba(0, 174, 239, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
				'glass': '0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 16px rgba(0, 174, 239, 0.1)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
