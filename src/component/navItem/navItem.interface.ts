import { IconType } from "react-icons";

export interface NavItemProps {
  href?: string;
  rouded?: boolean;
  imageShow: string;
  name: string;
  avatar?: string;
  status?: boolean;
  isOnline?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
