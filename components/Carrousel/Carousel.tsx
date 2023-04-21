import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: string;
  envio: string;
}

interface CarouselProps {
  products: Product[];
}

const CustomPrevArrow = (props: any) => (
  <button
    className="ml-0 absolute z-10 flex items-center justify-center w-16 h-16 bg-white border border-gray-400 rounded-full shadow-md left-4 md:left-8 lg:left-2 top-1/2 transform -translate-y-1/2 hover:bg-gray-100"
    onClick={props.onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-10 text-sky-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>
);

const CustomNextArrow = (props: any) => (
  <button
    className="mr-0 absolute z-10 flex items-center justify-center w-16 h-16 bg-white border border-gray-400 rounded-full shadow-md right-4 md:right-8 lg:right-0 top-1/2 transform -translate-y-1/2 hover:bg-gray-100"
    onClick={props.onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-10 text-sky-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
);

const Carousel: React.FC<CarouselProps> = ({ products }) => {
  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 4,
    swipe: false,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        // Screens greater than >= 320px
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      }
    ]
  };

  return (
    <div className="ms-[90px] lg:mx-auto my-20 max-w-[920px] lg:max-w-[1184px] p-4">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="mx-2">
            <Card product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
