import { useEffect, useState } from "react";
import RecommendsFoodCard from "./RecommendsFoodCard";
import SectionTitle from "../../Shared/SectionTitle";

const ChefRecommends = () => {
  const [recommends, setRecommends] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const chefRecommends = data.slice(1, 4);
        setRecommends(chefRecommends);
      });
  }, []);

  return (
    <div className='mt-10 mb-20'>
      <SectionTitle
        heading={"CHEF RECOMMENDS"}
        subHeading={"---Should Try---"}
      ></SectionTitle>
      <div className='grid md:grid-cols-3 gap-8 container mx-auto'>
        {recommends?.map((recommend) => (
          <RecommendsFoodCard
            key={recommend._id}
            recommend={recommend}
          ></RecommendsFoodCard>
        ))}
      </div>
    </div>
  );
};

export default ChefRecommends;
