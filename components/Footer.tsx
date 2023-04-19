import React from 'react'
import img1 from '../public/sicpng@2x.png';
import img2 from '../public/pumpng@2x.png';

const Footer = () => {
    return (

        <div className="flex flex-col justify-end items-start absolute h-40 left-0 bg-white pt-[17px] gap-[16px] pr-[166px] top-[4036.5px] border-t-[1px] border-trueGray-200">
            <div className="flex-col flex-none order-none flex-grow-0 pt-2 pl-[166px]">
                <ul className="flex-none flex-grow-0 pl-0" >
                    <span className="mr-2 not-italic font-normal text-xs leading-3 items-center text-gray-800">Trabaja con nosotros </span>
                    <span className="mr-2 not-italic font-normal text-xs leading-3 items-center text-gray-800">Términos y condiciones </span>
                    <span className="mr-2 not-italic font-normal text-xs leading-3 items-center text-gray-800">Cómo cuidamos tu privacidad </span>
                    <span className="mr-2 not-italic font-normal text-xs leading-3 items-center text-gray-800">Accesibilidad </span>
                    <span className="mr-2 not-italic font-normal text-xs leading-3 items-center text-gray-800">Ayuda / PQR </span>
                    <span className="mr-2 not-italic font-normal text-xs leading-3 items-center text-gray-800">www.sic.gov.co</span>
                </ul>
                <div className="pt-[8px]">
                    <div className="h-4 flex items-center text-gray-500 text-[11px]">
                        Copyright © 1999-2023 MercadoLibre Colombia LTDA.
                    </div>
                    <div className="h-5 flex items-center text-gray-500 text-[11px]">
                        Carrera 17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia
                    </div>
                </div>
            </div>
            <div className='pl-[166px]'>
                <div className="box-border flex items-center h-16 flex-none gap-[20px] w-[1180px] border-t-[1px] border-gray-100 ">
                    <img src={img1.src} alt="" style={{ height: 30, width: 141, }} />
                    <img src={img2.src} alt="" style={{ height: 34, width: 200, }} />
                </div>
            </div>
        </div>
    )
}

export default Footer
