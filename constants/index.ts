import { SidebarLink, FeaturesTableItem, SupplyTableItem } from "@/types";

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
    sectionID: "tokenomics",
    label: "Tokenomics",
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

export const supplyTableItems: SupplyTableItem[] = [
  {
    title: "Circulating Supply",
    iconColor:
      "linear-gradient(90deg, #FF389B 0%, rgba(255, 56, 155, 0) 117.72%)",
    percentage: 60,
  },
  {
    title: "Foundation Treasury",
    iconColor:
      "linear-gradient(90deg, #9F29D0 0%, rgba(159, 41, 208, 0) 111.05%)",
    percentage: 20,
  },
  {
    title: "CTRL Labs",
    iconColor:
      "linear-gradient(90deg, #D85D62 0%, rgba(216, 93, 98, 0) 114.32%)",
    percentage: 20,
  },
];
