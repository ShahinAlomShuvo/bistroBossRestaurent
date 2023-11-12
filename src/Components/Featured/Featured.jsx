import SectionTitle from "../../Shared/SectionTitle";
import feature from "../../assets/Images/home/featured.jpg";

const Featured = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${feature})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className='bg-fixed bg-black opacity-70 '
    >
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      ></SectionTitle>
      <div className='flex justify-center items-center container mx-auto gap-6 pb-20 pt-10 text-white '>
        <div>
          <img className='w-3/4 mx-auto rounded' src={feature} alt='' />
        </div>
        <div className='space-y-3'>
          <p className='text-xl '>March 20, 2023</p>
          <h5 className='text-2xl'>WHERE CAN I GET SOME?</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className='btn btn-outline text-white border-0 border-b-2'>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
