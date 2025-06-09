"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoChatbubbleOutline } from "react-icons/io5";
import { CiSettings, CiSearch } from "react-icons/ci";

import Link from "next/link";

import styles from "./header.module.css";

import MenuDropDown from "../menu/MenuDd";
import MenuChat from "../menu/MenuChat/MenuChat";
import MenuNotify from "../menu/MenuNotify/MenuNotify";
import MenuUser from "../menu/MenuUser/MenuUser";

import { useSession } from "next-auth/react";
import { Session } from "next-auth";

type CurrentMenu = {
  comp: React.ComponentType;
  active: boolean;
};

const Header = () => {
  const [user, setUser] = useState<Session["user"] | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      setUser(session.user);
      console.log(session);
    }
  }, [session]);

  console.log("user là", user);

  const [menu, setMenu] = useState<CurrentMenu>({
    comp: () => null,
    active: false,
  });

  const notifyRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMenuDropDown = (comp: React.ComponentType) => {
    setMenu((prev) => {
      if (prev.comp === comp) {
        return {
          comp: () => null,
          active: !prev.active,
        };
      } else {
        return { comp, active: true };
      }
    });
  };

  //Bắt click ngoài Notify, Chat, Dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !notifyRef.current?.contains(event.target as Node) &&
        !chatRef.current?.contains(event.target as Node) &&
        !dropdownRef.current?.contains(event.target as Node) &&
        !menuRef.current?.contains(event.target as Node)
      ) {
        setMenu({ comp: () => null, active: false });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="z-9999 shadow-md fixed top-0 left-0 right-0 bg-white ">
      <div className="flex items-center justify-between p-3">
        <Link href={"/"}>
          <div className="w-[70px] h-[50px] relative">
            {" "}
            <Image src={"/newLogo.png"} fill alt="logoweb" objectFit="cover" />
          </div>
        </Link>

        <div className="max-w-2xl flex items-center bg-gray-100 h-full w-full pr-2 pl-2 pt-2 pb-2 rounded-full text-lg">
          <CiSearch className="mr-2 " />
          <input
            className="h-full w-full  focus:outline-none "
            type="Search on Facebook"
            placeholder="search"
          />
        </div>

        <div className="flex align-center justify-center cursor-pointer ">
          {/* Notify Icon */}
          <div
            ref={notifyRef}
            className={`${styles.iconCenter}  text-3xl  rounded-full bg-gray-100 `}
            onClick={() => handleMenuDropDown(MenuNotify)}
          >
            <IoIosNotificationsOutline className="hover:text-[var(--tw-color-hover)]" />
          </div>

          {/* Chat Icon */}
          <div
            ref={chatRef}
            className={`${styles.iconCenter} text-3xl  rounded-full bg-gray-100  `}
            onClick={() => handleMenuDropDown(MenuChat)}
          >
            <IoChatbubbleOutline className="hover:text-[var(--tw-color-hover)]" />
          </div>

          {/* Settings Icon */}
          <div
            className={`${styles.iconCenter} text-3xl  rounded-full bg-gray-100 `}
          >
            <Link href={"/settings"}>
              <CiSettings className="hover:text-[var(--tw-color-hover)]" />
            </Link>
          </div>

          {/* Avatar */}
          <div
            ref={menuRef}
            className="rounded-full h-10 w-10 overflow-hidden ml-4 cursor-pointer "
            onClick={() => handleMenuDropDown(MenuUser)}
          >
            {/* <Link href={"/profile"}> */}
            <Image
              src={user ? user.image : "/riven.png"}
              width={500}
              height={500}
              alt="Picture of the author"
            />
            {/* </Link> */}
          </div>
        </div>
      </div>

      {/* Dropdown */}
      <div ref={dropdownRef} className={menu.active ? "block" : "hidden"}>
        <MenuDropDown>{menu.comp && <menu.comp />}</MenuDropDown>
      </div>
    </header>
  );
};
export default Header;
