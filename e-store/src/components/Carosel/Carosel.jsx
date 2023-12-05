import React from "react";
import { useState } from "react";

import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";

const images = [image1, image2, image3, image4];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="w-full
      bg-green-200 relative mt-4 border-2 rounded border-green-200"
    >
      <img
        src={images[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        className="w-full  lg:h-80   md:h-72 h-64 object-cover"
      />
      <div
        className="absolute top-1/2 bg-white left-4 cursor-pointer text-white text-4xl"
        onClick={prevSlide}
      >
        <span className="text-black"> &#8249;</span>
      </div>
      <div
        className="absolute bg-white top-1/2 right-4 cursor-pointer text-white text-4xl"
        onClick={nextSlide}
      >
        <span className="text-black"> &#8250;</span>
      </div>

      <div className="flex absolute bottom-4 justify-center   w-full">
        <div
          className="flex
        rounded-md left-0 right-0 justify-center bg-white
       h-4 w-28  py-0.5"
        >
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-full w-full  rounded-full mx-1 cursor-pointer ${
                currentSlide === index ? "bg-black" : "bg-gray-500"
              }`}
              onClick={() => changeSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
