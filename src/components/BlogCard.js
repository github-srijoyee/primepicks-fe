import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = (props) => {
  const {id,title,description,date,image}=props;
  return (
    
      <div className='blog-card m-2 h-[30rem]'>
        <div className='card-image'>
            <img src={image?image:"groceries.webp"} alt='blog' className='w-full h-64'/>
        </div>
        <div className='blog-content m-2'>
            <p className='date text-xs p-2 font-serif text-gray-700'>{date}</p>
            <h5 className='title font-bold text-lg pb-2'>{title}</h5>
            <p className=
            {`description desc text-sm p-2 text-gray-600 `} dangerouslySetInnerHTML={{ __html: description.substr(0,70)+"..." }}>
            </p>
            <Link to={"/blog/"+id} className='button m-2'>Read More</Link>
        </div>
      </div>
 
  )
}

export default BlogCard
