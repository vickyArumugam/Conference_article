import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Engr. PSAH",
    image: "/images/vecteezy_young-indian-student-holding-diary-file-in-hand_5219735.jpg",
    rating: 5,
    review: "Overall I am satisfied with the workload this season.\nThe team was professional and highly skilled Overall I am satisfied with the workload this season.\nThe team was professional and highly skilled.",
    source: "TrustPilot",
  },
  {
    name: "Engr. PSAH",
    image: "/images/vecteezy_young-indian-student-holding-diary-file-in-hand_5219735.jpg",
    rating: 5,
    review: "Overall I am satisfied with the workload this season.\nThe team was professional and highly skilled Overall I am satisfied with the workload this season.\nThe team was professional and highly skilled.",
    source: "TrustPilot",
  },
  {
    name: "Engr. PSAH",
    image: "/images/vecteezy_young-indian-student-holding-diary-file-in-hand_5219735.jpg",
    rating: 5,
    review: "Overall I am satisfied with the workload this season.\nThe team was professional and highly skilled Overall I am satisfied with the workload this season.\nThe team was professional and highly skilled.",
    source: "TrustPilot",
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-8 lg:px-24 max-w-full mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
        What Our Writers Say
      </h2>
      <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          loop={true} // Enables infinite loop
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-move every 3s
          className="overflow-hidden"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-10 text-center relative h-[500px]">
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                </div>

                <div className="mt-48">
                  <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
                  <div className="flex justify-center my-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 text-xl" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 italic whitespace-pre-line">
                    {testimonial.review}
                  </p>
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
    </section>
  );
};

export default TestimonialCarousel;
