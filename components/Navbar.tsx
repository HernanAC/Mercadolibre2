import React from 'react'
import logo from '../public/logo.png'
import categorias from '../public/categorias.svg';
import cart from '../public/cart.svg';
import menu from '../public/menu.png'
import Modal from '@/components/Modal'
import data from "../data.json"

interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    discount: string;
    envio: string;
}

interface NavbarProps {
    product: Product;
}

const Navbar = () => {
    return (
        <div className="flex flex-row bg-mercadolibre w-[1024px] h-[100px] justify-between justify-items-center lg:hidden">
            <div>
                <form className="w-[420px] h-[54px] bg-white top-[20px] left-[351px] absolute ">
                    <span className="text-slate-400  pl-[15px] pt-[7px] absolute">Buscar productos, marcas y más...</span>
                    <div className="bg-neutral-200 w-[1px] h-[26px] absolute left-[455px] top-[7px]"></div>
                </form>
                <div className="absolute w-32 h-8 left-[80px] top-[20px] ">
                    <img className='max-w-none' src={logo.src} alt="" style={{ height: 54, left: 10, top: 11 }} />
                </div>
            </div>

            <div className='flex flex-row justify-between right-[2px] items-center'>
                <div className="flex flex-row w-full  top-[8px]  justify-end pr-5">
                    <button><img className='' src={menu.src} alt="" style={{ height: 55, width: 50 }} />
                    </button>
                </div>

                <div className="flex flex-row w-full top-[8px]  justify-end pr-5">
                    <Modal />
                </div>
            </div>
        </div>
    )
}

export default Navbar