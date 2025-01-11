import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";


import { Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";

export default function App() {
  const [review, setReview] = useState([]);

  useEffect(() => {
    const fetchReviewData = async () => {
      const res = await fetch("./review.json");
      const data = await res.json();
      setReview(data);
    };
    fetchReviewData();
  }, []);

  return (
    <div className="p-5 bg-gray-100">
      <h1 className="text-2xl font-bold text-center mb-8">Recent Reviews</h1>
      <Swiper
        spaceBetween={20} 
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
        
          640: {
            slidesPerView: 1, 
          },
          768: {
            slidesPerView: 2, 
          },
          1024: {
            slidesPerView: 3, 
          },
        }}
        className="mySwiper"
      >
  
        {review.map((reviews, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center bg-[#5d65b7] text-white rounded-lg h-40 shadow-md"
          >
            <ReviewCard reviews={reviews} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
