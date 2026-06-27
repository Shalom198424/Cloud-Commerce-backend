/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#060806',
                card: 'rgba(10, 14, 10, 0.7)',
                'card-border': 'rgba(255, 255, 255, 0.05)',
                emerald: {
                    500: '#10b981',
                    600: '#059669',
                },
                sage: '#84cc16',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
            animation: {
                'pulse-emerald': 'pulse-emerald 3s infinite',
                'bloom': 'bloom 1s ease-out forwards',
            },
            keyframes: {
                'pulse-emerald': {
                    '0%': { boxShadow: '0 0 0 0 rgba(16, 185, 129, 0.4)' },
                    '70%': { boxShadow: '0 0 0 15px rgba(16, 185, 129, 0)' },
                    '100%': { boxShadow: '0 0 0 0 rgba(16, 185, 129, 0)' },
                },
                'bloom': {
                    '0%': { opacity: '0', transform: 'scale(0.95) translateY(10px)' },
                    '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
