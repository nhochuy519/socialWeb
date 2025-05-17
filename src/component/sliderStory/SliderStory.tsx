"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef, useState } from "react";

import CustomArrow from "../customArrows/CustomArrow";
import StorySLide from "../storySlide/StorySlide";

const SliderStory = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 30;

  const settings = {
    dots: false,
    infinite: false, // để hiện/ẩn prev-next đúng
    speed: 500,
    slidesToShow: 5.2,
    slidesToScroll: 3,
    variableWidth: true,
    beforeChange: (oldIndex: number, newIndex: number) =>
      setCurrentSlide(newIndex),
    nextArrow: (
      <CustomArrow
        direction="right"
        hidden={currentSlide >= totalSlides - 5} // ẩn khi tới cuối
      />
    ),
    prevArrow: (
      <CustomArrow
        direction="left"
        hidden={currentSlide === 0} // ẩn ở đầu
      />
    ),
  };

  return (
    <div className="bg-white w-full mt-4 p-2 bg-gray-100 rounded-lg shadow-md relative overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {[...Array(totalSlides)].map((_, index) => (
          <div key={index} className="mr-2 w-[100px]">
            <StorySLide />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderStory;
