import Image from "next/image";
import { FaPen } from "react-icons/fa";
const CardImage = ({ name = false }: { name: boolean }) => {
  return (
    <div className="flex flex-col items-center relative">
      <div className="relative w-full aspect-square rounded-md overflow-hidden">
        <Image
          src="/riven.png"
          alt={"card"}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
          // ưu tiên load 3 ảnh đầu nếu muốn
        />
      </div>
      {name && <p className="text-sm text-center mt-1">huy</p>}
      <div className="absolute top-[5px] right-[5px] bg-[rgba(0,0,0,0.5)] rounded-full flex justify-center items-center w-8 h-8">
        <FaPen className="text-gray-100" />
      </div>
    </div>
  );
};

export default CardImage;
