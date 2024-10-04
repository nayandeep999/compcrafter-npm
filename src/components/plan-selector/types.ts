import { ChangeEvent, ReactNode } from "react";

export interface PlanSelectorContextType {
  value: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface PlanSelectorGroupProps {
  value: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
}

export interface PlanSelectorProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  value: string | number;
}

export interface PlanProps {
  icon: ReactNode;
  title: string;
  features: string[];
  price: number;
}
