import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Engr. PSAH",
    image: "/images/vecteezy_young-indian-student-holding-diary-file-in-hand_5219735.jpg", // Replace with actual profile image path
    rating: 5,
    review: "Overall I am satisfied with the workload this season...",
    source: "TrustPilot",
  },
  {
    name: "Jane Doe",
    image: "/images/vecteezy_portrait-of-woman-university-student-holding-book-in-studio_2629904.jpg",
    rating: 4,
    review: "Great experience, improved my skills significantly!",
    source: "Google Reviews",
  },
  {
    name: "John Smith",
    image: "/images/guy-asking-coworker-for-coffee-attractive-friendly-female-with-ginger-hair-and-beautiful-clean-skin-e1699027866487.png",
    rating: 5,
    review: "Amazing support and professional guidance.",
    source: "Yelp",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="bg-gray-50 py-16">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
        What Our Writers Say
      </h2>
      <div className="max-w-5xl mx-auto px-6">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="overflow-hidden"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-lg p-8 text-center relative h-[300px]">
                {/* Profile Picture - Full Visibility */}
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                </div>

                <div className="mt-30">
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <div className="flex justify-center my-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">{testimonial.review}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Published on{" "}
                    <span className="text-blue-500">{testimonial.source}</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>  
  );
};

export default TestimonialCarousel;