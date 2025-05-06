import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface NavItem {
  icon: IconType;
  name: string;
  route: string;
}
