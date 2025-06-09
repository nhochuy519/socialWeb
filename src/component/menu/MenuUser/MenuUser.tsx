"use client";
import NavItemComp from "@/component/navItem/NavItem";
import { contactPeople } from "@/component/contactPeople/contactPeople.config";
import Image from "next/image";
import { ImExit } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import Link from "next/link";

import { useEffect, useState } from "react";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { logout } from "@/lib/actions/auth";
const MenuUser = () => {
  const [user, setUser] = useState<Session["user"] | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      setUser(session.user);
    }
  }, [session]);
  const handleLogout = async () => {
    await logout();
    window.location.href = "/login";
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-between w-full px-[16px] pt-[12px] pb-[4px] g-4">
        <div className="flex items-center gap-4 shadow-lg w-full p-2">
          <Image
            src={user ? user.image : "/riven.png"}
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p>{user?.name}</p>
        </div>
        <div className="flex flex-col items-center w-full text-lg mt-5 gap-4">
          <Link href="/profile" className="w-full">
            <div className="flex items-center gap-4  w-full  cursor-pointer hover:bg-gray-100 p-2">
              <FaUser />
              <p>Profile</p>
            </div>
          </Link>

          <div
            className="flex items-center gap-4  w-full  cursor-pointer hover:bg-gray-100 p-2"
            onClick={() => {
              handleLogout();
            }}
          >
            <ImExit />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuUser;
