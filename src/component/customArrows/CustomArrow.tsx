import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { ArrowProps } from "./customArrowsProps.type";

import { IconType } from "react-icons";
const CustomArrow: React.FC<ArrowProps> = ({
  direction = "left",
  onClick,
  hidden,
}) => {
  const Icon: IconType =
    direction === "left" ? MdKeyboardArrowLeft : MdKeyboardArrowRight;

  if (hidden) {
    return null;
  }

  return (
    <div
      className={`absolute top-1/2 transform -translate-y-1/2 bg-gray-100 rounded-full p-2 z-[9] ${
        direction === "left" ? "left-[5px]" : "right-[5px]"
      }`}
      onClick={onClick}
    >
      <Icon className="text-3xl" />
    </div>
  );
};

export default CustomArrow;
