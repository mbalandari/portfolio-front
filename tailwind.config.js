/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                background: '#FAFAFA',
                primaryText: '#1E1E1E',
                secondaryText: '#6B6B6B',
                accent: '#4A90E2',
                highlight: '#8AB4F8',
            },
        },
    },
    plugins: [],
};
