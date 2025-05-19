import Image from "next/image";
import { IoMdClose } from "react-icons/io";

import { Button } from "@/components/ui/button";
interface FriendCardProps {
  name: string;
  mutualFriends: number;
  imageUrl: string;
}

const FriendCard = ({ name, mutualFriends, imageUrl }: FriendCardProps) => {
  return (
    <div className="w-[146px] h-[216px] bg-white shadow-md rounded-xl overflow-hidden">
      <div className="relative w-full h-[148px]">
        <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
        <button className="absolute top-1 right-1 bg-white/70 rounded-full p-1 hover:bg-white">
          <IoMdClose />
        </button>
      </div>
      <div className="px-2 py-1 text-sm">
        <p className="font-semibold">{name}</p>
        {/* <p className="text-xs text-gray-600 flex items-center gap-1">
          <span>🌙</span> {mutualFriends} bạn chung
        </p> */}
        {/* <button className="mt-2 w-full bg-blue-100 text-blue-600 text-sm py-1 rounded hover:bg-blue-200">
          + Thêm bạn bè
        </button> */}

        <Button>Add Friend</Button>
      </div>
    </div>
  );
};

export default FriendCard;
