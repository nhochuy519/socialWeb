import Image from "next/image";
const StorySLide = () => {
  return (
    <div className="w-[120px] h-[200px]  relative rounded-lg overflow-hidden cursor-pointer">
      <Image src={"/riven.png"} fill alt="story img" />
      <div>
        <Image
          src={"/happy.png"}
          alt="avatar"
          width={36}
          height={36}
          className="absolute top-2 left-2  border-2 border-blue-500 rounded-full"
        />
      </div>
      <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
        Huy 123
      </div>
    </div>
  );
};
export default StorySLide;
