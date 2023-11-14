const RecommendsFoodCard = ({ items }) => {
  const { image, name, recipe, price } = items;
  return (
    <div className='card  bg-base-100 shadow-xl'>
      <div className='relative'>
        <img src={image} className='rounded-xl w-full' />
        <h2 className='absolute bg-slate-900 px-4  py-2 text-white rounded right-4 top-4'>
          ${price}
        </h2>
      </div>

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
