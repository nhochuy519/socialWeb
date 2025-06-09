"use client";
import Modal from "@/component/Modal/Modal";
import { useSelector } from "react-redux";
import Header from "../header/header";
import { RootState } from "@/store";
import { SessionProvider } from "next-auth/react";

import { usePathname } from "next/navigation";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const modal = useSelector((state: RootState) => state.modal.isOpen);
  const pathname = usePathname();

  const isNoLayoutRoute = ["/login", "/register"].includes(pathname);
  return (
    <SessionProvider>
      {isNoLayoutRoute ? (
        <>{children}</>
      ) : (
        <div className="w-full relative">
          <Header />
          <div className="w-full  m-auto p-4 bg-gray-100  min-h-screen ">
            {children}
          </div>
          {modal && <Modal />}
        </div>
      )}
    </SessionProvider>
  );
};

export default AppLayout;
