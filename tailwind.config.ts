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
				// Softened Uniq colors - menos intensas
				'uniq': {
					'light': '#4A9EFF',
					'medium': '#2E7FDB',
					'dark': '#1B5FA8',
					'neon': '#5BA3FF', // Era #00FFFF, agora mais suave
					'electric': '#6BB2FF', // Era #00D4FF, agora mais suave
					'glow': '#7AC1FF' // Era #33C1FF, agora mais suave
				},
				'neon': {
					'blue': '#4A9EFF', // Suavizado
					'cyan': '#5BA3FF', // Suavizado
					'electric': '#6BB2FF', // Suavizado
					'purple': '#8B5CF6',
					'pink': '#EC4899',
					'green': '#10B981'
				},
				'cyber': {
					'grid': 'rgba(74, 158, 255, 0.05)', // Reduzido de 0.1 para 0.05
					'glow': 'rgba(91, 163, 255, 0.3)', // Reduzido de 0.5 para 0.3
					'shadow': 'rgba(74, 158, 255, 0.15)' // Reduzido de 0.3 para 0.15
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
						boxShadow: '0 0 3px #4A9EFF, 0 0 6px #4A9EFF, 0 0 9px #4A9EFF'
					},
					'50%': {
						boxShadow: '0 0 6px #5BA3FF, 0 0 12px #5BA3FF, 0 0 18px #4A9EFF'
					}
				},
				'glow': {
					'0%': {
						textShadow: '0 0 6px rgba(74, 158, 255, 0.4), 0 0 12px rgba(74, 158, 255, 0.3)'
					},
					'100%': {
						textShadow: '0 0 12px rgba(91, 163, 255, 0.6), 0 0 18px rgba(74, 158, 255, 0.4), 0 0 24px rgba(74, 158, 255, 0.3)'
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
				},
				// Novas animações para ícones do formulário
				'icon-bounce': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				'icon-shake': {
					'0%, 100%': { transform: 'translateX(0)' },
					'25%': { transform: 'translateX(-4px)' },
					'75%': { transform: 'translateX(4px)' }
				},
				'icon-glow': {
					'0%, 100%': { 
						filter: 'drop-shadow(0 0 4px rgba(74, 158, 255, 0.4))',
						transform: 'scale(1)'
					},
					'50%': { 
						filter: 'drop-shadow(0 0 8px rgba(91, 163, 255, 0.6))',
						transform: 'scale(1.1)'
					}
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
				'cyber-glitch': 'cyber-glitch 0.3s ease-in-out infinite',
				// Novas animações para ícones
				'icon-bounce': 'icon-bounce 0.6s ease-in-out',
				'icon-shake': 'icon-shake 0.5s ease-in-out',
				'icon-glow': 'icon-glow 2s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-dark': 'linear-gradient(135deg, #0A0A0B 0%, #1A1A1B 100%)',
				'gradient-cyber': 'linear-gradient(135deg, #0A0A0B 0%, #1A1A1B 50%, #2A2A2B 100%)',
				'gradient-neon': 'linear-gradient(135deg, #5BA3FF 0%, #4A9EFF 50%, #2E7FDB 100%)',
				'gradient-hero-dark': 'linear-gradient(135deg, #0A0A0B 0%, #2E7FDB 50%, #4A9EFF 100%)',
				'gradient-glass': 'linear-gradient(135deg, rgba(26, 26, 27, 0.3) 0%, rgba(42, 42, 43, 0.2) 100%)'
			},
			fontFamily: {
				'cyber': ['Inter', 'system-ui', 'sans-serif']
			},
			boxShadow: {
				'neon': '0 0 12px rgba(74, 158, 255, 0.4), 0 0 24px rgba(74, 158, 255, 0.2)',
				'neon-strong': '0 0 18px rgba(91, 163, 255, 0.6), 0 0 36px rgba(74, 158, 255, 0.3)',
				'cyber': '0 8px 32px rgba(74, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
				'glass': '0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 16px rgba(74, 158, 255, 0.05)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
