import chefService from "../../assets/Images/home/chef-service.jpg";
const AboutUs = () => {
  const bgImageStyle = {
    backgroundImage: `url(${chefService})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  };
  return (
    <div style={bgImageStyle} className='container mx-auto py-28 my-20'>
      <div className=' bg-white mx-28 py-12 px-6 rounded text-center text-black '>
        <div style={overlayStyle}></div>
        <h3 className='text-3xl uppercase'>Bistro Boss</h3>
        <p className='w-2/3 mx-auto py-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
