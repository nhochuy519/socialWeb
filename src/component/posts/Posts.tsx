import CreatePage from "../createPage/CreatePage";

import SliderStory from "../sliderStory/SliderStory";

const Posts = () => {
  return (
    <div className="posts ">
      <CreatePage />

      <div className="w-full py-2">
        <SliderStory />
      </div>
    </div>
  );
};

export default Posts;
