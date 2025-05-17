import { IconType } from "react-icons";

export interface NavItemProps {
  href?: string;
  rouded?: boolean;
  imageShow: string;
  name: string;
  avatar?: string;
  status?: boolean;
  isOnline?: boolean;
  lastTextChat?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  textSize?: "text-lg" | "text-sm";
  imageSize?: "56" | "36";
  readMessageStatus?: boolean;
  iconChat?: boolean;
}
