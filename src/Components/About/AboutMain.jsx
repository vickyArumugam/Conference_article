import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const images = [
    "/images/carsol1.jpg",
    "/images/carsol2.jpg",
    "/images/carsol3.jpg",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="about" className="bg-white py-16 px-4 md:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center md:gap-6 lg:gap-20">
        {/* Left Side - Image Slider */}
        <div className="lg:w-2/5 w-full rounded-lg overflow-hidden ">
          <Slider {...sliderSettings}>
            {images.map((img, index) => (
              <div key={index} className="h-[500px] md:h-[550px] lg:h-[500px]">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg "
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-3/5 w-full text-left mt-6 lg:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center md:text-left">
            About Article Publication
          </h2>
          <div className="w-16 md:w-20 h-1 bg-blue-600 my-4 mx-auto md:mx-0"></div>
          <p className="text-gray-600 text-lg text-justify p-4 lg:p-0 ">
            We are dedicated to providing high-quality, insightful articles on a wide range of topics.
            Our mission is to inform, educate, and inspire our readers with content that matters.
          </p>
          <p className="text-gray-600 mt-4 text-lg text-justify  p-4 lg:p-0">
            Founded in 2019, ArticleHub started with a simple idea: to create a platform where readers could find
            well-researched, thoughtful articles on topics that matter. Our team of dedicated writers and editors
            work tirelessly to bring you content that is both informative and engaging.
          </p>
          <p className="text-gray-600 mt-4 text-lg text-justify  p-4 lg:p-0">
            We believe in the power of knowledge and the importance of staying informed in today's fast-paced world.
            That's why we're committed to delivering content that helps you understand complex issues, discover new
            perspectives, and make informed decisions.
          </p>

          <div className="flex md:justify-start justify-center mt-6">
            <button
              onClick={() => navigate("/about")}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg shadow-lg hover:bg-blue-700 transition duration-300 flex items-center"
            >
              About Us <span className="ml-2">↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
