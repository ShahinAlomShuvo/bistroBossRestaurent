import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import banner01 from "../../assets/Images/home/01.jpg";
import banner02 from "../../assets/Images/home/02.jpg";
import banner03 from "../../assets/Images/home/03.png";
import banner04 from "../../assets/Images/home/04.jpg";
import banner05 from "../../assets/Images/home/05.png";
import banner06 from "../../assets/Images/home/06.png";

const Banner = () => {
  return (
    <div>
      <Carousel className='text-center '>
        <div className='h-[80vh]'>
          <img className='w-full h-full' src={banner01} />
        </div>
        <div className='h-[80vh]'>
          <img className='w-full h-full' src={banner02} />
        </div>
        <div className='h-[80vh]'>
          <img className='w-full h-full' src={banner03} />
        </div>
        <div className='h-[80vh]'>
          <img className='w-full h-full' src={banner04} />
        </div>
        <div className='h-[80vh]'>
          <img className='w-full h-full' src={banner05} />
        </div>
        <div className='h-[80vh]'>
          <img className='w-full h-full' src={banner06} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
