/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#bd9a68ff",
        gold2: "#D3AF6B",
        goldSoft: "#E7C88F",
        red: "#B72041",
        blackDeep: "#0D0D0D",
        blackSoft: "#171717",
        whiteSoft: "#F6F4EF",
      },
      fontFamily: {
        cormorant: "var(--font-cormorant)",
      },
      extend: {
  backgroundImage: {
    "gold-gradient": "linear-gradient(135deg, #d4af7a 0%, #c49a60 40%, #b8874a 70%, #9c6b30 100%)",
  },
},

      /* 👇 ADD THIS */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.35s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
      },
      /* 👆 END */
    },
  },
  plugins: [require("tailwindcss-animate")],
};
