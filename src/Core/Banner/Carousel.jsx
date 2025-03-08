import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Engr. PSAH",
    image: "/images/vecteezy_young-indian-student-holding-diary-file-in-hand_5219735.jpg",
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
    <div className="bg-gray-50 py-24"> {/* Increased padding for a larger section */}
      {/* <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
        What Our Writers Say
      </h2> */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">What Our Writers Say</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
      <div className="max-w-6xl mx-auto px-8"> {/* Increased width for larger content area */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={40} 
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="overflow-hidden"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-10 text-center relative h-[400px] shadow-lg rounded-xl"> {/* Increased height and added styling */}
                {/* Profile Picture - Full Visibility */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover" 
                  />
                </div>

                <div className="mt-48"> {/* Adjusted spacing to fit bigger image */}
                  <h3 className="text-2xl font-semibold">{testimonial.name}</h3> {/* Increased font size */}
                  <div className="flex justify-center my-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 text-xl" />  
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 italic">{testimonial.review}</p> 
                  <p className="text-base text-gray-500 my-3">
                    Published on{" "}
                    <span className="text-blue-600 font-medium">{testimonial.source}</span>
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
