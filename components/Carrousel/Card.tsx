import React from 'react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: string;
}

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <div className="relative w-56 h-[350px] p-4 bg-white rounded shadow-card overflow-hidden cursor-pointer">
      <img className="w-full h-56 object-contain" src={product.image} alt={product.name} />
      <div className="w-[224px] border-t-[1px] border-gray-200">
        <div className="pt-5 pl-4 absolute flex flex-col gap-[5px]">
          <div className="flex items-center gap-[10px]">
            <div className="w-3 text-2xl leading-6 text-gray-800">$</div>
            <div className="text-2xl leading-6 text-gray-800">{product.price}</div>
            <div className="font-normal text-sm leading-4 text-enviogratis">{product.discount}</div>
          </div>
          <div className="h-5 font-semibold text-xs flex items-center text-enviogratis gap-[10px]">Envío gratis</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
