import { ReactNode } from "react";

// Define types for the context and props
export interface SidebarContextType {
  expanded: boolean;
}

export interface SidebarProps {
  children: ReactNode;
}

export interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
}
