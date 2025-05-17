import NavItemComp from "../navItem/NavItem";
import { IoMdClose } from "react-icons/io";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { closeChat } from "@/store/chatSlice";
const ChatPopUp = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="w-[338px] h-[400px]  bg-blue-200">
      <div className="flex items-center justify-between">
        <div>
          <NavItemComp
            name={"huy"}
            imageShow={"/riven.png"}
            isOnline={true}
            rouded={true}
            lastTextChat="huy"
            imageSize={"36"}
          />
        </div>
        <div
          className="pr-2"
          onClick={() => {
            dispatch(closeChat());
          }}
        >
          <IoMdClose className="text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ChatPopUp;
