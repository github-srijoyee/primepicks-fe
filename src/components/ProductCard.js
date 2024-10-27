import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
const ProductCard = (props) => {
  const {grid}=props;
  let location=useLocation();
  console.log(location);
  
  return (
    <>
    <div className={`${location.pathname=="/product"? `gr-${grid}`:"w-full"}`}>
    <Link to=":id" className='product-card relative'>
        <div className='wishlist-icon absolute'>
            <Link>
            <img src='wish.svg' alt='wishlist' className='w-5 h-5'/>
            </Link>
        </div>
      <div className='product-image'>
        <img className='w-full h-64' src='watch.png' alt='product image'/>
        <img className='w-full h-64' src='w1.png' alt='product image'/>
      </div>
      <div className='product-details'>
        <h6 className='brand'>Titan</h6>
        <h5 className='product-title font-bold'>Titan Watch exclusive collection for men</h5>
        <ReactStars
    count={5}
    size={24}
    value={3}
    edit={false}
    activeColor="#ffd700"
  />
  <p className={`description ${grid-12 && grid-6 ? "hidden":"block"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  </p>
        <p className='price'>Rs.3000</p>
      </div>
      <div className='action-bar absolute'>
        <div className='flex flex-col gap-2'>
            <Link>
            <img src='comp.svg' alt='compare' className='w-5 h-5'/>
            </Link>
            <Link>
            <img src='view.svg' alt='view' className='w-5 h-5'/>
            </Link>
            <Link>
            <img src='cart1.png' alt='add to cart' className='w-5 h-5'/>
            </Link>
        </div>
      </div>
    </Link>
    </div>
     <div className={`${location.pathname=="/product"? `gr-${grid}`:"w-full"}`}>
     <Link className='product-card relative'>
         <div className='wishlist-icon absolute'>
             <Link>
             <img src='wish.svg' alt='wishlist' className='w-5 h-5'/>
             </Link>
         </div>
       <div className='product-image'>
         <img className='w-full h-64' src='watch.png' alt='product image'/>
         <img className='w-full h-64' src='w1.png' alt='product image'/>
       </div>
       <div className='product-details'>
         <h6 className='brand'>Titan</h6>
         <h5 className='product-title font-bold'>Titan Watch exclusive collection for men</h5>
         <ReactStars
     count={5}
     size={24}
     value={3}
     edit={false}
     activeColor="#ffd700"
   />
    <p className={`description ${ grid-12 && grid-6 ? "hidden":"block"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    </p>
         <p className='price'>Rs.3000</p>
       </div>
       <div className='action-bar absolute'>
         <div className='flex flex-col gap-2'>
             <Link>
             <img src='comp.svg' alt='compare' className='w-5 h-5'/>
             </Link>
             <Link>
             <img src='view.svg' alt='view' className='w-5 h-5'/>
             </Link>
             <Link>
             <img src='cart1.png' alt='add to cart' className='w-5 h-5'/>
             </Link>
         </div>
       </div>
     </Link>
     </div>
     </>
  )
}

export default ProductCard
