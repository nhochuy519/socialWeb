"use client";

import React from "react";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { IoMdAdd } from "react-icons/io";

import { FaPen } from "react-icons/fa";

import SliderCard from "@/component/sliderStory/SliderStory";

import StorySLide from "@/component/storySlide/StorySlide";

import FriendCard from "@/component/slideFriend/FriendCard";

import Link from "next/link";

import { useRouter, usePathname } from "next/navigation";

interface RouteProfile {
  title: string;
  href: string;
}

const routeProfilePage: RouteProfile[] = [
  {
    title: "Post",
    href: "/profile",
  },
  {
    title: " about",
    href: "/profile/about",
  },
  {
    title: "Friends",
    href: "/profile/friends",
  },
  {
    title: "Photos",
    href: "/profile/photos",
  },
  {
    title: "Videos",
    href: "/profile/videos",
  },
];

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  const patch = usePathname();
  console.log(patch);
  return (
    <div className="pt-[76px]">
      <div className="max-w-[1100px] bg-white mx-auto ">
        <div className="rounded-bl-2xl rounded-br-2xl h-[400px] w-full bg-[url('https://cdnb.artstation.com/p/assets/images/images/072/485/995/4k/chengwei-pan-1.jpg?1707463211')] bg-cover bg-center bg-no-repeat"></div>
        <div className="flex items-center justify-between p-5 ">
          <div className="flex items-center gap-5 ">
            <div>
              <Image
                width={168}
                height={168}
                alt="avatar"
                src={"/riven.png"}
                className="rounded-full"
              />
            </div>

            <div>
              <div className="text-2xl font-medium  ">Huy Minh</div>
              <div className="font-medium text-gray-400">31 friends</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button className="bg-blue-500">
              <IoMdAdd /> Add to news
            </Button>
            <Button className="bg-gray-100 text-black">
              <FaPen /> Edit profile
            </Button>
          </div>
        </div>
        {/*List add friends */}
        <div>
          <SliderCard
            card={FriendCard}
            data={[
              { name: "Huy", imageUrl: "/riven.png", mutualFriends: 10 },
              { name: "Minh", imageUrl: "/riven.png", mutualFriends: 5 },
              { name: "Minh", imageUrl: "/riven.png", mutualFriends: 5 },
              { name: "Minh", imageUrl: "/riven.png", mutualFriends: 5 },
              { name: "Minh", imageUrl: "/riven.png", mutualFriends: 5 },
              { name: "Minh", imageUrl: "/riven.png", mutualFriends: 5 },
              { name: "Minh", imageUrl: "/riven.png", mutualFriends: 5 },
              { name: "Minh", imageUrl: "/riven.png", mutualFriends: 5 },
              { name: "Minh", imageUrl: "/riven.png", mutualFriends: 5 },
              { name: "Minh", imageUrl: "/riven.png", mutualFriends: 5 },
              { name: "Minh", imageUrl: "/riven.png", mutualFriends: 5 },
              { name: "Minh", imageUrl: "/riven.png", mutualFriends: 5 },
              { name: "Minh", imageUrl: "/riven.png", mutualFriends: 5 },
              { name: "Minh", imageUrl: "/riven.png", mutualFriends: 5 },
              { name: "Minh", imageUrl: "/riven.png", mutualFriends: 5 },
              { name: "Minh", imageUrl: "/riven.png", mutualFriends: 5 },
            ]}
          />
        </div>
        <div className="flex pt-[2px] mt-2 p-2">
          {routeProfilePage.map((item: RouteProfile, index: number) => {
            return (
              <Link href={item.href} key={index}>
                <div className="  w-fit  ">
                  <Button
                    className={`${
                      item.href === patch
                        ? "bg-white  text-[var(--tw-color-hover)]"
                        : "bg-white text-gray-500"
                    } hover:bg-gray-100`}
                  >
                    {item.title}
                  </Button>
                  {item.href === patch && (
                    <div className="w-full h-[2px] bg-[var(--tw-color-hover)]"></div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
        <div className="bg-gray-100">{children}</div>
      </div>
    </div>
  );
};

export default ProfileLayout;
