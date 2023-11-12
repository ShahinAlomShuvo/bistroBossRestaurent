import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import CallUs from "../../Components/CallUs/CallUs";
import ChefRecommends from "../../Components/ChefRecommends/ChefRecommends";
import Featured from "../../Components/Featured/Featured";
import OnlineOrder from "../../Components/OnlineOrder/OnlineOrder";
import OurMenu from "../../Components/OurMenu/OurMenu";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OnlineOrder></OnlineOrder>
      <AboutUs></AboutUs>
      <OurMenu></OurMenu>
      <CallUs></CallUs>
      <ChefRecommends></ChefRecommends>
      <Testimonials></Testimonials>
      <Featured></Featured>
    </div>
  );
};

export default Home;
