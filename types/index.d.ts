import React from "react";
export interface SidebarLink {
  sectionID: string;
  label: string;
  icon: React.ReactNode;
}

export interface FeaturesTableItem {
  title: string;
  paragraph: string;
  iconUrl: string;
  bgColor: string;
}

export interface SupplyTableItem {
  title: string;
  iconColor: string;
  percentage: number;
}
