import { ButtonType } from "./button.type";
import Image from "next/image";

const ButtonIcon: React.FC<ButtonType> = ({
  children,
  icon: Icon,
  text,
  className,
}) => {
  return (
    <div
      className={`flex items-center justify-center  p-3 cursor-pointer rounded-2xl hover:bg-[var(--hover-gray)] p-2 ${className} gap-2`}
    >
      {/* <Image
        className="mr-2"
        src={"/riven.png"}
        width={24}
        height={24}
        alt="icon"
      /> */}
      <div>{Icon && <Icon className="text-2xl" />}</div>
      <div> {text}</div>
    </div>
  );
};
export default ButtonIcon;
