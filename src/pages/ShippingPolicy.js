import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const ShippingPolicy = () => {
  return (
    <>
       <Meta title={"Shipping Policy"}/>
       <BreadCrumb title="Shipping Policy"/> 
       <section className='policy-wrapper py-5 home-wrapper-2 bg-gray-100'>
<div className='max-w-screen-xl mx-auto'>
  <div className='flex flex-wrap'>
    <div className='w-full'>
      <div className='policy'></div>
    </div>
  </div>
</div>
       </section>
    </>
  )
}

export default ShippingPolicy
