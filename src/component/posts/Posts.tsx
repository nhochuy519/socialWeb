import CreatePage from "../createPage/CreatePage";

import SliderStory from "../sliderStory/SliderStory";

import Post from "../post/Post";

const Posts = () => {
  return (
    <div className="posts ">
      <CreatePage />

      <div className="w-full py-2">
        <SliderStory />
      </div>

      <div className="flex flex-col gap-5">
        <Post />
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

export default Posts;
