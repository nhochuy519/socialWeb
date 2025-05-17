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
  lastTextChat,
  textSize,
  imageSize = 36,
  readMessageStatus = false,
  iconChat = false,
  onClick,
}) => {
  const [online, setOnline] = useState<boolean>(isOnline);
  const [readMessage, setReadMessages] = useState<boolean>(readMessageStatus);
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
        <div className=" flex items-center justify-center cursor-pointer   relative rounded-full ">
          {imageShow ? (
            <Image
              src={imageShow}
              width={imageSize}
              height={imageSize}
              alt="Picture of the author"
              className={rouded ? "rounded-full" : ""}
            />
          ) : (
            <CiUser className="text-3xl" />
          )}
          {online && (
            <div className="w-2 h-2 bg-green-500 absolute right-0 rounded-full bottom-0"></div>
          )}
          {iconChat && (
            <div className=" absolute right-0 rounded-full bottom-0">
              <Image
                src={"/chatIcon.png"}
                width={20}
                height={20}
                alt="Chat icon"
              />
            </div>
          )}
        </div>

        <div className={`${textSize}`}>
          <div> {name}</div>
          <div>{lastTextChat}</div>
        </div>
        {status &&
          (readMessage ? (
            <div className="w-2 h-2 bg-blue-500 rounded-full absolute right-4"></div>
          ) : (
            <div></div>
          ))}
      </div>
    </Comp>
  );
};

export default NavItemComp;
