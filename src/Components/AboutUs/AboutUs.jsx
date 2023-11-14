import chefService from "../../assets/Images/home/chef-service.jpg";
import Cover from "../../Shared/Cover";

const AboutUs = () => {
  return (
    <div className='container mx-auto my-20'>
      <Cover
        img={chefService}
        title={"Bistro Boss"}
        subTitle={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.`}
        textColor={"text-gray-800"}
        bgColor={"bg-white"}
      ></Cover>
    </div>
  );
};

export default AboutUs;
