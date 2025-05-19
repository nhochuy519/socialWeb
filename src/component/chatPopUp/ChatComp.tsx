"use client";

import NavItemComp from "../navItem/NavItem";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { closeChat } from "@/store/chatSlice";
import { CiImageOn } from "react-icons/ci";
import { AiFillLike } from "react-icons/ai";
import Image from "next/image";

interface ChatItem {
  id: number;
  senderId: string;
  message: string;
  timestamp: string;
  image: string;
}

const chatArr: ChatItem[] = [
  {
    id: 1,
    senderId: "user_123",
    message: "Hey, how are you?",
    timestamp: "2025-05-19T10:00:00Z",
    image: "/riven.png",
  },
  {
    id: 11,
    senderId: "user_123",
    message: "Hey, how are you?",
    timestamp: "2025-05-19T10:00:00Z",
    image: "/riven.png",
  },
  {
    id: 11,
    senderId: "user_123",
    message: "Hey, how are you?",
    timestamp: "2025-05-19T10:00:00Z",
    image: "/riven.png",
  },
  {
    id: 2,
    senderId: "me",
    message: "I'm good, how about you?",
    timestamp: "2025-05-19T10:01:00Z",
    image: "/riven.png",
  },
  {
    id: 3,
    senderId: "user_123",
    message: "Doing well! Are you free tonight?",
    timestamp: "2025-05-19T10:02:00Z",
    image: "/riven.png",
  },
  {
    id: 4,
    senderId: "me",
    message: "Yes, I am!",
    timestamp: "2025-05-19T10:03:00Z",
    image: "/riven.png",
  },
  {
    id: 5,
    senderId: "me",
    message: "Yes, I am!",
    timestamp: "2025-05-19T10:03:00Z",
    image: "/riven.png",
  },
  {
    id: 6,
    senderId: "me",
    message: "Yes, I am!",
    timestamp: "2025-05-19T10:03:00Z",
    image: "/riven.png",
  },
];

const ChatPopUp = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="w-[338px] h-[400px] bg-white-200 flex flex-col rounded-xl shadow-2xl z-[10000000]">
      {/* Header */}
      <div className="flex items-center justify-between shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
        <NavItemComp
          name={"huy"}
          imageShow={"/riven.png"}
          isOnline={true}
          rouded={true}
          lastTextChat="huy"
          imageSize={"36"}
        />
        <div className="pr-2" onClick={() => dispatch(closeChat())}>
          <IoMdClose className="text-xl cursor-pointer" />
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex flex-col gap-2 flex-1 p-[10px] overflow-y-auto">
        {chatArr.map((item, index) => {
          const prevItem = chatArr[index - 1];
          const isSameSender = prevItem && prevItem.senderId === item.senderId;
          const isSameTime = prevItem && prevItem.timestamp === item.timestamp;

          const showAvatar = !(isSameSender && isSameTime);

          return (
            <div
              className={`flex items-end gap-2 ${
                item.senderId === "me" ? "self-end" : "self-start"
              }`}
              key={item.id + "-" + index}
            >
              {/* Avatar */}
              {item.senderId !== "me" && (
                <div className="w-[28px] h-[28px] relative">
                  {showAvatar ? (
                    <Image
                      className="rounded-full"
                      fill
                      src={item.image}
                      alt="avatar"
                    />
                  ) : null}
                </div>
              )}

              {/* Message Bubble */}
              <div
                className={`${
                  item.senderId === "me"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-black"
                } p-2 rounded-lg max-w-xs`}
              >
                {item.message}
              </div>
            </div>
          );
        })}
      </div>

      {/* Input */}
      <div className="flex items-center gap-5 px-3 py-2 border-t border-[var(--scroll-gray)] border-t-[1px]">
        <div className="text-xl">
          <CiImageOn />
        </div>
        <div className="flex-1 rounded-full bg-gray-100">
          <input
            type="text"
            placeholder="Aa"
            className="h-full w-full focus:outline-none p-[4px] bg-transparent"
          />
        </div>
        <div className="text-xl">
          <AiFillLike />
        </div>
      </div>
    </div>
  );
};

export default ChatPopUp;
