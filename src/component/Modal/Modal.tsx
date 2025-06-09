"use client";

import { IoMdClose } from "react-icons/io";
import { ImImages } from "react-icons/im";

import Image from "next/image";
import { MdVideoCameraFront } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { MdLibraryAdd } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "@/store/modalSlice";
import { AppDispatch } from "@/store";

import PostImages from "../postImages/PostImages";

import uploadPromises from "@/lib/uploadImgToCloud";
import { AxiosResponse } from "axios";
import instance from "@/lib/axiosInstance";
import { IPost, Media } from "@/lib/model/Post";

const Modal = () => {
  const dispatch: AppDispatch = useDispatch();
  const inputFileRef = useRef<HTMLInputElement>(null);
  // const [textpld, setTextpld] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");
  const [media, setMedia] = useState<string[]>([]);
  const [fileMedia, setFileMedia] = useState<File[]>([]);
  const [tabUpload, setTabUpload] = useState<boolean>(false);

  //loading
  const [loading, setLoading] = useState<boolean>(false);
  console.log("fileMedia", fileMedia);
  const handleClick = () => {
    inputFileRef.current?.click();
  };
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files || files.length === 0) return;

    const arrayFiles = Array.from(files);

    const newImageURLs = arrayFiles.map((file) => URL.createObjectURL(file));

    setMedia((prev) => [...prev, ...newImageURLs]);
    setFileMedia((prev) => [...prev, ...arrayFiles]);
    e.target.value = ""; // Reset input sau khi tải lên
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (content.trim().length === 0 && fileMedia.length === 0) {
      return; // Không gửi nếu không có nội dung hoặc media
    }

    const uploadFile: Promise<AxiosResponse<unknown>>[] =
      uploadPromises(fileMedia);

    const resArray: AxiosResponse<unknown>[] = await Promise.all(uploadFile);

    const urls: Media[] = resArray.map((res) => {
      return {
        url: (res.data as { secure_url: string }).secure_url,
        type: (res.data as { resource_type: "image" | "video" }).resource_type,
      };
    });

    const postData: IPost = {
      content: content,
      media: urls,
    };

    const response = await instance.post("posts", postData);
    if (response.status === 201) {
      console.log("Post created successfully");
      setLoading(false);
      dispatch(closeModal());
    }
  };
  useEffect(() => {
    return () => {
      if (!media) return;
      media.forEach((img) => URL.revokeObjectURL(img));
    };
  }, [media]);

  const handleInputContent = (e: React.FormEvent<HTMLDivElement>) => {
    const text = (e.currentTarget as HTMLDivElement).innerText;
    setContent(text);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed top-0 left-0 w-full h-full  bg-black/50 z-[100000000] flex items-center justify-center"
    >
      <div className=" bg-white w-[500px] pb-4 rounded-lg">
        <div className="relative  flex items-center justify-center h-[60px] font-bold text-lg">
          <div>Create post</div>
          <div
            className="absolute top-1/2 -translate-y-1/2 right-4 p-2 cursor-pointer bg-gray-200 rounded-full"
            onClick={() => dispatch(closeModal())}
          >
            <IoMdClose className="text-2xl" />
          </div>
        </div>
        <div className="flex items-center gap-2 mx-4 py-4">
          <Image
            width={40}
            height={40}
            alt="avatar"
            src={"/riven.png"}
            className="rounded-full"
          />
          <div className="font-medium">HuyMinh</div>
        </div>
        <div className="w-full px-4  overflow-y-auto space-y-2 max-h-[300px] relative">
          {content.length <= 1 && (
            <div className="absolute  p-2  text-gray-400 pointer-events-none select-none">
              What are you thinking?
            </div>
          )}

          <div
            contentEditable="true"
            suppressContentEditableWarning
            className="w-full   focus:outline-none text-base leading-relaxed placeholder-gray-400 p-2 realative min-h-[10px]  overflow-y-auto"
            onInput={handleInputContent}
          ></div>

          {/* Add photos/videos section */}
          {tabUpload && (
            <div className="w-full border border-gray-100 px-2 py-2">
              <div className="px-2 flex items-center justify-center w-full bg-gray-100 min-h-[150px] relative hover:bg-gray-200 cursor-pointer">
                {media && media.length > 0 ? (
                  <PostImages images={media} />
                ) : (
                  <div
                    className="flex flex-col items-center justify-center"
                    onClick={handleClick}
                  >
                    <MdLibraryAdd className="text-2xl" />
                    <div>Add photos/videos</div>
                  </div>
                )}

                {/* <PostImages images={imagesArray} /> */}
                <div className="absolute rounded-full top-2 right-2 p-1 bg-white cursor-pointer hover:bg-gray-100">
                  <IoIosClose
                    className="text-2xl"
                    onClick={() => {
                      setMedia([]);
                      setTabUpload(false);
                      setFileMedia([]);
                    }}
                  />
                </div>
                {media.length > 0 && (
                  <div className="absolute rounded-full top-2 left-2 p-1  cursor-pointer ">
                    <Button onClick={handleClick} type="button">
                      <MdLibraryAdd className="text-2xl" />
                      <div>Add photos/videos</div>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center mt-4  gap-3 mx-4 p-2 font-medium border border-gray-100 rounded-lg shadow-sm">
          <div>Add to your post</div>
          <div className="flex item-center text-2xl gap-2">
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleUpload}
              ref={inputFileRef}
              className=" hidden"
              multiple
            />

            <ImImages
              onClick={() => {
                setTabUpload(true);
              }}
              className="cursor-pointer"
            />
            <MdVideoCameraFront
              className="cursor-pointer"
              onClick={() => {
                setTabUpload(true);
              }}
            />
          </div>
        </div>
        <div className="px-4 pt-4">
          {loading ? (
            <Button className="w-full" disabled>
              <AiOutlineLoading3Quarters className="animate-spin" />
            </Button>
          ) : (
            <Button className="w-full ">Post</Button>
          )}
        </div>
      </div>
    </form>
  );
};

export default Modal;
