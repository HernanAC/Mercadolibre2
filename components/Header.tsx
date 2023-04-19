import React from 'react'
import logo from '../public/logo.png'
import categorias from '../public/categorias.svg';
import cart from '../public/cart.svg';

const Header = () => {
    return (
        <div className="bg-mercadolibre w-[1512px] h-[100px] shadow-lg">
            <div>
                <form className="w-[598px] h-[39px] bg-white top-[8px] left-[351px] absolute ">
                    <span className="text-slate-400  pl-[15px] pt-[7px] absolute">Buscar productos, marcas y más...</span>
                    <div className="bg-neutral-200 w-[1px] h-[26px] absolute left-[552px] top-[7px]"></div>
                </form>
                <div className="absolute w-32 h-8 left-[150px] top-[11px]">
                    <img src={logo.src} alt="" style={{ height: 34, width: 134, left: 10, top: 11 }} />
                </div>
            </div>
            <div className="flex flex-row pt-[25px] text-sm top-[45px] absolute pl-[170px]">
                <div className="">
                    Ingresa tu domicilio
                </div>
                <div className="flex flex-row gap-[20px]  text-header pl-[60px]">
                    <span className='flex flex-row gap-[7px] '>Categorías <img src={categorias.src} alt="" style={{ paddingBottom: 15 }} /></span>
                    <span>Ofertas</span>
                    <span>Historial</span>
                    <span>Supermercado</span>
                    <span>Moda</span>
                    <span>Vender</span>
                    <span>Ayuda / PQR</span>
                </div>
                <div className="flex flex-row gap-7 pl-[127px]">
                    <span>Crea tu cuenta</span>
                    <span>Ingresa</span>
                    <span>Mis compras</span>
                    <img className='pb-[10px]' src={cart.src} alt="" style={{ height: 35, width: 30, }} />
                </div>
            </div>
        </div>
    )
}

export default Header
