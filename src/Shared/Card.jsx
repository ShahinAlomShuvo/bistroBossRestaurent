const Card = ({ menu }) => {
  const { name, recipe, image, price } = menu;
  return (
    <div className='flex gap-5'>
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className='w-32'
        src={image}
        alt=''
      />
      <div>
        <h3 className='text-xl'>{name} -------------------</h3>
        <p>{recipe}</p>
      </div>

      <p className='text-yellow-500 '>${price}</p>
    </div>
  );
};

export default Card;
