import SectionTitle from "../../Shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className='container mx-auto'>
      <SectionTitle
        heading={"TESTIMONIALS"}
        subHeading={"---What Our Clients Say---"}
      ></SectionTitle>

      <div>
        <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
          {reviews?.map((review) => (
            <SwiperSlide key={review._id}>
              <div className='mt-10 mb-20 px-40  flex flex-col justify-center items-center text-center space-y-8'>
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <div className='flex gap-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='47'
                    height='86'
                    viewBox='0 0 47 86'
                    fill='none'
                  >
                    <path
                      d='M34.615 39.1542L21.1533 39.1542C19.5506 39.1542 18.1881 38.5935 17.0662 37.4716C15.9449 36.3497 15.3835 34.9876 15.3835 33.3845V31.4623C15.3835 27.2152 16.8862 23.5897 19.8914 20.5846C22.8963 17.5805 26.5225 16.0778 30.7691 16.0778H34.615C35.6565 16.0778 36.5576 15.697 37.3191 14.9361C38.0803 14.1747 38.4608 13.2736 38.4608 12.2319V4.53889C38.4608 3.49738 38.0801 2.59543 37.3191 1.83408C36.5578 1.07379 35.6567 0.692383 34.615 0.692383L30.7691 0.692383C26.602 0.692383 22.6265 1.50446 18.84 3.12628C15.0539 4.74917 11.7791 6.9429 9.01428 9.70769C6.2497 12.4712 4.0566 15.7462 2.43393 19.5328C0.811258 23.3188 -0.000183105 27.2954 -0.000183105 31.4621L-0.000183105 73.7688C-0.000183105 76.9756 1.1211 79.6985 3.36472 81.9429C5.60854 84.1861 8.33355 85.3076 11.5385 85.3076H34.6164C37.8212 85.3076 40.5453 84.1861 42.7894 81.9429C45.0326 79.6985 46.1545 76.9756 46.1545 73.7688V50.6929C46.1545 47.4867 45.0326 44.7638 42.7879 42.5191C40.5449 40.2762 37.8197 39.1542 34.615 39.1542Z'
                      fill='gray'
                    />
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='47'
                    height='86'
                    viewBox='0 0 47 86'
                    fill='none'
                  >
                    <path
                      d='M34.615 39.1542L21.1533 39.1542C19.5506 39.1542 18.1881 38.5935 17.0662 37.4716C15.9449 36.3497 15.3835 34.9876 15.3835 33.3845V31.4623C15.3835 27.2152 16.8862 23.5897 19.8914 20.5846C22.8963 17.5805 26.5225 16.0778 30.7691 16.0778H34.615C35.6565 16.0778 36.5576 15.697 37.3191 14.9361C38.0803 14.1747 38.4608 13.2736 38.4608 12.2319V4.53889C38.4608 3.49738 38.0801 2.59543 37.3191 1.83408C36.5578 1.07379 35.6567 0.692383 34.615 0.692383L30.7691 0.692383C26.602 0.692383 22.6265 1.50446 18.84 3.12628C15.0539 4.74917 11.7791 6.9429 9.01428 9.70769C6.2497 12.4712 4.0566 15.7462 2.43393 19.5328C0.811258 23.3188 -0.000183105 27.2954 -0.000183105 31.4621L-0.000183105 73.7688C-0.000183105 76.9756 1.1211 79.6985 3.36472 81.9429C5.60854 84.1861 8.33355 85.3076 11.5385 85.3076H34.6164C37.8212 85.3076 40.5453 84.1861 42.7894 81.9429C45.0326 79.6985 46.1545 76.9756 46.1545 73.7688V50.6929C46.1545 47.4867 45.0326 44.7638 42.7879 42.5191C40.5449 40.2762 37.8197 39.1542 34.615 39.1542Z'
                      fill='gray'
                    />
                  </svg>
                </div>
                <p>{review.details}</p>
                <h3 className='text-2xl text-orange-400'>{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
