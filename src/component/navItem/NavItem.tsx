import React from "react";
import { NavItemProps } from "./navItem.interface";
import Link from "next/link";
const NavItem: React.FC<NavItemProps> = ({
  href,
  icon,
  name,
  route,
  status,
  onClick,
}) => {
  const Comp: React.ElementType = href ? Link : "div";

  return <Comp></Comp>;
};

export default NavItem;
