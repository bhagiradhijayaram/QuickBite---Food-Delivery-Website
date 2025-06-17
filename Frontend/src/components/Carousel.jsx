import { useEffect, useState } from "react";
import Slider from "react-slick";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute -left-5 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-3xl text-gray-700 hover:text-primary"
    onClick={onClick}
  >
    <FaRegArrowAltCircleLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute -right-5 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-3xl text-gray-700 hover:text-primary"
    onClick={onClick}
  >
    <FaRegArrowAltCircleRight />
  </div>
);

const Carousel = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/data/reviews.json");
        const data = await response.json();
        const safeReviews = Array.isArray(data.reviews) ? data.reviews : [];
        setReviews(safeReviews);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
        setReviews([]);
      }
    };

    fetchReviews();
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-12 bg-gray-100 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          What Our Customers Are Saying
        </h2>
        <p className="text-gray-600 mt-2">
          Real stories from food lovers like you
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        {reviews.length === 0 ? (
          <p className="text-center text-gray-500">No reviews found.</p>
        ) : (
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="px-3">
                <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
                  <img
                    src={review.image_url}
                    alt={review.name}
                    className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-primary"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {review.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mt-1">
                    {review.title}
                  </p>
                  <p className="text-sm text-gray-600 mt-3 italic">
                    {review.review}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default Carousel;
