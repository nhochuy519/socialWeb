import Image from "next/image";
import { IoIosMore } from "react-icons/io";

const FriendItemCol = () => {
  return (
    <div className="flex items-center w-full border border-gray-1 p-4 rounded-xl ">
      <div className="w-[80px] h-[80px] relative mr-4 ">
        <Image
          fill
          src={"/riven.png"}
          alt="avatar"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="flex-1">
        <div className="text-[17px] font-medium">HuyPhan</div>
        <div>6 ban chung</div>
      </div>
      <div>
        <IoIosMore />
      </div>
    </div>
  );
};

export default FriendItemCol;
