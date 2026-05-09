/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Roboto"', 'sans-serif'],
                display: ['"Roboto"', 'sans-serif'],
            },
            colors: {
                'brand-primary': '#FF1744',
                'brand-secondary': '#00C853',
                'brand-red': '#FF1744',
                'brand-green': '#00C853',
                'brand-dark': '#01152B',
                'brand-light': '#F4F7FA',
            },
            animation: {
                'bounce-slow': 'bounce 3s infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
        },
    },
    plugins: [
        require('@tailwindcss/postcss')
    ],
}

