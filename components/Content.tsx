import React from 'react'
import Image from 'next/image';

import firstdiv from '../public/a@2x.png';
import creditcardsvg from '../public/creditcardsvg.svg';
import transfersvg from '../public/transfersvg.svg';
import paymentagreementsvg from '../public/paymentagreementsvg.svg';
import viewmoresvg from '../public/viewmoresvg.svg';
import beneficio1 from '../public/beneficio1.png';
import beneficio2 from '../public/beneficio2.png';
import beneficio3 from '../public/beneficio3.png';
import disney from '../public/disney.png';
import hbo from '../public/hbo.png';
import paramount from '../public/paramount.png';
import descubre1 from '../public/descubre1.png';
import descubre2 from '../public/descubre2.png';
import populares1 from '../public/populares1.svg';
import populares2 from '../public/populares2.svg';
import populares3 from '../public/populares3.svg';
import populares4 from '../public/populares4.svg';
import populares5 from '../public/populares5.svg';
import populares6 from '../public/populares6.svg';
import populares7 from '../public/populares7.svg';
import populares8 from '../public/populares8.svg';
import populares9 from '../public/populares9.svg';
import populares10 from '../public/populares10.svg';
import populares11 from '../public/populares11.svg';
import populares12 from '../public/populares12.svg';
import populares13 from '../public/populares13.svg';
import populares14 from '../public/populares14.svg';
import creditcard from '../public/paymentsvg.svg';
import shipping from '../public/shippingsvg.svg';
import protectedsvg from '../public/protectedsvg.svg';
import full from '../public/svg.svg';
import dplus from '../public/div.svg';
import starplus from '../public/div1.svg';
import carromercadolibre from '../public/div2@2x.png';
import lego from '../public/lego.png';
import xiaomi from '../public/xiaomi.png';
import oster from '../public/oster.png';
import nikon from '../public/nikon.png';
import legobackground from '../public/legobackground.png';
import xiaomibackground from '../public/xiaomibackground.png';
import osterbackground from '../public/osterbackground.png';
import nikonbackground from '../public/nikonbackground.png';
import legoitem1 from '../public/legoitem1.png';
import legoitem2 from '../public/legoitem2.png';
import legoitem3 from '../public/legoitem3.png';
import xiaomiitem1 from '../public/xiaomiitem1.png';
import xiaomiitem2 from '../public/xiaomiitem2.png';
import xiaomiitem3 from '../public/xiaomiitem3.png';
import osteritem1 from '../public/osteritem1.png';
import osteritem2 from '../public/osteritem2.png';
import osteritem3 from '../public/osteritem3.png';
import nikonitem1 from '../public/nikonitem1.png';
import nikonitem2 from '../public/nikonitem2.png';
import nikonitem3 from '../public/nikonitem3.png';
import supermercado from '../public/supermercado.png';
import supermercado1 from '../public/supermercado1.png';
import supermercado2 from '../public/supermercado2.png';
import supermercado3 from '../public/supermercado3.png';
import supermercado4 from '../public/supermercado4.png';
import supermercado5 from '../public/supermercado5.png';
import supermercado6 from '../public/supermercado6.png';
import supermercado7 from '../public/supermercado7.png';
import supermercado8 from '../public/supermercado8.png';
import supermercadosvg from '../public/svg2.svg';
import ofertassvg1 from '../public/ofertassvg1.svg';
import ofertassvg2 from '../public/ofertassvg2.svg';
import Carousel from './Carrousel/Carousel';

const products = [
    {
      id: 1,
      name: "Producto 1",
      image: "/product.png",
      price: 210.900,
      discount: '32% OFF',
      envio: 'Envío gratis',
    },
    {
      id: 2,
      name: "Producto 2",
      image: "/product1.png",
      price: 850.000,
      discount: '25%OFF',
      envio: 'Envío gratis',
    },
    {
      id: 3,
      name: "Producto 3",
      image: "/product2.png",
      price: 350.000,
      discount: '20%OFF',
      envio: '',
    },
    {
        id: 4,
        name: "Producto 3",
        image: "/product3.png",
        price: 950.000,
        discount: '20% OFF',
        envio: 'Envío gratis',
      },
      {
        id: 5,
        name: "Producto 3",
        image: "/product4.png",
        price: 80.000,
        discount: '10%OFF',
        envio: '',
      },
      {
        id: 6,
        name: "Producto 3",
        image: "/product5.png",
        price: 150.000,
        discount: '8%OFF',
        envio: 'Envío gratis',
      },
      {
        id: 7,
        name: "Producto 3",
        image: "/product6.png",
        price: 40.000,
        discount: '15%OFF',
        envio: '',
      },
      {
        id: 8,
        name: "Producto 3",
        image: "/product7.png",
        price: 120.000,
        discount: '10%OFF',
        envio: 'Envío gratis',
      },
      {
        id: 9,
        name: "Producto 3",
        image: "/product8.png",
        price: 950.000,
        discount: '40%OFF',
        envio: 'Envío gratis',
      },
      {
        id: 10,
        name: "Producto 3",
        image: "/product9.png",
        price: 300.000,
        discount: '15%OFF',
        envio: 'Envío gratis',
      },
  ];

const Content = () => {
    return (
        <div className="bg-gray-200 h-[3586px] w-[1512px] top-[100px] absolute">


            <div className="">
                <div className="flex  space-x-1 absolute top-[318px] left-[726px]">
                    <div className="flex items-center justify-center w-[6px] h-[6px] bg-white rounded-full"><div className="w-[4px] h-[4px] bg-orange-800 rounded-full"></div></div>
                    <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                    <div className="flex items-center justify-center w-[6px] h-[6px] bg-white rounded-full"><div className="w-[4px] h-[4px] bg-orange-800 rounded-full"></div></div>
                    <div className="flex items-center justify-center w-[6px] h-[6px] bg-white rounded-full"><div className="w-[4px] h-[4px] bg-orange-800 rounded-full"></div></div>
                    <div className="flex items-center justify-center w-[6px] h-[6px] bg-white rounded-full"><div className="w-[4px] h-[4px] bg-orange-800 rounded-full"></div></div>
                    <div className="flex items-center justify-center w-[6px] h-[6px] bg-white rounded-full"><div className="w-[4px] h-[4px] bg-orange-800 rounded-full"></div></div>
                </div>
                <div style={{ background: `url(${firstdiv.src})`, height: 340, width: 1512, backgroundSize: 'contain' }}> </div>
            </div>


            <div className='pt-[40px] pl-[164px]'>
                <div className="bg-white w-[1184px] h-[90px] rounded">
                    <div className="flex flex-row items-start p-0 absolute h-32 font-semibold pl-[20px]">
                        <div className="w-[304.66px] h-[130px] ">
                            <Image src={creditcardsvg} alt='' width={48} height={48} className="pt-[20px]" />
                            <div className="text-base leading-5 text-black pl-20 pt-0 -mt-10">Hasta 48 cuotas</div>
                            <div className="h-4 not-italic font-normal text-xs leading-4 flex items-center text-blue-500 pl-20">Ver más</div>
                        </div>
                        <div className="w-[304.66px] h-[130px]">
                            <Image src={transfersvg} alt='' width={48} height={48} className="pt-[20px]" />
                            <div className="text-base leading-5 text-black pl-20 pt-0 -mt-10 ">Transferencias desde tu banco</div>
                            <div className="h-4 not-italic font-normal text-xs leading-4 flex items-center text-blue-500 pl-20">Ver más</div>
                        </div>
                        <div className="w-[304.66px] h-[130px]">
                            <Image src={transfersvg} alt='' width={48} height={48} className="pt-[20px]" />
                            <div className="text-base leading-5 text-black pl-20 pt-0 -mt-10 ">Paga en efectivo</div>
                            <div className="h-4 not-italic font-normal text-xs leading-4 flex items-center text-blue-500 pl-20">Ver más</div>
                        </div>
                        <div className="w-[304.66px] h-[130px]">
                            <Image src={viewmoresvg} alt='' width={48} height={48} className="pt-[20px]" />
                            <div className="text-base leading-5 text-black pl-20 pt-0 -mt-10 ">Más medios de pago</div>
                            <div className="h-4 not-italic font-normal text-xs leading-4 flex items-center text-blue-500 pl-20">Ver todos</div>
                        </div>
                    </div>
                </div>
                <div className="bg-neutral-200 w-[1px] h-[90px] left-[1078px] top-[380px] absolute "></div>
            </div>
            
            <div className="absolute left-[164px] pt-[43px]">
                <div className="flex justify-end items-center w-40 gap-[16px] pb-[22px] ">
                    <div className="w-20 h-8 not-italic font-light text-2xl text-gray-700">
                        Ofertas
                    </div>
                    <div className="not-italic font-normal text-sm leading-5 flex items-center text-blue-500">
                        Ver todas
                    </div>
                </div>
                
                
                
            </div>

            <div>
      <Carousel products={products} />
    </div>


            <div className="flex flex-col items-center p-0 absolute bg-white w-[1180px] h-[340px] left-[164px] top-[980.19px] rounded-t-lg ">
                <div className="flex items-center h-[87px] flex-none w-[1180px] bg-gradient-to-r from-suscribete1 to-suscribete2 rounded-t-lg ">
                    <div className="w-56 font-semibold text-2xl leading-7 flex text-white pl-6 w-max">
                        Suscríbete al nivel 6
                    </div>
                    <div className="border-l-2 border-white h-[37px] flex-none pl-2 left-[1024px] absolute">
                        <div className="w-32">
                            <div className="not-italic font-medium text-sm leading-3 flex text-white line-through"> $ 50.690 </div>
                            <div className="not-italic font-semibold text-xl flex text-white bottom-[100px]">
                                $17.899
                                <div className="w-32 h-6 flex-none order-1 flex-grow-0">
                                    <div className="not-italic font-semibold text-xs leading-3 pt-2 pl-2 text-white">/mes</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-[172px] flex-none w-[1180px] gap-[29px]">
                    <div className="h-6 text-base pl-6 pt-5 leading-4 font-medium">
                        Consigue los mejores beneficios en Mercado Libre
                    </div>
                    <div className="pl-6 flex">
                        <div className="flex items-center  gap-[16px]">
                            <Image src={dplus} alt="" width={74} height={74} />
                            <div className="not-italic text-sm leading-4 font-medium">Disney + sin cargo</div>
                        </div>
                        <div className="flex items-center pl-[168.328px] gap-[16px]">
                            <Image src={starplus} alt="" width={74} height={74} />
                            <div className="not-italic text-sm leading-4 font-medium">Star + sin cargo</div>
                        </div>
                        <div className="flex items-center pl-[186.328px] gap-[16px]">
                            <Image src={carromercadolibre} alt="" width={74} height={74} />
                            <div className="w-56 h-12 not-italic text-base leading-4 font-medium">Envíos gratis y rápidos desde $ 90.000 y 40% OFF en envíos de menos de $ 90.000</div>
                        </div>
                    </div>
                </div>
                <div className="box-border flex justify-end items-end h-20 w-[1180px] border-t border-gray-100 pb-[16px] pr-[30px]">
                    <div className="flex flex-col items-center w-32 h-12 bg-blue-500 rounded-md ">
                        <div className="text-sm flex text-white align-middle pt-[12px]">
                            Suscríbete
                        </div>
                    </div>
                </div>
            </div>


            <div className="top-[1360.19px] left-[164px] absolute pt-[1px]">
                <div className="flex justify-end items-center gap-[25px] w-[535.73px]">
                    <div className="absolute font-light text-2xl leading-8 text-gray-700 left-[8px] top-[37px]">
                        Beneficio de Mercado Puntos
                    </div>
                    <div className="absolute text-sm text-blue-500 top-[44px] left-[325px]">
                        Ver todos los beneficios
                    </div>
                </div>
                <div className="w-[1200px] h-[266px]">
                    <div className="flex items-center absolute top-0 gap-[16px] h-[450px] rounded">
                        <div style={{ background: `url(${beneficio1.src})`, height: 250, width: 384, backgroundSize: 'contain', borderRadius: 6 }}  >
                            <div className="w-[384px] h-[109px] mt-[142px] bg-gradient-to-b from-black/5 to-black rounded">
                            </div>
                            <div className="absolute h-24 align-top w-[384px] top-[240px]">
                                <Image src={disney} alt="" width={80} height={80} className="absolute left-[16px]" />
                                <div className="absolute font-semibold text-xl pl-24 text-white left-[16px] top-[18.5px] w-max">Sin cargo con el nivel 6</div>
                                <div className="absolute text-base leading-5 pl-24 text-white left-[16px] top-[47.92px] tracking-wide">Disney+ y Star+</div>
                            </div>
                        </div>
                        <div style={{ background: `url(${beneficio2.src})`, height: 250, width: 384, backgroundSize: 'contain', borderRadius: 6 }}  >
                            <div className="w-[384px] h-[109px] mt-[142px] bg-gradient-to-b from-purple-900 opacity-10 to-trueGray-900 rounded opacity-25">
                            </div>
                            <div className="absolute h-24 align-top w-[384px] top-[240px]">
                                <Image src={hbo} alt="" width={80} height={80} className="absolute left-[16px]" />
                                <div className="absolute leading-4 text-white pl-24 left-[16px] top-[4px] text-xs">7 DÍAS GRATIS</div>
                                <div className="absolute font-semibold text-xl pl-24 text-white left-[16px] top-[18.5px] w-[300px]">Hasta 50% OFF</div>
                                <div className="absolute text-base leading-5 pl-24 text-white left-[16px] top-[47.92px] tracking-wide">HBO Max</div>
                            </div>
                        </div>
                        <div style={{ background: `url(${beneficio3.src})`, height: 250, width: 384, backgroundSize: 'contain', borderRadius: 6 }}  >
                            <div className="w-[384px] h-[109px] mt-[142px] bg-gradient-to-b from-blue-500/10  to-blue-600 rounded ">
                            </div>
                            <div className="absolute h-24 align-top w-[384px] top-[240px]">
                                <Image src={paramount} alt="" width={80} height={80} className="absolute left-[16px] " />
                                <div className="absolute leading-4 text-white pl-24 left-[16px] top-[4px] text-xs">7 DÍAS GRATIS</div>
                                <div className="absolute font-semibold text-xl pl-24 text-white left-[16px] top-[18.5px] w-[300px]">Hasta 50% OFF</div>
                                <div className="absolute text-base leading-5 pl-24 text-white left-[16px] top-[47.92px] tracking-wide">Paramount+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="absolute w-[1200px] h-[398.19px] top-[1759.5px] left-[164px]">
                <div className="absolute font-light text-2xl leading-8 text-gray-700 left-[8px] top-[37px]">
                    Descubre
                </div>
                <div className="flex absolute left-0 gap-[15px] top-[93.19px]">
                    <div className="flex items-center bg-white rounded gap-[32px] w-[584px]">
                        <div className="h-48 flex-none order-none flex-grow w-[262.16px]">
                            <div className="font-semibold text-xs leading-3 text-gray-700 pl-8 pt-12 tracking-[3.5px]">RENUEVA TUS ESPACIOS</div>
                            <div className="h-8 font-semibold text-2xl uppercase text-gray-700 pl-8 pt-2 w-[600px]">HOGARES Y MUEBLES</div>
                            <div className="h-8 font-semibold text-2xl uppercase text-gray-700 pl-8">HASTA 50% OFF</div>
                        </div>
                        <Image src={descubre1} alt="" className="descubreimg2 rounded" width={289.8} height={250} />
                        <div className="absolute w-40 bg-blue-500 rounded-sm bottom-[40px] left-[36px] h-[36px]">
                            <div className="h-5 text-sm flex items-center text-white w-6/12 m-auto pt-[13px] pl-[12px]">  Ver más</div>
                        </div>
                    </div>
                    <div className="flex items-center bg-white rounded gap-[32px] w-[584px]">
                        <div className="h-48 flex-none order-none flex-grow w-[262.16px]">
                            <div className="font-semibold text-xs leading-3 text-gray-700 pl-8 pt-12 tracking-[3.5px]">SUSCRÍBETE AL NIVEL 6</div>
                            <div className="h-8 font-semibold text-2xl uppercase text-gray-700 pl-8 pt-2 w-[600px]">Por solo</div>
                            <div className="h-8 font-semibold text-2xl uppercase text-gray-700 pl-8">$17.899 cada mes</div>
                        </div>
                        <Image src={descubre2} alt="" className="descubreimg2 rounded" width={289.8} height={250} />
                        <div className="absolute w-40 bg-blue-500 rounded-sm bottom-[40px] left-[638px] h-[36px]" >
                            <div className="h-5 text-sm flex items-center text-white w-6/12 m-auto pt-[13px] pl-[5px]">
                                Suscribirme
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col justify-center items-center absolute w-[1512px] h-[505.19px] top-[2117.5px]">
                <div className="pt-8 w-[1200px] h-[505.19px]">
                    <div className="flex justify-end items-center h-8 gap-[25px] w-[454.64px]">
                        <div className="font-light text-2xl leading-8 text-gray-700 pl-1 w-[370px]">
                            Las mejores tiendas te esperan
                        </div>
                        <div className="font-normal text-sm leading-5 text-blue-500 flex-none pr-[40px] pt-[5px]">
                            Ver tiendas
                        </div>
                    </div>
                </div>
                <div className="flex-none order-1 flex-grow-0 w-[1200px]">
                    <div className="flex absolute gap-[16px] top-[100px]">
                        <div className="bg-white rounded w-[284px]">
                            <div className="pl-[107px] absolute font-semibold text-sm text-gray-500 top-[298px]">
                                Ver tienda
                            </div>
                            <div className="flex items-center absolute h-20 gap-[6px] top-[202px] pl-[32px]">
                                <Image src={legoitem1} alt="" width={70} height={70} />
                                <Image src={legoitem2} alt="" width={70} height={70} />
                                <Image src={legoitem3} alt="" width={70} height={70} />
                            </div>
                            <div className="flex justify-center absolute w-[284px] top-[151px]">
                                <div className="w-20 h-8 font-semibold text-2xl flex items-center text-gray-800 pl-2">
                                    Lego
                                </div>
                            </div>
                            <div className="absolute h-24 top-0 w-[284px]">
                                <Image src={legobackground} alt="" style={{ height: 95, width: 284, }} />
                            </div>
                            <img src={lego.src} alt="" className="absolute pl-[85px] top-[45px] bottom-[215px] " style={{ height: 110, }} />
                        </div>
                        <div className="bg-white rounded w-[284px]">
                            <div className="pl-[107px] absolute font-semibold text-sm text-gray-500 top-[298px]">
                                Ver tienda
                            </div>
                            <div className="flex items-center absolute h-20 gap-[6px] top-[202px] pl-[32px]">
                                <Image src={xiaomiitem1} alt="" width={70} height={70} />
                                <Image src={xiaomiitem2} alt="" width={70} height={70} />
                                <Image src={xiaomiitem3} alt="" width={70} height={70} />
                            </div>
                            <div className="flex justify-center absolute w-[284px] top-[151px]">
                                <div className="w-20 h-8 font-semibold text-2xl flex items-center text-gray-800 pl-2">
                                    Xiaomi
                                </div>
                            </div>
                            <div className="absolute h-24 top-0 w-[284px]">
                                <Image src={xiaomibackground} alt="" style={{ height: 95, width: 284, }} />
                            </div>
                            <img src={xiaomi.src} alt="" className="absolute pl-[85px] top-[45px] bottom-[215px] " style={{ height: 110, }} />
                        </div>
                        <div className="bg-white rounded w-[284px]">
                            <div className="pl-[107px] absolute font-semibold text-sm text-gray-500 top-[298px]">
                                Ver tienda
                            </div>
                            <div className="flex items-center absolute h-20 gap-[6px] top-[202px] pl-[32px]">
                                <Image src={osteritem1} alt="" width={70} height={70} />
                                <Image src={osteritem2} alt="" width={70} height={70} />
                                <Image src={osteritem3} alt="" width={70} height={70} />
                            </div>
                            <div className="flex justify-center absolute w-[284px] top-[151px]">
                                <div className="w-20 h-8 font-semibold text-2xl flex items-center text-gray-800 pl-2">
                                    Oster
                                </div>
                            </div>
                            <div className="absolute h-24 top-0 w-[284px]">
                                <Image src={osterbackground} alt="" style={{ height: 95, width: 284, }} />
                            </div>
                            <img src={oster.src} alt="" className="absolute pl-[85px] top-[45px] bottom-[215px] " style={{ height: 110, }} />
                        </div>
                        <div className="bg-white rounded w-[284px] h-[340px]">
                            <div className="pl-[107px] absolute font-semibold text-sm text-gray-500 top-[298px]">
                                Ver tienda
                            </div>
                            <div className="flex items-center absolute h-20 gap-[6px] top-[202px] pl-[32px]">
                                <Image src={nikonitem1} alt="" width={70} height={70} />
                                <Image src={nikonitem2} alt="" width={70} height={70} />
                                <Image src={nikonitem3} alt="" width={70} height={70} />
                            </div>
                            <div className="flex justify-center absolute w-[284px] top-[151px]">
                                <div className="w-20 h-8 font-semibold text-2xl flex items-center text-gray-800 pl-2">
                                    Nikon
                                </div>
                            </div>
                            <div className="absolute h-24 top-0 w-[284px]">
                                <Image src={nikonbackground} alt="" style={{ height: 95, width: 284, }} />
                            </div>
                            <img src={nikon.src} alt="" className="absolute pl-[85px] top-[45px] bottom-[215px] rounded-full" style={{ height: 110, }} />
                        </div>
                    </div>
                </div>
            </div>


            <div className="">
                <div className="absolute flex items-end absolute left-[164px] top-[2656px]">
                    <div className="w-36 text-2xl leading-6 items-center text-gray-700 font-light">
                        Colecciones:
                    </div>
                    <div className="flex items-end h-6">
                        <div className="font-semibold text-2xl leading-6 flex text-gray-700 pr-[10px]">
                            Supermercado
                        </div>
                        <Image src={supermercadosvg} alt="" className="pt-[20px]" />
                    </div>
                </div>
                <div className="absolute w-[1200px] h-[382px] left-[164px] top-[2709.69px] rounded-t">
                    <div className="bg-white rounded w-[383px] h-[384px] rounded-t">
                        <Image src={supermercado} alt="" width={383} height={281} className='rounded-t' />
                        <div className="h-24 bg-white w-[383px] rounded">
                            <div className="h-4 font-semibold text-xs leading-3 text-gray-700 pl-6 pt-5 tracking-[4px]">DESCUBRE</div>
                            <div className="pl-[25px] pt-[4px] pr-[137px] pb-[4px] ">
                                <div className="font-bold text-3xl leading-8 uppercase text-gray-700 pt-[20px]">Supermercado
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute w-[800px] h-[400px] left-[391px] top-[-8px]">
                        <div className="absolute h-[184px] bg-white rounded left-[8px] right-[608px] top-[8px] ">
                            <Image src={supermercado1} alt="" width={184} height={184} />
                        </div>
                        <div className="absolute h-45 bg-white rounded left-[208px] right-[408px] top-[8px]">
                            <Image src={supermercado2} alt="" width={184} height={184} />
                        </div>
                        <div className="absolute h-45 bg-white rounded left-[408px] right-[208px] top-[8px]">
                            <Image src={supermercado3} alt="" width={184} height={184} />
                        </div>
                        <div className="absolute h-45 bg-white rounded left-[608px] right-[8px] top-[8px]">
                            <Image src={supermercado4} alt="" width={184} height={184} />
                        </div>
                        <div className="absolute h-45 bg-white rounded left-[8px] right-[608px] top-[208px]">
                            <Image src={supermercado5} alt="" width={184} height={184} />
                        </div>
                        <div className="absolute h-45 bg-white rounded left-[208px] right-[408px] top-[208px]">
                            <Image src={supermercado6} alt="" width={184} height={184} />
                        </div>
                        <div className="absolute h-45 bg-white rounded left-[408px] right-[208px] top-[208px]">
                            <Image src={supermercado7} alt="" width={184} height={184} />
                        </div>
                        <div className="absolute h-45 bg-white rounded left-[608px] right-[8px] top-[208px]">
                            <Image src={supermercado8.src} alt="" height={184} width={184} />
                        </div>
                    </div>
                </div>
            </div>


            <div className="absolute w-[1200px] h-[473px] top-[3131.69px] left-[164px]">
                <div className="absolute font-light text-2xl text-gray-700 left-[13px] top-[8px] pt-[25px]">
                    Categorías populares
                </div>
                <div className="flex absolute rounded left-[10px] top-[93.19px]">
                    <div className="">
                        <div className="box-border flex flex-col justify-end items-center w-[170px] h-[170px] pr-[13px] pb-[44px] pl-[13px] gap-[11px] border bg-white border-solid border-gray-200 pt-[44px] border-r-1 border-b-1">
                            <Image src={populares1} alt="" width={48} height={48} />
                            <div className="h-5 text-sm leading-4 flex items-center text-center text-gray-800">Carros, Motos y Otros</div>
                        </div>
                        <div className="box-border flex flex-col justify-end items-center w-[170px] h-[170px]pr-[13px] pb-[44px] pl-[13px] gap-[11px] border bg-white border-solid border-gray-200 pt-[44px] border-r-1 border-b-1">
                            <Image src={populares2} alt="" width={48} height={48} />
                            <div className="h-5 text-sm leading-4 flex items-center text-center text-gray-800">Celulares y Teléfonos</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="box-border flex flex-col justify-end items-center w-[170px] h-[170px] pr-[13px] pb-[44px] pl-[13px] gap-[11px] border bg-white border-solid border-gray-200 pt-[44px] border-r-1 border-b-1">
                            <Image src={populares3} alt="" width={48} height={48} />
                            <div className="h-5 text-sm leading-4 flex items-center text-center text-gray-800">Computación</div>
                        </div>
                        <div className="box-border flex flex-col justify-end items-center w-[170px] h-[170px] pr-[13px] pb-[44px] pl-[13px] gap-[11px] border bg-white border-solid border-gray-200 pt-[44px] border-r-1 border-b-1">
                            <Image src={populares4} alt="" width={48} height={48} />
                            <div className="h-5 text-sm leading-4 flex items-center text-center text-gray-800">Belleza y Cuidado Personal</div>
                        </div>
                    </div>
                    <div className="populares3">
                        <div className="box-border flex flex-col justify-end items-center w-[170px] h-[170px] pr-[13px] pb-[44px] pl-[13px] gap-[11px] border bg-white border-solid border-gray-200 pt-[44px] border-r-1 border-b-1">
                            <Image src={populares5} alt="" width={48} height={48} />
                            <div className="h-5 text-sm leading-4 flex items-center text-center text-gray-800">Ropa y Accesorios</div>
                        </div>
                        <div className="box-border flex flex-col justify-end items-center w-[170px] h-[170px] pr-[13px] pb-[44px] pl-[13px] gap-[11px] border bg-white border-solid border-gray-200 pt-[44px] border-r-1 border-b-1">
                            <Image src={populares6} alt="" width={48} height={48} />
                            <div className="h-5 text-sm leading-4 flex items-center text-center text-gray-800">Deportes y Fitness</div>
                        </div>
                    </div>
                    <div className="populares4">
                        <div className="box-border flex flex-col justify-end items-center w-[170px] h-[170px] pr-[13px] pb-[44px] pl-[13px] gap-[11px] border bg-white border-solid border-gray-200 pt-[44px] border-r-1 border-b-1">
                            <Image src={populares7} alt="" width={48} height={48} />
                            <div className="h-5 text-sm leading-4 flex items-center text-center text-gray-800">Hogar y Muebles</div>
                        </div>
                        <div className="box-border flex flex-col justify-end items-center w-[170px] h-[170px] pr-[13px] pb-[44px] pl-[13px] gap-[11px] border bg-white border-solid border-gray-200 pt-[44px] border-r-1 border-b-1" >
                            <Image src={populares8} alt="" width={48} height={48} />
                            <div className="h-5 text-sm leading-4 flex items-center text-center text-gray-800">Electrónica, Audio<br></br>y Video</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="box-border flex flex-col justify-end items-center w-[170px] h-[170px] pr-[13px] pb-[44px] pl-[13px] gap-[11px] border bg-white border-solid border-gray-200 pt-[44px] border-r-1 border-b-1">
                            <Image src={populares9} alt="" width={48} height={48} />
                            <div className="h-5 text-sm leading-4 flex items-center text-center text-gray-800">Accesorios<br></br>para Vehículos</div>
                        </div>
                        <div className="box-border flex flex-col justify-end items-center w-[170px] h-[170px] pr-[13px] pb-[44px] pl-[13px] gap-[11px] border bg-white border-solid border-gray-200 pt-[44px] border-r-1 border-b-1">
                            <Image src={populares10} alt="" width={48} height={48} />
                            <div className="h-5 text-sm leading-4 flex items-center text-center text-gray-800">Consolas y Videojuegos</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="box-border flex flex-col justify-end items-center w-[170px] h-[170px] pr-[13px] pb-[44px] pl-[13px] gap-[11px] border bg-white border-solid border-gray-200 pt-[44px] border-r-1 border-b-1">
                            <Image src={populares11} alt="" width={48} height={48} />
                            <div className="h-5 text-sm leading-4 flex items-center text-center text-gray-800">Electrodomésticos</div>
                        </div>
                        <div className="box-border flex flex-col justify-end items-center w-[170px] h-[170px] pr-[13px] pb-[44px] pl-[13px] gap-[11px] border bg-white border-solid border-gray-200 pt-[44px] border-r-1 border-b-1">
                            <Image src={populares12} alt="" width={48} height={48} />
                            <div className="h-5 text-sm leading-4 flex items-center text-center text-gray-800">Juegos y Juguetes</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="box-border flex flex-col justify-end items-center w-[170px] h-[170px] pr-[13px] pb-[44px] pl-[13px] gap-[11px] border bg-white border-solid border-gray-200 pt-[44px] border-r-1 border-b-1">
                            <Image src={populares13} alt="" width={48} height={48} />
                            <div className="h-5 text-sm leading-4 flex items-center text-center text-gray-800">Cámaras y Accesorios</div>
                        </div>
                        <div className="box-border flex flex-col justify-end items-center w-[170px] h-[170px] pr-[13px] pb-[44px] pl-[13px] gap-[11px] border bg-white border-solid border-gray-200 pt-[44px] border-r-1 border-b-1">
                            <Image src={populares14} alt="" width={48} height={48} />
                            <div className="h-5 text-sm leading-4 flex items-center text-center text-gray-800">Herramientas</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="absolute left-[-2px] top-[3582.5px]">
                <div className="h-20 flex-none order-none flex-grow-0 w-[1200px]">
                    <div className="absolute h-[260px] left-[154px] right-[800px] top-[40px]">
                        <img src={creditcard.src} alt="" style={{ paddingLeft: 168, paddingTop: 30 }} />
                        <div className="absolute font-medium text-lg leading-7 flex items-center text-center w-[260.89px] left-[69.66px] top-[105px]">Paga con tarjeta o en efectivo</div>
                        <div className="absolute text-sm leading-4 text-center text-gray-500 w-[303.4px] left-[48.39px] top-[136px]">Con Mercado Pago, paga en cuotas y aprovecha la comodidad de financiación que te da tu banco, o hazlo con efectivo en puntos de pago. ¡Y siempre es seguro!</div>
                        <div className="absolute w-48 text-xs text-blue-500 left-[102.55px] top-[220px]">Cómo pagar con Mercado Pago</div>
                    </div>
                    <div className="absolute h-[242px] left-[545px] right-[400px] top-[40px]">
                        <div className="absolute w-px h-16 left-0 bg-gray-300 top-[88.5px]"> </div>
                        <img src={shipping.src} alt="" style={{ paddingLeft: 169, paddingTop: 30 }} />
                        <div className="absolute font-medium text-lg leading-7 flex items-center text-center w-[260.89px] left-[69.66px] top-[105px]" style={{ paddingLeft: 13 }}>Envío gratis desde $ 90.000</div>
                        <div className="absolute text-sm leading-4 text-center text-gray-500 w-[303.4px] left-[48.39px] top-[136px]">Con solo estar registrado en Mercado<br></br>Libre, tienes envíos gratis en miles de productos seleccionados.</div>
                        <div className="absolute w-48 text-xs text-blue-500 left-[102.55px] top-[220px]" style={{ top: 200 }}>Conoce más sobre este beneficio</div>
                        <div className="absolute w-px h-16 bg-gray-300 left-[399px] top-[88.5px]"> </div>
                    </div>
                    <div className="absolute h-[242px] left-[950px]  top-[40px]">
                        <img src={protectedsvg.src} alt="" style={{ paddingLeft: 169, paddingTop: 30 }} />
                        <div className="absolute font-medium text-lg leading-7 flex items-center text-center w-[260.89px] left-[69.66px] top-[105px]" style={{ paddingLeft: 13 }}>Seguridad, de principio a fin</div>
                        <div className="absolute text-sm leading-4 text-center text-gray-500 w-[303.4px] left-[48.39px] top-[136px]">¿No te gusta? ¡Devuélvelo! En Mercado<br></br>Libre, no hay nada que no puedas hacer, porque estás siempre protegido.</div>
                        <div className="absolute w-48 text-xs text-blue-500 left-[102.55px] top-[220px]" style={{ top: 200, paddingLeft: 40 }}>Cómo te protegemos</div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Content
