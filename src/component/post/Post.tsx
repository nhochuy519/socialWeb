"use client";

import Image from "next/image";
import Link from "next/link";
import { IoIosMore } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { useState } from "react";

import PostImages from "../postImages/PostImages";

import { imagesArray } from "../postImages/images.config";
import ButtonIcon from "../buttonIcon/ButtonIcon";

import { Post as PostItf } from "@/types/post.interface";

const Post = (props: PostItf) => {
  const [lineClamp, setLineClamp] = useState<number | string>(1);

  console.log("itemPost la", props);

  console.log(lineClamp);
  const handleLineClamp = () => {
    setLineClamp((prev) => "full");
  };
  return (
    <div className=" bg-white items-center rounded-xl ">
      <div className="flex items-center gap-4 mb-3  pt-2 px-4">
        <div>
          <Link href={"/profile"}>
            <Image
              src={"/riven.png"}
              width={40}
              height={40}
              alt={"avatar"}
              className="rounded-full cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex-1 ">
          <div>Phan Minh Huy</div>
          <div className="text-xs">2h ago</div>
        </div>
        <div className="flex gap-4 text-2xl">
          <div className="cursor-pointer hover:bg-gray-200 rounded-full p-2">
            <IoIosMore />
          </div>

          <div className="cursor-pointer hover:bg-gray-200 rounded-full p-2">
            <IoMdClose />
          </div>
        </div>
      </div>
      <div className="px-3 pt-[2px] pb-4">
        <div className={`line-clamp-${lineClamp} `}>
          Vẽ vời ban đầu là vì ý thích, đam mê, nhưng về sau những cái đấy cũng
          tụt dần và nhường chỗ cho kỷ luật nếu mình vẫn muốn tiến lên. Lắm khi
          cũng chỉ vì ngại bật máy đợi photoshop load xong, chọn cọ cho vừa tay,
          tí là hết buổi mà lại bỏ qua một ngày luyện tập. Ban đầu mọi thứ đều
          gượng gạo và không thoải mái, các bạn cố gắng mỗi hôm 1 chút rồi sẽ
          quen tay hơn, như mình chơi Sekiro để đến mức no hit Isshin kiếm thánh
          thì cũng phải mất cả tháng trời đánh đi đánh lại :))) Lúc đầu thì ngại
          cầm bút chì vì cảm giác k thoải mái, sợ vẽ xấu, giờ thì ngại bật máy
          tính vì nó mất quá nhiều thời gian set up hơn là việc cầm bút chì và
          quyển sketch book lên phẩy phẩy cái này là 2 tuần vừa rồi của iem các
          bác ạ, có hôm thu hoách nhiều, có hôm bực mình ném bút đi ngủ cho
          sướng
        </div>
        {lineClamp !== "full" && (
          <div
            className="font-medium inline cursor-pointer"
            onClick={handleLineClamp}
          >
            More
          </div>
        )}
        <div className="w-full">
          {/* <PostImages images={imagesArray} /> */}
        </div>
        <div className="flex flex aligt justify-between items-center mx-3 py-[6px] cursor-pointer">
          <div className="flex items-center gap-2">
            <div>
              <AiFillLike />
            </div>
            <div>97</div>
          </div>
          <div>8 comments</div>
        </div>
        <div className="flex">
          <ButtonIcon className="flex-1" text="like" />
          <ButtonIcon className="flex-1" text="comments" />
          <ButtonIcon className="flex-1" text="share" />
        </div>
      </div>
    </div>
  );
};

export default Post;
