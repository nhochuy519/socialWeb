import Image from "next/image";
import { PiTelevisionSimple } from "react-icons/pi";
import Link from "next/link";
import Navbar from "@/component/navbar/Navbar";
import Contact from "@/component/contactPeople/Contact";

import Posts from "@/component/posts/Posts";

export default function Home() {
  return (
    <div className="flex justify-between ">
      {/* Left Sidebar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 pt-[70px] p-20 max-w-[850px]">
        <Posts />
      </div>

      {/* Right Sidebar */}
      <Contact />
    </div>
  );
}
