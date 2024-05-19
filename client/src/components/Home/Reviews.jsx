import { useGetReviews } from "../../hooks/TanStackQuery/useGet";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import quote from "../../assets/icon/quote.png";
import Loader from "../common/Loader/Loader";

const Reviews = () => {
  const { reviews, reviewsLoading } = useGetReviews();

  return (
    <>
      {reviewsLoading ? (
        <Loader />
      ) : (
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {reviews?.map((review) => (
            <SwiperSlide key={review?._id}>
              <div className="flex flex-col items-center justify-center gap-4 md:gap-10">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review?.rating}
                  readOnly
                />
                <div>
                  <img
                    className="size-[100px] object-cover"
                    src={quote}
                    alt="quote"
                  />
                </div>
                <p className="text-[#444444] font-medium text-sm md:text-xl px-8">
                  {review?.details}
                </p>
                <h3 className="text-xl md:text-3xl text-[#CD9003] font-medium">
                  {review?.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Reviews;
