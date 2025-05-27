import { CiSettings, CiSearch } from "react-icons/ci";

import FriendItemCol from "@/component/friendCard/FriendCard";
const Friends = () => {
  return (
    <div className="mt-4 w-full  bg-white p-6 rounded-lg shadow  ">
      <div className=" flex items-center justify-between mb-[8px]">
        <div className="text-lg font-semibold">Friends</div>
        <div>
          <div className="max-w-2xl flex items-center bg-gray-100 h-full w-full pr-2 pl-2 pt-2 pb-2 rounded-full text-lg">
            <CiSearch className="mr-2 " />
            <input
              className="h-full w-full  focus:outline-none "
              type="Search on Facebook"
              placeholder="search"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        <FriendItemCol />
        <FriendItemCol />
        <FriendItemCol />
        <FriendItemCol />
      </div>
    </div>
  );
};

export default Friends;
