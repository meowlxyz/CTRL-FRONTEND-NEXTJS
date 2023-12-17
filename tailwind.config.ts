import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF389B",
        dark: "#000000",
        light: "#FFFFFF",
        paragraph: "#383938",
        "dark-grey": "#121212",
        "dark-grey-border": "#1F1F1F",
        "muted-grey": "#717171",
        "ligt-muted-grey": "#999598",
        "light-muted-white": "#E5E0E4",
      },
      fontSize: {
        "fs-large-bold": "1.3125rem", // 21px
        "fs-medium-normal": "1.125rem", // 18px
        "fs-huge-extrabold": "8.125rem", // 130px
        "fs-larger-medium": "1.375rem", // 22px
        "fs-xlarge-extrabold": "4.6875rem", // 75px
        "fs-xl-bold": "1.75rem", // 28px
        "fs-large-medium": "1.25rem", // 20px
        "fs-larger-bold": "1.5625rem", // 25px
      },
      backgroundImage: {
        "small-ellipse-gradient":
          "radial-gradient(174.47% 174.47% at 22.23% -26.02%, #BDBDBD 0%, #0C0C0C 58.96%, #000000 100%)",
        "medium-ellipse-gradient":
          "radial-gradient(188.67% 188.67% at 17.98% -47.13%, #9E9E9E 0%, #242424 43.46%, #0C0C0C 58.96%, #010101 76.94%, #000000 100%)",
        "large-ellipse-gradient":
          "radial-gradient(188.67% 188.67% at 17.98% -47.13%, #9E9E9E 0%, #242424 43.46%, #0C0C0C 58.96%, #010101 76.94%, #000000 100%)",
      },
    },
  },
  plugins: [],
};
export default config
