import React, { useEffect } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { useDispatch,useSelector } from 'react-redux'
import { getUserProductWishlist } from '../features/user/userSlice'
import { addToWishlist } from '../features/product/productSlice'
import { toast } from 'react-toastify'

const Wishlist = () => {
        const dispatch=useDispatch();
        useEffect(()=>{
          getWishlistFromDb();
        },[]);
        const getWishlistFromDb=()=>{
      dispatch(getUserProductWishlist());
        };
        const wishlistState=useSelector((state)=>state?.auth?.wishlist?.wishlist)||[];
        const removeFromWishlist=(id)=>{
                dispatch(addToWishlist(id));
                setTimeout(()=>{
dispatch(getUserProductWishlist());
                },300);
        }
  return (
    <>
     <Meta title={"Wishlist"}/>
     <BreadCrumb title="Wishlist"/> 
     <div className='wishlist-wrapper home-wrapper-2 py-5 bg-gray-100'>
        <div className='max-w-screen-xl mx-auto'>
<div className='flex flex-wrap gap-4'>
        {wishlistState.length===0 && <div className='flex justify-center items-center text-2xl'>No Products added ☹</div>}
        {
                wishlistState?.map((item,index)=>{
                        return(
                                <div className='w-1/4' key={index}>
                                <div className='wishlist-card bg-white rounded-md relative'>
                                    <img src='cross.svg' alt='cross' className='absolute cross w-full' onClick={()=>{removeFromWishlist(item?._id)}}/>
                                    <div className='wishlist-card-image'>
                            <img src={item?.images[0].url?item?.images[0].url:""} alt='watch' className='w-full'/>
                                    </div>
                                    <div className='px-3 py-3'>
                            <h5 className='title'>{item?.title}</h5>
                            <h6 className='price'>Rs {item?.price}</h6>
                                    </div>
                                </div>
                                </div>
                        )
                })
        }
   
</div>
        </div>
     </div>
    </>
  )
}

export default Wishlist
