import React, { useState } from 'react';
import cart from '../public/cart.svg';
import { FaShoppingCart } from 'react-icons/fa'
import { useRecoilState } from "recoil"
import { cartState } from '@/atoms/cartState';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: string;
  envio: string;
}

interface ModalProps {
  product: Product;
}

const Modal: React.FC<ModalProps> = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const [cartItem] = useRecoilState<any>(cartState)

  const totalPrice = () => {
    let total = 0
    cartItem.forEach((item: any) => total += (item.price))
    return total
  }

  return (
    <>
      <button
        className="lg:w-[30px] lg:h-[35px] w-[55px] h-[50px]"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <div className='flex lg:hidden'>
          <FaShoppingCart className='w-[50px] h-[50px]' />
          <span className='absolute top-[22px] text-[13px] bg-red-600 h-[22px] w-[22px] 
            rounded-full grid place-items-center text-white'>{cartItem.length}</span>
        </div>
        <div className='hidden lg:flex'>
          <FaShoppingCart className='w-[30px] h-[30px]' />
          <span className='absolute top-[22px] text-[13px] bg-red-600 h-[18px] w-[18px] 
            rounded-full grid place-items-center text-white'>{cartItem.length}</span>
        </div>
        {/* <img className='flex lg:hidden' src={cart.src} alt="" style={{ height: 55, width: 50, }} />
        <img className='hidden lg:flex pb-[10px]' src={cart.src} alt="" style={{ height: 35, width: 30, }} /> */}
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Shopping Cart</h3>
                  <button
                    className=" border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <div className='text-left text-3xl font-bold'>Productos</div>
                    <div className='container mx-auto'>
                      {cartItem.length <= 0
                        ? <h1 className='text-center text-4xl mt-32'>Your Cart Is Empty</h1>
                        : <ul>
                          {cartItem.map((item: any) => (
                            <li className='flex flex-rows gap-10'>
                              <span className='text-2xl leading-6 text-gray-800'>{item.name}</span>
                              <span className='text-2xl leading-6 text-gray-800'>${item.price.toFixed(3)}</span>
                            </li>
                          ))}
                        </ul>}
                      {cartItem.length > 0 && (<div className='max-w-[800px] mx-auto mt-4'>
                        <h2 className='text-right text-3xl font-bold'>Total: ${totalPrice().toFixed(3)}</h2>
                      </div>)}



                    </div>
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;