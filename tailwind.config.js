import tailwindcssAnimate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		animation: {
  			stainDrift: 'stainDrift 26s ease-in-out infinite',
  		},
  		keyframes: {
  			stainDrift: {
  				'0%, 100%': { transform: 'scale(1) translate3d(0, 0, 0)', opacity: '0.78' },
  				'50%': { transform: 'scale(1.08) translate3d(2vw, -1vh, 0)', opacity: '0.96' },
  			},
  		},
		backgroundImage: {
			disPage: 'radial-gradient(ellipse 54% 92% at 0% 52%, rgb(20 72 110 / 0.86) 0%, rgb(15 48 72 / 0.58) 44%, transparent 78%), radial-gradient(ellipse 52% 88% at 100% 46%, rgb(5 104 108 / 0.82) 0%, rgb(9 57 64 / 0.56) 44%, transparent 78%), linear-gradient(rgb(121 182 202 / 0.06) 1px, transparent 1px), linear-gradient(90deg, rgb(121 182 202 / 0.06) 1px, transparent 1px), linear-gradient(rgb(15 28 39), rgb(15 28 39))',
			stainDrift: 'radial-gradient(circle at 78% 28%, rgb(255 0 0 / 0.8), transparent 16%), radial-gradient(circle at 8% 90%, rgb(255 100 0 / 0.6), transparent 30%)',
		},
		backgroundSize: {
			disGrid: 'auto, auto, 64px 64px, 64px 64px, auto',
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
	plugins: [tailwindcssAnimate],
}
