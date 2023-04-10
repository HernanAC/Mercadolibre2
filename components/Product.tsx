import React from 'react'
import Image from 'next/image';

import product from '../public/product.jpg';
import full from '../public/svg.svg';

interface ProductCardProps {
    image: string;
    price: string;
}

const Product = ({ image, price }: ProductCardProps) => {
    return (
        <div>
            <div className="flex flex-col items-center p-0 w-56 bg-white rounded h-[350px]">
                <Image src={image} alt={price} width={224} height={224} />
                <div className="w-[224px] border-t-[1px] border-gray-200">
                    <div className="pt-5 pl-4 absolute flex flex-col gap-[5px]">
                        <div className="flex items-center gap-[10px]">
                            <div className="w-3 text-2xl leading-6 text-gray-800">$</div>
                            <div className="text-2xl leading-6 text-gray-800">{price}</div>
                            <div className="font-normal text-sm leading-4 text-enviogratis">32% OFF</div>
                        </div>
                        <div className="h-5 font-semibold text-xs flex items-center text-enviogratis gap-[10px]">Envío gratis</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
