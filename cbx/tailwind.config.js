/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            animation: {
                slice: "slice 2s ease",
            },
            keyframes: {
                slice: {
                    "0%": {
                        "background-size": "0% 0%",
                        "background-position": "center center",
                        "background-repeat": "no-repeat",
                    },
                    "100%": {
                        "background-size": "100% 100%",
                        "background-position": "center center",
                        "background-repeat": "no-repeat",
                    },
                },
            },
        },
    },
    plugins: [],
};
