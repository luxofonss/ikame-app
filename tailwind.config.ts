import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "button-gradient":
          "linear-gradient(92deg, #F56522 1.42%, #FDCC24 160.38%)",
        "header-transparent":
          "linear-gradient(180deg, #000 0%, rgba(3, 3, 3, 0.33) 97.88%, rgba(0, 0, 0, 0.00) 100%)",
        "home-bg": "url('/home-bg.png')",
        "download-bg": "url('/download-bg.png')",
        "orange-round": "url('/orange-round.png')",
        control: "url('/control.png')",
        apple: "url('/apple.png')",
        "fb-bg": "url('/fb-bg.png')",
        "google-ads": "url('/google-ads.png')",
        "google-cloud": "url('/google-cloud.png')",
        "google-play": "url('/google-play.png')",
        saver: "url('/saver.png')",
        secure: "url('/secure.png')",
        "team-1": "url('/team-1.png')",
        "team-2": "url('/team-2.png')",
        "team-3": "url('/team-3.png')",
        "team-4": "url('/team-4.png')",
        "team-5": "url('/team-5.png')",
        mitegral: "url('/mitegral.png')",
        ironsource: "url('/ironsource.png')",
        begamob: "url('/begamob.png')",
        career:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url('/team-5.png')",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200",
        "2xl": "1400px",
      },
      colors: {
        main: {
          "0": "#FF8616",
          "2": "#F56522",
        },
      },
    },
  },
  plugins: [],
};
export default config;
