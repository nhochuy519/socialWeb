"use client";

import React from "react";
import { useState } from "react";
import { NavItemProps } from "./navItem.interface";
import Link from "next/link";
import Image from "next/image";
import { CiUser } from "react-icons/ci";
const NavItemComp: React.FC<NavItemProps> = ({
  href,
  rouded,
  name,
  imageShow,
  isOnline = false,
  status,
  onClick,
}) => {
  const [online, setOnline] = useState<boolean>(isOnline);
  const props: { [subject: string]: unknown } = {};
  const Comp: React.ElementType = href ? Link : "div";
  if (href) {
    props["href"] = href;
  }
  if (onClick) {
    props["onClick"] = onClick;
  }
  return (
    <Comp {...props}>
      <div className="hover:bg-[var(--hover-gray)]  flex items-center gap-2 p-2  cursor-pointer rounded-2xl">
        <div className=" flex items-center justify-center cursor-pointer  overflow-hidden  ">
          {imageShow ? (
            <Image
              src={imageShow}
              width={46}
              height={46}
              alt="Picture of the author"
              className={rouded ? "rounded-full" : ""}
            />
          ) : (
            <CiUser className="text-3xl" />
          )}
        </div>

        <div>{name}</div>
        {status &&
          (online ? (
            <div className="w-2 h-2 bg-green-500 rounded-full absolute right-4"></div>
          ) : (
            <div className="w-2 h-2 bg-red-500 rounded-full absolute right-4"></div>
          ))}
      </div>
    </Comp>
  );
};

export default NavItemComp;
