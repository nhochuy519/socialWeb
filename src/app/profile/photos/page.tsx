import CardImage from "@/component/cardImage/CardImage";
const Photos = () => {
  return (
    <div className="mt-4 w-full  bg-white p-6 rounded-lg shadow  ">
      <div className=" flex items-center justify-between mb-[8px]">
        <div className="text-lg font-semibold">Photos</div>
      </div>
      <div className="grid grid-cols-6 gap-2">
        <CardImage name={false} />
        <CardImage name={false} />
        <CardImage name={false} />
        <CardImage name={false} />
        <CardImage name={false} />
        <CardImage name={false} />
        <CardImage name={false} />
        <CardImage name={false} />
        <CardImage name={false} />
        <CardImage name={false} />
        <CardImage name={false} />
        <CardImage name={false} />
      </div>
    </div>
  );
};

export default Photos;
