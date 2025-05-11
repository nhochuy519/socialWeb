"use client";
import { PiTelevisionSimple } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";

import Link from "next/link";
import Image from "next/image";
import "./navbar.css";

import navItems from "./nav.config";
import { NavItem } from "./nav.interface";

import NavItemComp from "../navItem/NavItem";
const Navbar = () => {
  return (
    <div className="basis-[20%] pt-[70px] ">
      <div className="flex flex-col my-scroll-container sticky top-[76px]  bg-white bottom-0  h-screen overflow-y-hidden hover:overflow-y-auto scrollbar-thumb-slate-700 scrollbar-track-slate-300">
        <div>
          <Link href={"/profile"}>
            <div className="hover:bg-[var(--hover-gray)]  flex items-center gap-2 p-2  cursor-pointer rounded-2xl">
              <div className="overflow-hidden flex items-center justify-center cursor-pointer rounded-full  text-white ">
                <Image
                  src={"/riven.png"}
                  width={46}
                  height={46}
                  alt="Picture of the author"
                />
              </div>

              <div>Huy Minh</div>
            </div>
          </Link>
          {navItems.map((item: NavItem, index: number) => {
            return (
              <NavItemComp
                href={item.route}
                name={item.name}
                key={index}
                imageShow={item.icon}
              />
            );
          })}
        </div>
        <div className="mx-[10px] border-t-1 border-gray-200 my-2"></div>
        <div>
          <div className="p-2 text-lg">Groups</div>
          {navItems.map((item: NavItem, index: number) => {
            return (
              <NavItemComp
                name={item.name}
                key={index}
                imageShow={"/riven.png"}
                rouded={true}
              />
            );
          })}
          <NavItemComp name={"More"} imageShow={"/down-arrow.png"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
