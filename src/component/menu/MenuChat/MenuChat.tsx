import { IoIosMore } from "react-icons/io";
import { SlSizeFullscreen } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";

import NavItemComp from "@/component/navItem/NavItem";
import { contactPeople } from "@/component/contactPeople/contactPeople.config";

const MenuChat = () => {
  return (
    <div>
      <div className="flex items-center justify-between w-full px-[16px] pt-[12px] pb-[4px]">
        <div className="font-semibold text-lg">Chat section</div>
        <div className="flex gap-5">
          <IoIosMore />
          <SlSizeFullscreen />
        </div>
      </div>
      <div className="px-4">
        <div className="flex items-center bg-gray-100 h-full w-full pr-2 pl-2 pt-2 pb-2 rounded-full text-lg">
          <CiSearch className="mr-2 " />
          <input
            className="h-full w-full  focus:outline-none "
            type="Search on Facebook"
            placeholder="search"
          />
        </div>
      </div>

      <div className="p-2">
        {contactPeople.map((item, index: number) => {
          return (
            <NavItemComp
              name={item.name}
              imageShow={item.avatar}
              key={index}
              status={true}
              rouded={true}
              lastTextChat="huy"
              textSize={"text-sm"}
              imageSize={"56"}
              readMessageStatus={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuChat;
