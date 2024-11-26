import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { addToWishlist } from '../features/product/productSlice';
import { toast } from 'react-toastify';

const ProductCard = (props) => {
  const { grid, data = [] } = props; // Set default value for data to an empty array
  const dispatch=useDispatch();
  let location = useLocation();
const addToWish=(id)=>{
dispatch(addToWishlist(id));
toast.success("Added to Wishlist");
}
  // If data is not an array or is empty, render a fallback message
  if (!Array.isArray(data) || data.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <>
      {data.map((item, index) => (
        <div key={index} className={`${location.pathname === "/product" ? `gr-${grid}` : "w-full"}`}>
          <div className='product-card relative'>
            <div className='wishlist-icon absolute'>
              <button onClick={(e)=>{addToWish(item?._id)}}>
                <img src='wish.svg' alt='wishlist' className='w-5 h-5' />
              </button>
            </div>
            <div className='product-image'>
              <img className='w-[90%] h-64 mx-auto' src={item?.images[0]?.url} alt='product image'/>
              <img className='w-[90%] h-64 mx-auto' src={item?.images[1]?.url} alt='product image'/>
            </div>
            <div className='product-details'>
              <h6 className='brand'>{item?.brand}</h6>
              <h5 className='product-title font-bold'>{item?.title}</h5>
              <ReactStars
                count={5}
                size={24}
                value={parseFloat(item?.totalrating) || 0}
                edit={false}
                activeColor="#ffd700"
              />
              <p className={`description ${grid === 12 || grid === 6 ? "block" : "hidden"}`} dangerouslySetInnerHTML={{ __html: item?.description }}/>
              <p className='price'>Rs. {item?.price}</p>
            </div>
            <div className='action-bar absolute'>
              <div className='flex flex-col gap-2'>
                <Link>
                  <img src='comp.svg' alt='compare' className='w-5 h-5'/>
                </Link>
                <Link to={'/product/'+item?._id}>
                  <img src='view.svg' alt='view' className='w-5 h-5'/>
                </Link>
                <Link>
                  <img src='cart1.png' alt='add to cart' className='w-5 h-5'/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
