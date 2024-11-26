import React, { useEffect } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import BlogCard from '../components/BlogCard'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from '../features/blogs/blogSlice';
import moment from "moment";

const Blog = () => {
  const blogState=useSelector((state)=>state?.blog?.blog)||[];
  
    const dispatch=useDispatch();
    useEffect(()=>{
      getBlogs();
    },[]);
    const getBlogs=()=>{
  dispatch(getAllBlogs());
    }
  return (
    <>
       <Meta title={"Blogs"}/>
       <BreadCrumb title="Blogs"/>
       <div className='blog-wrapper home-wrapper-2 py-5 bg-[#E5E7EB]'>
        <div className='max-w-screen-xl mx-auto flex'>
            <div className='w-1/4'>
            <div className='filter-card mb-3 bg-white z-10'>
                <h3 className='filter-title'>Find by categories</h3>
            <div>
              <ul className='ps-0'>
                <li>Garments</li>
                <li>Electonics</li>
                <li>Accessories</li>
                <li>Furnitures</li>
              </ul>
            </div>
            </div>
            </div>
            <div className='w-3/4'>
            <div className='flex flex-wrap gap-2 mb-3'>
              {blogState && 
                blogState?.map((item,index)=>{
                  return(
<div className='w-[47%]' key={index}>
                <BlogCard id={item?._id} title={item?.title} description={item?.description} image={item?.images[0]?.url}
               date={moment(item?.createdAt).format("MMMM Do YYYY, h:mm a")} />
                </div>
                  )
                })
              }
            </div>
            </div>
        </div>
       </div>
    </>
  )
}

export default Blog
