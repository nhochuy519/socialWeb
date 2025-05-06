import { IconType } from "react-icons";

export interface NavItemProps {
  href?: string;
  icon: IconType;
  name: string;
  route?: string;
  status?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
