import React, { useEffect, useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from '../components/Color'
import { IoIosGitCompare } from "react-icons/io";
import { IoHeartCircleOutline } from "react-icons/io5";
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAProduct } from '../features/product/productSlice';
import {toast} from "react-toastify";
import { addProdToCart, getUserCart } from '../features/user/userSlice';

const SingleProduct = () => {
    const [color,setColor]=useState(null);
    const [quantity,setQuantity]=useState(1);
    const [alreadyAdded,setAlreadyAdded]=useState(false);
const location=useLocation();
const navigate=useNavigate();
const getProductId=location.pathname.split("/")[2];
const dispatch=useDispatch();
const productState=useSelector(state=>state?.product?.singleproduct)
const cartState=useSelector(state=>state.auth.cartProducts)
console.log(productState);

useEffect(()=>{
    dispatch(getAProduct(getProductId));
    dispatch(getUserCart());
},[])
useEffect(()=>{
    if (cartState && cartState.length > 0) {
    for(let index=0;index<cartState.length;index++){
if(getProductId===cartState[index]?.productId._id){
setAlreadyAdded(true)
}
    }
}
},[])
const uploadCart=()=>{
//if(color===null){
  //  toast.error("Please choose color")
    //return false
//}else{
dispatch(addProdToCart({productId:productState._id,quantity,color,price:productState?.price}))
navigate('/cart')
//}
}
    const props={width:400,height:500,zoomWidth:600,img:productState?.images?.[0]?.url || 'fallback-image-url.jpg'};
    const [orderedProduct,setOrderedProduct]=useState(true);
   const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
  return (
    <>
        <Meta title={"Product Name"}/>
        <BreadCrumb title="Product Name"/> 
        <div className='bg-gray-100'>
        <div className='main-product-wrapper py-5 home-wrapper-2'>
            <div className='max-w-screen-xl mx-auto'>
                <div className='flex flex-wrap'>
                    <div className='w-1/2'>
                    <div className='main-product-image'>
                        <div>
<ReactImageZoom {...props}/>
                        </div>
                    </div>
                    <div className='other-product-images flex flex-wrap gap-3'>
    {Array.isArray(productState?.images) && productState.images.length > 0 ? (
        productState.images.map((item, index) => (
            <div key={index}>
                <img src={item?.url} alt={`Product ${index}`} />
            </div>
        ))
    ) : (
        <p>No additional images available</p>
    )}
</div>

                    </div>
                    <div className='w-1/2'>
                   <div className='main-product-details'>
                    <div className='border-bottom'>
                    <h3 className='title'>{productState?.title}</h3>
                    </div>
                    <div className='border-bottom py-3'>
                        <p className='price'>Rs. {productState?.price}</p>
                        <div className='flex items-center gap-2'>
                        <ReactStars
                                count={5}
                                size={24}
                                value={4}
                                edit={false}
                                activeColor="#ffd700"
                                />
                                <div className='mb-0 t-review'>( 2 reviews )</div>   
                        </div>
                        <a href='#review' className='text-blue-500 review-btn'>Write a Review</a>
                    </div>
                    <div className='py-3'>
                        <div className='flex gap-2 items-center my-2'><h3 className='product-heading'>Type:</h3><p className='product-data'>Headphones</p></div>
                        <div className='flex gap-2 items-center my-2'><h3 className='product-heading'>Brand:</h3><p className='product-data'>{productState?.brand}</p></div>
                        <div className='flex gap-2 items-center my-2'><h3 className='product-heading'>Tags:</h3><p className='product-data'>{productState?.tags}</p></div>
                        <div className='flex gap-2 items-center my-2'><h3 className='product-heading'>Category:</h3><p className='product-data'>{productState?.category}</p></div>
                        <div className='flex gap-2 items-center my-2'><h3 className='product-heading'>Availability:</h3><p className='product-data'>In Stock</p></div>
                        <div className='flex gap-2 flex-col mt-2 mb-3'><h3 className='product-heading'>Size :</h3><p className='product-data'></p><div className='flex flex-wrap gap-3'><span className='bg-gray-500 text-white text-sm font-semibold px-2 py-1 rounded-full'>S</span>
                        <span className='bg-gray-500 text-white text-sm font-semibold px-2 py-1 rounded-full'>M</span>
                        <span className='bg-gray-500 text-white text-sm font-semibold px-2 py-1 rounded-full'>XL</span>
                        <span className='bg-gray-500 text-white text-sm font-semibold px-2 py-1 rounded-full'>XXL</span>
                        </div></div>
                        <div className='flex gap-2 flex-col mt-2 mb-3'>
                            {alreadyAdded===false && <>
                                <h3 className='product-heading'>Color :</h3><p className='product-data'><Color setColorcolor={setColor} Data={productState?.color}/></p>
                            </>}
                            </div>  
                        <div className='flex gap-2 flex-row mt-2 mb-3'>
                            {alreadyAdded===false && <>
                                <h3 className='product-heading'>Quantity :</h3><div className=''>
                                <input type='number' name="" min={1} max={10} style={{width:"70px"}} className='form-control border border-gray-500 px-2 rounded-lg' id='' onChange={(e)=>setQuantity(e.target.value)} value={quantity}/></div>
                            </>}
                            </div>
                        <div className='flex justify-center gap-3 items-start mt-4'>
                                <button className='button border-0 h-10' type='submit' onClick={()=>{alreadyAdded?navigate('/cart'):uploadCart()}}>{alreadyAdded?"Go to Cart":"Add to Cart"}</button>
                              {/*<button className='button border-0 h-10' type='submit'>Buy Now</button>*/ }  
                            </div>
                           <div className='flex items-center gap-3'>
                            <a href='' className='flex mt-2'>
                            <IoIosGitCompare className='mr-1 mt-1'/>
                                <a href=''>Add to Compare</a>
                            </a>
                            <a href='' className='flex mt-2'>
                            <IoHeartCircleOutline className='mr-1 mt-1'/>
                                <a href=''>Add to Wishlist</a>
                            </a>
                            </div> 
                            <div className='flex gap-2 flex-col items-center my-3'><h3 className='product-heading'>Shipping & Returns:</h3><p className='product-data'>Free shipping and returns available on all orders!<br/>We ship all domestic orders within 5-10 business days.</p></div>
                            <div className='flex gap-2 items-center my-3'><h3 className='product-heading'>Copy Product Link:</h3><a href="javascript:void(0);" onClick={()=>{copyToClipboard(window.location.href)}} className='text-blue-600 underline'>Click to Copy</a></div>
                    </div>
                   </div>
                    </div>
                </div>
            </div>
        </div>
        <section className='description-wrapper py-5 home-wrapper-2'>
            <div className='max-w-screen-lg mx-auto'>
                <div className='flex flex-wrap'>
                    <div className='w-full'>
                    <h4 className='italic text-gray-800 text-2xl font-bold'>Description</h4>
                        <div className='bg-white p-3'>
                        <p
                                dangerouslySetInnerHTML={{ __html: productState?.description || "No description available" }}></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="review" className='reviews-wrapper pb-5 home-wrapper-2'>
            <div className='max-w-screen-xl mx-auto'>
                <div className='flex flex-wrap'>
                    <div className='w-full'>
                        <h4>Reviews</h4>
                        <div className='review-inner-wrapper'>
                        <div className='review-head flex justify-between items-end'>
                            <div>
                                <h4 className='mb-2'>Customer Reviews</h4>
                                <div className='flex gap-2 items-center'>
                                <ReactStars
                                count={5}
                                size={24}
                                value={productState?.totalratings}
                                edit={false}
                                activeColor="#ffd700"
                                />
                                <div className='mb-0'>Based on 2 reviews</div>
                                </div>
                            </div>
                        
                        {
                            orderedProduct && (
                                <div>
                                    <a href='' className='text-blue-600 text-xs font-bold underline'>Write a Review</a>
                                    </div>
                            )
                        }
                        
                        </div>
                         <div className='review-form py-4'>
                            <h4>Write a Review</h4>
                         <form action='' className='flex flex-col gap-4'>
        <div>
        <ReactStars
                                count={5}
                                size={24}
                                value={4}
                                edit={true}
                                activeColor="#ffd700"
                                />
        </div>
                    <div>
                      <textarea className='form-control w-full border p-2 border-gray-300 rounded-md' cols="30" rows="4" placeholder='Comments'/>
                    </div>
                    <div className='flex justify-end'>
                      <button className='button font-light tracking-wider '>Submit Review</button>
                    </div>
                  </form>
                         </div>
                         <div className='reviews mt-4'>
                            <div className='review'>
                                <div className='flex gap-2 items-center'>
                                    <h6 className='mb-0'>Srijoyee</h6>
                                <ReactStars
                                count={5}
                                size={24}
                                value={4}
                                edit={true}
                                activeColor="#ffd700"
                                />    
                                </div>
                            
                                <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>   
                            </div>
                         </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </section>
        <section className='popular-wrapper home-wrapper-2 py-5 bg-[#f5f5f7]'>
  <div className='max-w-screen-xl mx-auto'>
    <h3 className='section-heading font-bold text-3xl mb-3 ms-2'>You May Also Like</h3>
    <div className='flex flex-wrap'>
      {/* For larger screens, 4 items in a row */}
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
        <ProductCard />
      </div>
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
        <ProductCard />
      </div>
    </div>
  </div>
</section>
</div>
    </>
  )
}

export default SingleProduct
