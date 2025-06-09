import { string } from "./image.type";
import Image from "next/image";

const PostImages = ({ images }: { images: string[] }) => {
  console.log("image", images[0]);
  if (images.length <= 1) {
    return (
      <div className="w-full h-[500px]">
        <div className="relative w-full h-full">
          <Image
            src={images[0]}
            alt="test image post"
            fill
            className="object-cover "
          />
        </div>
      </div>
    );
  } else {
    const imageRow1: string[] = images.slice(0, 2);
    const imageRow2: string[] = images.slice(2, 5);

    return (
      <div className="flex flex-col w-full h-[500px] gap-2">
        <div
          className={`flex w-full ${
            imageRow2.length > 0 ? "h-[50%]" : "h-full"
          } gap-2`}
        >
          {imageRow1.map((image: string, index: number) => (
            <div className="relative w-full h-full" key={index}>
              <Image
                src={image}
                alt="test image post"
                fill
                className="object-cover "
              />
            </div>
          ))}
        </div>

        {imageRow2.length > 0 && (
          <div className="flex w-full h-[50%] gap-2  ">
            {imageRow2.map((image: string, index: number) => (
              <div className="relative w-full " key={index}>
                <Image
                  src={image}
                  alt="test image post"
                  fill
                  className="object-cover "
                />
                {index === imageRow2.length - 1 && images.length >= 5 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-2xl font-bold">
                    +100
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
};

export default PostImages;
