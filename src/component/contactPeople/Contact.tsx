import { PiTelevisionSimple } from "react-icons/pi";

import NavItemComp from "../navItem/NavItem";

import { contactPeople } from "./contactPeople.config";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { openChat, closeChat } from "@/store/chatSlice";
const Contact = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className=" basis-[20%] pt-[70px] rounded-xl ">
      <div className="sticky top-[76px]  bg-white bottom-0 overflow-y-auto h-screen overflow-y-hidden hover:overflow-y-auto my-scroll-container ">
        <div className="p-2 text-lg">Contact</div>
        {contactPeople.map((item, index: number) => {
          return (
            <NavItemComp
              name={item.name}
              imageShow={item.avatar}
              key={index}
              status={true}
              isOnline={true}
              rouded={true}
              lastTextChat="huy"
              textSize={"text-sm"}
              imageSize={"56"}
              onClick={() => {
                dispatch(openChat());
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
