import { IconType } from "react-icons";
export interface ButtonType {
  icon?: IconType;
  text?: string;
  onClick?: () => void;
  className?: string;
}
