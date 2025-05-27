import { FaHouseChimney } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";

import ListCard from "@/component/listCard/ListCard";

import CreatePost from "@/component/createPage/CreatePage";
import Post from "@/component/post/Post";

const Page = () => {
  return (
    <div className="flex mt-4 gap-4 ">
      {/* SIDEBAR */}
      <div className="basis-1/3">
        <div className="sticky top-2 space-y-4">
          <div className="w-full bg-white rounded-xl shadow border p-4 space-y-4">
            <h2 className="text-lg font-semibold">About</h2>

            <button className="w-full bg-gray-200 text-gray-700 py-2 rounded text-sm font-medium">
              Add bio
            </button>

            <div className="flex items-center space-x-2 text-sm text-gray-800">
              <span className="text-xl">
                <FaHouseChimney />
              </span>
              <span>
                Lives in <span className="font-semibold">Biên Hòa</span>
              </span>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-800">
              <span className="text-xl">
                <IoLocationSharp />
              </span>
              <span>
                From <span className="font-semibold">Biên Hòa</span>
              </span>
            </div>

            <Button className="w-full bg-gray-200 text-gray-700 py-2 rounded text-sm font-medium">
              Edit details
            </Button>

            <Button className="w-full bg-gray-200 text-gray-700 py-2 rounded text-sm font-medium">
              Add featured content
            </Button>
          </div>

          <div>
            <ListCard title="ảnh" friend={false} />
          </div>
          <div>
            <ListCard title="Bạn bè" friend={true} />
          </div>
        </div>
      </div>

      {/* POSTS */}
      <div className="basis-2/3 flex flex-col gap-5">
        <div>
          <CreatePost />
        </div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Page;
