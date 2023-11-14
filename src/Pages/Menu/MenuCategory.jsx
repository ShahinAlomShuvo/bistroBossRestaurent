import { Link } from "react-router-dom";
import Card from "../../Shared/Card";
import Cover from "../../Shared/Cover";

const MenuCategory = ({
  offeredMenu,
  img,
  opacity,
  title,
  subTitle,
  textColor,
  bgColor,
}) => {
  return (
    <>
      {title && (
        <Cover
          img={img}
          opacity={opacity}
          title={title}
          subTitle={subTitle}
          textColor={textColor}
          bgColor={bgColor}
        ></Cover>
      )}
      <div className='container mx-auto grid md:grid-cols-2 gap-16 my-20'>
        {offeredMenu?.map((offered) => (
          <Card key={offered._id} menu={offered}></Card>
        ))}
      </div>
      <div className='flex justify-center mb-10'>
        <Link to={`/shop/${title}`}>
          <button className='btn btn-outline border-0 border-b-2 border-yellow-600 text-yellow-600 btn-warning'>
            Order Your Favorite Food
          </button>
        </Link>
      </div>
    </>
  );
};

export default MenuCategory;
