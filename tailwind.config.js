/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'mine-shaft': {
                    '50': '#fafafa',
                    '100': '#f5f5f5',
                    '200': '#e6e6e6',
                    '300': '#d6d6d6',
                    '400': '#a5a5a5',
                    '500': '#767676',
                    '600': '#575757',
                    '700': '#434343',
                    '800': '#2d2d2d',
                    '900': '#1a1a1a',
                    '950': '#0a0a0a',
                },
                'bright-sun': {
                    '50': '#fffbeb',
                    '100': '#fef2c7',
                    '200': '#fee589',
                    '300': '#fdd149',
                    '400': '#fcbe23',
                    '500': '#f69c0a',
                    '600': '#da7505',
                    '700': '#b55108',
                    '800': '#933f0d',
                    '900': '#79340e',
                    '950': '#451903',
                },

            }
        },
    },
    plugins: [],
}