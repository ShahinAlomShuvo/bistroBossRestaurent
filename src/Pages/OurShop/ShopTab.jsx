import { BounceLoader } from "react-spinners";
import RecommendsFoodCard from "../../Components/ChefRecommends/RecommendsFoodCard";
import useMenu from "../../Hooks/useMenu";

const ShopTab = ({ menu }) => {
  const [, isPending] = useMenu();
  return (
    <>
      {isPending ? (
        <div className='flex justify-center py-20'>
          <BounceLoader color='#36d7b7' />
        </div>
      ) : (
        <div className='grid md:grid-cols-3 gap-8 pt-10'>
          {menu.map((items) => (
            <RecommendsFoodCard
              key={items._id}
              items={items}
            ></RecommendsFoodCard>
          ))}
        </div>
      )}
    </>
  );
};

export default ShopTab;
