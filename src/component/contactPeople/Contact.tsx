import { PiTelevisionSimple } from "react-icons/pi";

const Contact = () => {
  return (
    <div className=" basis-[20%]  ">
      <div className="sticky top-[76px]  bg-white bottom-0 overflow-y-auto h-screen overflow-y-hidden hover:overflow-y-auto my-scroll-container">
        {new Array(20).fill(null).map((item, index: number) => {
          return (
            <div
              key={index}
              className="hover:bg-[var(--hover-gray)]  flex items-center gap-2 p-2  cursor-pointer rounded-2xl"
            >
              <div className=" flex items-center justify-center cursor-pointer bg-purple-500 rounded-full p-2 text-white ">
                <PiTelevisionSimple className="text-3xl" />
              </div>

              <div>Newsfeed</div>
            </div>
          );
        })}
        <div className="hover:bg-[var(--hover-gray)]  flex items-center gap-2 p-2  cursor-pointer rounded-2xl">
          <div className=" flex items-center justify-center cursor-pointer bg-purple-500 rounded-full p-2 text-white ">
            <PiTelevisionSimple className="text-3xl" />
          </div>

          <div>Newsfeed</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
