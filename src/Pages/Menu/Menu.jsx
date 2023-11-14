import { Helmet } from "react-helmet";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Shared/SectionTitle";
import MenuCategory from "./MenuCategory";
import Cover from "../../Shared/Cover";
import menuBanner from "../../assets/Images/menu/banner3.jpg";
import dessertBanner from "../../assets/Images/menu/dessert-bg.jpeg";
import pizzaBanner from "../../assets/Images/menu/pizza-bg.jpg";
import saladBanner from "../../assets/Images/menu/salad-bg.jpg";
import soupBanner from "../../assets/Images/menu/soup-bg.jpg";

const Menu = () => {
  const [menus] = useMenu();
  const dessertMenu = menus.filter((items) => items.category === "dessert");
  const soupMenu = menus.filter((items) => items.category === "soup");
  const saladMenu = menus.filter((items) => items.category === "salad");
  const pizzaMenu = menus.filter((items) => items.category === "pizza");
  const offeredMenu = menus.filter((items) => items.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main cover  */}
      <Cover
        img={menuBanner}
        opacity={"opacity-60"}
        title={"OUR MENU"}
        subTitle={`Would you like to try a dish? `}
        textColor={"text-white"}
        bgColor={"bg-black"}
      ></Cover>

      {/* offer menu  */}
      <SectionTitle
        heading={`TODAY'S OFFER`}
        subHeading={`---Don't miss---`}
      ></SectionTitle>
      <MenuCategory offeredMenu={offeredMenu}></MenuCategory>

      {/* dessert menu */}
      <MenuCategory
        img={dessertBanner}
        opacity={"opacity-50"}
        title={"dessert"}
        subTitle={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
        textColor={"text-white"}
        bgColor={"bg-black"}
        offeredMenu={dessertMenu}
      ></MenuCategory>

      {/* pizza menu */}
      <MenuCategory
        img={pizzaBanner}
        opacity={"opacity-50"}
        title={"pizza"}
        subTitle={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
        textColor={"text-white"}
        bgColor={"bg-black"}
        offeredMenu={pizzaMenu}
      ></MenuCategory>

      {/* salad menu */}
      <MenuCategory
        img={saladBanner}
        opacity={"opacity-50"}
        title={"salad"}
        subTitle={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
        textColor={"text-white"}
        bgColor={"bg-black"}
        offeredMenu={saladMenu}
      ></MenuCategory>

      {/* soup menu */}
      <MenuCategory
        img={soupBanner}
        opacity={"opacity-50"}
        title={"soup"}
        subTitle={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
        textColor={"text-white"}
        bgColor={"bg-black"}
        offeredMenu={soupMenu}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
