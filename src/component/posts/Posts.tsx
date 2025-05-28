import CreatePost from "../createPage/CreatePage";

import SliderCard from "../sliderStory/SliderStory";

import StorySLide from "../storySlide/StorySlide";

import Post from "../post/Post";

import api from "@/lib/axiosInstance";
import { Post as PostItf } from "@/types/post.interface";
import { useEffect, useState } from "react";

import { ApiResponse } from "@/types/response.interface";
const Posts = () => {
  const [posts, setPosts] = useState<PostItf[]>([]);
  console.log("post la", posts);
  useEffect(() => {
    const fetchPosts = async (): Promise<void> => {
      try {
        const result = await api.get<ApiResponse<PostItf>>("/posts");
        if (result.status === 200) {
          console.log(result.data.data); // data.data vì theo interface ApiResponse
          setPosts(
            Array.isArray(result.data.data)
              ? result.data.data
              : [result.data.data]
          );
        } else {
          console.error("Failed to fetch posts:", result.statusText);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchPosts();
  }, []);
  return (
    <div className="posts ">
      <CreatePost />

      <div className="w-full py-2">
        <SliderCard
          card={StorySLide}
          data={[
            { name: "Huy", imageUrl: "/riven.png", mutualFriends: 10 },
            { name: "Minh", imageUrl: "/riven.png", mutualFriends: 5 },
            { name: "Minh", imageUrl: "/riven.png", mutualFriends: 5 },
            { name: "Minh", imageUrl: "/riven.png", mutualFriends: 5 },
            { name: "Minh", imageUrl: "/riven.png", mutualFriends: 5 },
            { name: "Minh", imageUrl: "/riven.png", mutualFriends: 5 },
            { name: "Minh", imageUrl: "/riven.png", mutualFriends: 5 },
          ]}
        />
      </div>

      <div className="flex flex-col gap-5">
        {posts && posts.length > 1 ? (
          posts.map((item: PostItf, index) => <Post key={index} {...item} />)
        ) : (
          <div>123</div>
        )}
      </div>
    </div>
  );
};

export default Posts;
