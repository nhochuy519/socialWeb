import { PiTelevisionSimple } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import "./navbar.css";

import navItems from "./nav.config";
import { NavItem } from "./nav.interface";
const Navbar = () => {
  return (
    <div className="basis-[20%]   ">
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
              <Link href={item.route} key={index}>
                <div className="hover:bg-[var(--hover-gray)]  flex items-center gap-2 p-2  cursor-pointer rounded-2xl">
                  <div className=" flex items-center justify-center cursor-pointer bg-[var(--tw-color-hover)] rounded-full p-2 text-white ">
                    <item.icon className="text-3xl" />
                  </div>

                  <div>{item.name}</div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mx-[10px] border-t-1 border-gray-200 my-2"></div>
        <div>
          <div className="p-2 text-lg">Groups</div>
          {navItems.map((item: NavItem, index: number) => {
            return (
              <Link href={item.route} key={index}>
                <div className="hover:bg-[var(--hover-gray)]  flex items-center gap-2 p-2  cursor-pointer rounded-2xl">
                  <div className=" flex items-center justify-center cursor-pointer bg-[var(--tw-color-hover)] rounded-full p-2 text-white ">
                    <item.icon className="text-3xl" />
                  </div>

                  <div>{item.name}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
