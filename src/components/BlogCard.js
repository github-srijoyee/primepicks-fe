import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    
      <div className='blog-card m-2'>
        <div className='card-image'>
            <img src="groceries.webp" alt='blog' className='w-full'/>
        </div>
        <div className='blog-content m-2'>
            <p className='date text-xs p-2 font-serif text-gray-700'>23rd Sept , 2024</p>
            <h5 className='title font-bold text-lg pb-2'>The Future of E-Commerce: Trends Shaping Online Shopping in 2024</h5>
            <p className='desc text-sm p-2 text-gray-600'>
            The world of e-commerce is evolving rapidly, with new technologies and consumer behaviors reshaping how we shop online. 
            </p>
            <Link to="/blog/:id" className='button m-2'>Read More</Link>
        </div>
      </div>
 
  )
}

export default BlogCard
