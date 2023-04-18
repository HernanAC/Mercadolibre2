import Product from '../Product';

const productInfo = {
    focus: [
        {
            image: '/product.png',
            price: '699.999'
        },
        {
            image: '/product1.png',
            price: '5.699.000'
        },
        {
            image: '/product2.png',
            price: '5.599.000'
        },
        {
            image: '/product3.png',
            price: '6.999.000'
        },
        {
            image: '/product4.png',
            price: '749.000'
        },
        {
            image: '/product5.png',
            price: '1.119.000'
        },
        {
            image: '/product7.png',
            price: '199.000'
        },
        /*{
            image: '/product7.png',
            price: '1.899.000'
        },*/
        {
            image: '/product8.png',
            price: '159.000'
        },
        {
            image: '/product9.png',
            price: '6.749.000'
        }
    ]
}

function Carousel() {

const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
}
const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
}


  return (
    <div className="justify-between flex w-[1184px] pl-[150px] pt-[80px]">
      <div className="right-0 top-0 ">
        <button onClick={scrollLeft} className="p-10 rounded-full bg-black">
        </button>
      </div>
      <div id="content" className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide">
        <div>
        <div className="card bg-white w-[200px] h-[350px] m-2 rounded-lg shadow-lg">
          <div className="top">
          {productInfo.focus.map((product, index) => {
                            return <Product key={index} image={product.image} price={product.price} />;
                        })}
          </div>
        </div>
        </div>   
      </div>
      <div className="right-0 top-0 ">
        <button onClick={scrollRight} className="p-10 rounded-full bg-black">
          </button>
      </div>
    </div>
  );
}

export default Carousel;