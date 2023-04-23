import React from 'react'
import { useRecoilState } from 'recoil';
import { cartState } from '@/atoms/cartState';
import { toast } from 'react-hot-toast';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: string;
  envio: string;
}

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {

  const [cartItem, setCartItem] = useRecoilState<any>(cartState);

  const addItemToCart = () => {
    if (cartItem.findIndex((pro: any) => pro.id === product.id) === -1) {
      setCartItem((prevState: any) => [...prevState, product])
    }else{
      setCartItem((prevState:any) => {
        return prevState.map((item:any) => {
          return item.id === product.id ? {...item, quantity: item.quantity +
          1} : item
        })
      })
    }
    toast(`Product added to cart`)
  }

  return (
    <button onClick={addItemToCart} className="relative w-56 h-[350px] p-4 bg-white rounded shadow-card overflow-hidden cursor-pointer">
      <img className="w-full h-56 object-contain" src={product.image} alt={product.name} />
      <div className="w-[224px] border-t-[1px] border-gray-200">
        <div className="pt-5 pl-4 absolute flex flex-col gap-[5px]">
          <div className="flex items-center gap-[10px]">
            <div className="w-3 text-2xl leading-6 text-gray-800">$</div>
            <div className="text-2xl leading-6 text-gray-800">{product.price.toFixed(3)}</div>
            <div className="font-normal text-sm leading-3 text-enviogratis">{product.discount}</div>
          </div>
          <div className="h-5 font-semibold text-xs flex items-center text-enviogratis gap-[10px]">{product.envio}</div>
        </div>
      </div>
    </button>
  );
};

export default Card;
