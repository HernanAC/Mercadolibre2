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

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [cartItem, setCartItem] = useRecoilState<any>(cartState);

  const calculateTotalPrice = () => {
    return cartItem.reduce((total: number, item: any) => total + item.price, 0).toFixed(3);
  }

  const handleDelete = (id: number) => {
    const updatedCart = cartItem.filter((cartItem: any) => cartItem.id !== id);
    setCartItem(updatedCart);
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
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl w-[90%] lg:w-auto">
                <div className="px-6 py-4 bg-gray-100">
                  <div className="flex justify-between items-center">
                    <h3 className="text-3xl font-semibold text-gray-800 ml-4 mr-8">Carrito de compras</h3>
                    <button
                      className="text-gray-800 hover:text-gray-700 focus:outline-none focus:shadow-outline rounded-full bg-gray-300 px-2 py-1"
                      onClick={() => setShowModal(false)}
                    >
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="relative p-6 flex-auto">
                  <div className="px-6 py-4 bg-white">
                    <div className="text-lg font-medium text-gray-700 mb-4">Productos</div>
                    <hr className="my-2 border-gray-300" />
                    <div className="container mx-auto">
                      {cartItem.length <= 0
                        ? <h1 className='text-center text-2xl mt-8'>Tu carrito está vacío</h1>
                        : <ul>
                          {cartItem.map((item: any) => (
                            <li key={item.id} className='flex flex-rows items-center my-4 gap-4'>
                              <img src={item.image} alt={item.name} className='w-16 h-16 object-contain rounded-lg' />
                              <div className='flex flex-col flex-grow'>
                                <span className='text-lg font-medium text-gray-800'>{item.name}</span>
                                <span className='text-lg font-medium text-gray-800'>${item.price.toFixed(3)}</span>
                              </div>
                              <button
                                className="text-red-500 hover:text-red-600 focus:outline-none ml-4"
                                onClick={() => {
                                  const updatedCart = cartItem.filter((cartItem: any) => cartItem.id !== item.id);
                                  setCartItem(updatedCart);
                                }}>Eliminar</button>
                            </li>
                          ))}

                        </ul>}
                      <hr className='my-2 border-gray-300' />
                      {cartItem.length > 0 && (
                        <div className='max-w-[800px] mx-auto mt-4'>
                          <h2 className='text-right text-3xl font-bold'>Total: ${calculateTotalPrice()}</h2>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="border-t border-solid border-gray-300 rounded-b flex flex-row justify-end p-6">
                  <button
                    className="bg-gray-300 hover:bg-gray-400 active:bg-gray-500 text-black font-bold uppercase px-6 py-2 text-sm rounded-l shadow-md outline-none focus:outline-none mr-2"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                  <button
                    className="bg-gray-700 hover:bg-gray-800 active:bg-gray-900 text-white font-bold uppercase px-6 py-2 text-sm rounded-r shadow-md outline-none focus:outline-none ml-2"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Enviar
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