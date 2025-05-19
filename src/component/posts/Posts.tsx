import CreatePage from "../createPage/CreatePage";

import SliderCard from "../sliderStory/SliderStory";

import StorySLide from "../storySlide/StorySlide";

import Post from "../post/Post";

const Posts = () => {
  return (
    <div className="posts ">
      <CreatePage />

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
