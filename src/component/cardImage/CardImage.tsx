import Image from "next/image";

const CardImage = ({ name = false }: { name: boolean }) => {
  return (
    <div className="flex flex-col items-center">
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
    </div>
  );
};

export default CardImage;
