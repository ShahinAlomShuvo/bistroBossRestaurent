const RecommendsFoodCard = ({ recommend }) => {
  const { image, name, recipe } = recommend;
  return (
    <div className='card  bg-base-100 shadow-xl'>
      <img src={image} className='rounded-xl' />

      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{name}</h2>
        <p>{recipe}</p>
        <div className='card-actions'>
          <button className='btn btn-outline border-0 border-b-2 border-yellow-600 text-yellow-600 btn-warning'>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendsFoodCard;
