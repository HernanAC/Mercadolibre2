import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ products }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 4,
    prevArrow: (
      <button type="button" className="slick-prev">
        Previous
      </button>
    ),
    nextArrow: (
      <button type="button" className="slick-next">
        Next
      </button>
    ),
  };

  return (
    <div className="w-[100%] max-w-[1184px] pl-[150px] pt-[80px]">
        <Slider {...settings}>
          {products.map((product) => (
            <div className="mr-20px flex flex-col items-center p-0 w-56 bg-white rounded h-[350px]">
            <div key={product.id} className="">
              <img src={product.image} alt={product.name} />
              <div className="w-[224px] border-t-[1px] border-gray-200">
                    <div className="pt-5 pl-4 absolute flex flex-col gap-[5px]">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span>{product.price}</span>
              </div>
              </div>
            </div>
            </div>
          ))}
        </Slider>
    </div>
  );
};

export default Carousel;
