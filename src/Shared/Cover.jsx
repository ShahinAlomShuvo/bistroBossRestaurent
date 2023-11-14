import { Parallax } from "react-parallax";

const Cover = ({ img, title, subTitle, textColor, bgColor, opacity }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt='the dog'
        strength={-200}
      >
        <div className='hero min-h-[70vh] bg-fixed'>
          <div className='hero-overlay bg-opacity-40'></div>
          <div
            className={`hero-content rounded mt-20 w-3/4 text-center ${opacity}  ${bgColor} ${textColor}`}
          >
            <div className=' px-10 py-20'>
              <h1 className={`mb-5 text-5xl w-full font-bold uppercase `}>
                {title}
              </h1>
              <p className='mb-5'>{subTitle}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
