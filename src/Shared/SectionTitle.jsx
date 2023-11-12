const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className='text-center py-10 w-3/4 lg:w-3/6 mx-auto'>
      <p className='text-yellow-600 pb-4'>{subHeading}</p>
      <h3 className='lg:text-4xl md:text-2xl text-xl uppercase border-y-2 py-6  '>
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
