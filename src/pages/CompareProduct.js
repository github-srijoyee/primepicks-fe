import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Color from '../components/Color'

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"}/>
      <BreadCrumb title="Compare Products"/>
      <div className='compare-product-wrapper py-5 home-wrapper-2 bg-gray-100'>
        <div className='max-w-screen-xl mx-auto '>
            <div className='flex flex-wrap gap-4'>
                <div className='w-1/4'>
                <div className='compare-product-card relative'>
                    <img src='cross.svg' alt='cross' className='absolute cross w-full'/>
                    <div className='product-card-image'>
                        <img src='watch.png' alt="watch"/>
                    </div>
                    <div className='compare-product-details'>
                        <h5 className='title'>Titan Sonata Collection</h5>
                        <h6 className='price mb-3 mt-3'>Rs. 3000</h6>
                        <div>
                            <div className='product-detail'>
                                <h5>Brand:</h5>
                                <p className='text-xs text-gray-800'>Titan</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Type:</h5>
                                <p className='text-xs text-gray-800'>Watch</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Availability:</h5>
                                <p className='text-xs text-gray-800'>In Stock</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Color:</h5>
                              <Color/>
                            </div>
                            <div className='product-detail'>
                                <h5>Size:</h5>
                                <div className='flex gap-2'>
                                    <p>S</p>
                                    <p>M</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className='w-1/4'>
                <div className='compare-product-card relative'>
                    <img src='cross.svg' alt='cross' className='absolute cross w-full'/>
                    <div className='product-card-image'>
                        <img src='watch.png' alt="watch"/>
                    </div>
                    <div className='compare-product-details'>
                        <h5 className='title'>Titan Sonata Collection</h5>
                        <h6 className='price mb-3 mt-3'>Rs. 3000</h6>
                        <div>
                            <div className='product-detail'>
                                <h5>Brand:</h5>
                                <p className='text-xs text-gray-800'>Titan</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Type:</h5>
                                <p className='text-xs text-gray-800'>Watch</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Availability:</h5>
                                <p className='text-xs text-gray-800'>In Stock</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Color:</h5>
                              <Color/>
                            </div>
                            <div className='product-detail'>
                                <h5>Size:</h5>
                                <div className='flex gap-2'>
                                    <p>S</p>
                                    <p>M</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default CompareProduct
