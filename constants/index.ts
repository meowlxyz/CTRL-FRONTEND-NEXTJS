import { SidebarLink, FeaturesTableItem } from "@/types";

export const sidebarLinks: SidebarLink[] = [
  {
    sectionID: "ctrl",
    label: "•   What is ctrl",
  },
  {
    sectionID: "staking",
    label: "Staking",
  },
  {
    sectionID: "revenue",
    label: "Revenue Share",
  },
  {
    sectionID: "tokeneconomice",
    label: "Tokeneconomice",
  },
];

export const featuresTableItems: FeaturesTableItem[] = [
  {
    title: "Price Bot",
    paragraph:
      "Our gateway feature, offering price checks, chat summaries, and sentiment analysis.",
    iconUrl: "/icons/label.svg",
    bgColor: "#311A26",
  },
  {
    title: "Seamless Integration",
    paragraph: "Access the terminal without leaving your Telegram chat.",
    iconUrl: "/icons/document.svg",
    bgColor: "#1A2831",
  },
  {
    title: "Advanced Trading Tools",
    paragraph:
      "Real-time charts, detailed portfolio management, manage positions and in-depth token information.",
    iconUrl: "/icons/trade.svg",
    bgColor: "#132417",
  },
];
