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
}

interface CarouselProps {
  products: Product[];
}

const Carousel: React.FC<CarouselProps> = ({ products }) => {
  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 4,
    swipe: false,
  };

  return (
    <div className="mx-auto my-20 max-w-[1184px] p-4">
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
