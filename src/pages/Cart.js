import React, { useEffect } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartProduct, getUserCart } from '../features/user/userSlice';

const Cart = () => {
    const dispatch=useDispatch();
    const userCartState=useSelector(state=>state.auth.cartProducts)
    useEffect(()=>{
dispatch(getUserCart());
    },[])
   const deleteACartProduct=(id)=>{
    dispatch(deleteCartProduct({cartItemId:id}));
   }
    
  return (
    <>
      <Meta title={"Cart"}/>
      <BreadCrumb title="Cart"/> 
      <section className='cart-wrapper home-wrapper-2 py-5 '>
        <div className='max-w-screen-xl mx-auto'>
            <div className='flex flex-wrap'>
                <div className='w-full'>
                    <div className='cart-header py-3 flex justify-between content-center'>
                        <h4 className='cart-col-1'>Product</h4>
                        <h4 className='cart-col-2'>Price</h4>
                        <h4 className='cart-col-3'>Quantity</h4>
                        <h4 className='cart-col-4'>Total</h4>
                    </div>
                    {userCartState && userCartState?.map((item,index)=>{
                        return(
                            <div key={index} className='cart-data py-3 mb-2 flex justify-between content-center'>
                        <div className='cart-col-1 gap-2 flex items-center '>
                            <div className='w-1/4'>
                                <img src={item?.images?.[0].url?item?.images?.[0].url:""} alt='watch' className='w-full'/>
                            </div>
                            <div className='w-3/4'>
                                <p className='title'>{item?.productId?.title}</p>
                                <p className='color flex gap-3'>Color:<ul className='colors ps-0'>
                                    <li style={{backgroundColor:item?.color?.title}}></li></ul></p>
                            </div>
                        </div>
                        <div className='cart-col-2'>Rs. {item?.price}</div>
                        <div className='cart-col-3 flex items-start justify-start gap-3 '>
                            <div>
                                <input className='form-control w-10 border border-gray-400 rounded-lg' min={1} max={10} defaultValue={1} type='number' name='' id='' value={item?.quantity}/>
                            </div>
                            <button onClick={deleteACartProduct(item?._id)}>
                            <MdDelete  className='mt-1 text-red-600'/>
                            </button>
                        </div>
                        <div className='cart-col-4'>
                            <h5 className='price'>Rs. {item?.price*item?.quantity}</h5>
                        </div>
                    </div>
                        )
                    })}
                    
                </div>
                <div className='w-full py-2 mt-4'>
                    <div className='flex justify-between items-baseline'> 
                        <Link to="/product" className='button'>Continue Shopping</Link>
                        <div className='flex flex-col items-end'>
                    <h4 className='mb-2'>Subtotal: Rs. 6000</h4>
                    <p className='text-xs mb-4'>Taxes and shipping calculated at checkout</p>
                    <Link to="/checkout" className='button'>Checkout</Link>
                   </div>
                        </div>
                  
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Cart
