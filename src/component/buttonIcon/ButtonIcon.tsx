import { ButtonType } from "./button.type";
import Image from "next/image";

const ButtonIcon: React.FC<ButtonType> = ({
  children,
  icon,
  name,
  className,
}) => {
  return (
    <div
      className={`flex items-center justify-center  p-2 cursor-pointer rounded-2xl hover:bg-[var(--hover-gray)] p-2 ${className} `}
    >
      <Image
        className="mr-2"
        src={"/riven.png"}
        width={24}
        height={24}
        alt="icon"
      />
      <div> click</div>
    </div>
  );
};
export default ButtonIcon;
