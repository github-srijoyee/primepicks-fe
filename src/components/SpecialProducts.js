import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const SpecialProducts = (props) => {
  const { title, brand, totalrating, price, quantity, sold,image,id } = props;

  // Calculate the percentage of sold products out of total quantity
  const soldPercentage = (sold / (sold + quantity)) * 100;

  return (
    <div className='special-product-card'>
      <div className='flex'>
        {/* Image container */}
        <div className='flex-1'>
          <img src={image} alt='camera' className='w-full object-contain'/>
        </div>

        {/* Product content */}
        <div className='special-product-content flex-3 p-4'>
          <h5 className='brand'>{brand}</h5>
          <h6 className='title'>
            {title}
          </h6>
          <ReactStars
            count={5}
            size={24}
            value={totalrating}
            edit={false}
            activeColor="#ffd700"
          />
          <p className='price'>
            <span className='red-p'>Rs {price}</span> &nbsp; <strike>Rs.15000</strike>
          </p>
          <div className='discount-till flex items-center gap-2'>
            <p className='mb-0'>
              <b>5</b> days
            </p>
            <div className='flex gap-2 items-center'>
              <span className='badge rounded-lg p-2 text-white bg-red-700'>1</span>:
              <span className='badge rounded-lg p-2 text-white bg-red-700'>1</span>:
              <span className='badge rounded-lg p-2 text-white bg-red-700'>1</span>
            </div>
          </div>
          <div className='prod-count'>
            <p>Products: {quantity}</p>
            <div className="w-full mt-3 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
              <div 
                className="bg-blue-600 h-1.5 rounded-full" 
                style={{ width: `${soldPercentage}%` }}
              ></div>
            </div>
          </div>
          <Link className='button m-3' to={'/product/'+id}>View</Link>
        </div>
      </div>
    </div>
  )
}

export default SpecialProducts;

