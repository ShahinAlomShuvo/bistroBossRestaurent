import { useState } from "react";
import Cover from "../../Shared/Cover";
import shopBanner from "../../assets/Images/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import ShopTab from "./ShopTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const OurShop = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();

  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menus] = useMenu();
  const dessertMenu = menus.filter((items) => items.category === "dessert");
  const soupMenu = menus.filter((items) => items.category === "soup");
  const saladMenu = menus.filter((items) => items.category === "salad");
  const pizzaMenu = menus.filter((items) => items.category === "pizza");
  const drinksMenu = menus.filter((items) => items.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Shop</title>
      </Helmet>
      <Cover
        img={shopBanner}
        title={"OUR SHOP"}
        subTitle={"Would You Like To Try A Dish?"}
        opacity={"opacity-50"}
        textColor={"text-white"}
        bgColor={"bg-black"}
      ></Cover>
      <div className='py-10 container mx-auto'>
        <div className=' py-5 text-center '>
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList className='text-yellow-500'>
              <Tab>SALAD</Tab>
              <Tab>PIZZA</Tab>
              <Tab>SOUPS</Tab>
              <Tab>DESSERTS</Tab>
              <Tab>DRINKS</Tab>
            </TabList>
            <TabPanel>
              <ShopTab menu={saladMenu}></ShopTab>
            </TabPanel>
            <TabPanel>
              <ShopTab menu={pizzaMenu}></ShopTab>
            </TabPanel>
            <TabPanel>
              <ShopTab menu={soupMenu}></ShopTab>
            </TabPanel>
            <TabPanel>
              <ShopTab menu={dessertMenu}></ShopTab>
            </TabPanel>
            <TabPanel>
              <ShopTab menu={drinksMenu}></ShopTab>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default OurShop;
