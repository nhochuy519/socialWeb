"use client";

import Image from "next/image";
import { PiTelevisionSimple } from "react-icons/pi";
import Link from "next/link";
import Navbar from "@/component/navbar/Navbar";
import Contact from "@/component/contactPeople/Contact";

import Posts from "@/component/posts/Posts";

import ChatPopUp from "@/component/chatPopUp/ChatComp";

import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { AppDispatch } from "@/store";
export default function Home() {
  const value = useSelector((state: RootState) => state.chatReduder.isOpen);
  return (
    <div className="flex justify-between relative ">
      {/* Left Sidebar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 pt-[70px] p-20 max-w-[850px]">
        <Posts />
      </div>

      {/* Right Sidebar */}
      <Contact />

      {value && (
        <div className="fixed bottom-4 right-10 z-[100000]">
          <ChatPopUp />
        </div>
      )}
    </div>
  );
}
