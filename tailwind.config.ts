import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
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
  },
  plugins: [],
};
export default config
