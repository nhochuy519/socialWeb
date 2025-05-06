import Image from "next/image";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoChatbubbleOutline } from "react-icons/io5";
import { CiSettings, CiSearch } from "react-icons/ci";

import Link from "next/link";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header className="z-9999 shadow-md fixed top-0 left-0 right-0 bg-white">
      <div className="flex items-center justify-between p-4">
        <Link href={"/"}>
          <div className="flex items-center justify-center cursor-pointer">
            <span className="text-[var(--tw-color-hover)] text-3xl font-medium">
              H
            </span>
            <span className="text-green-500 text-3xl font-bold ">Social</span>
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
          <div
            className={`${styles.iconCenter}  text-3xl  rounded-full bg-gray-100 `}
          >
            <IoIosNotificationsOutline className="hover:text-[var(--tw-color-hover)]" />
          </div>
          <div
            className={`${styles.iconCenter} text-3xl  rounded-full bg-gray-100 `}
          >
            <IoChatbubbleOutline className="hover:text-[var(--tw-color-hover)]" />
          </div>
          <div
            className={`${styles.iconCenter} text-3xl  rounded-full bg-gray-100 `}
          >
            <Link href={"/settings"}>
              <CiSettings className="hover:text-[var(--tw-color-hover)]" />
            </Link>
          </div>
          <div className="rounded-full h-10 w-10 overflow-hidden ml-4 cursor-pointer ">
            <Link href={"/settings"}>
              <Image
                src={"/riven.png"}
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
