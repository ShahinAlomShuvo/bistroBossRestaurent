import RecommendsFoodCard from "../../Components/ChefRecommends/RecommendsFoodCard";

const ShopTab = ({ menu }) => {
  return (
    <div className='grid md:grid-cols-3 gap-8 pt-10'>
      {menu.map((items) => (
        <RecommendsFoodCard key={items._id} items={items}></RecommendsFoodCard>
      ))}
    </div>
  );
};

export default ShopTab;
