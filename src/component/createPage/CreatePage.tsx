import Image from "next/image";

import { BsCameraVideo } from "react-icons/bs";
import { AiOutlinePicture } from "react-icons/ai";

import ButtonIcon from "../buttonIcon/ButtonIcon";
import { HiOutlineEmojiHappy } from "react-icons/hi";

import { Button } from "@/components/ui/button";

const CreatePost = () => {
  return (
    <div className=" bg-white items-center rounded-xl  pt-[12px] pb-[10px] px-[16px]">
      <div className="flex gap-2 ">
        <div>
          <Image
            src={"/riven.png"}
            width={54}
            height={54}
            alt="Picture of the author"
            className="rounded-full cursor-pointer"
          />
        </div>
        <div className="w-full">
          <button className="w-full bg-[var(--hover-gray)] text-left rounded-full p-2 hover:bg-gray-200">
            What are you thinking?
          </button>
        </div>
      </div>
      <div className="h-[1px] bg-gray-100 w-full mt-[10px]"></div>
      <div className="flex items-center w-full pt-2">
        <ButtonIcon className="flex-1" text="video" icon={BsCameraVideo} />
        <ButtonIcon className="flex-1" text="picture" icon={AiOutlinePicture} />
        <ButtonIcon
          className="flex-1"
          text="emotional activity"
          icon={HiOutlineEmojiHappy}
        />
      </div>
    </div>
  );
};

export default CreatePost;
