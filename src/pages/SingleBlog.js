import React, { useEffect } from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { getABlog } from '../features/blogs/blogSlice';

const SingleBlog = () => {
    const blogState = useSelector((state) => state?.blog?.singleBlog) || {};
    const location = useLocation();
    const getBlogId = location.pathname.split("/")[2];
    const dispatch = useDispatch();

    useEffect(() => {
        getBlog();
    }, []);

    const getBlog = () => {
        dispatch(getABlog(getBlogId));
    };

    return (
        <>
            <Meta title={blogState?.title || "Blog"} />
            <BreadCrumb title={blogState?.title || "Blog"} />  
            <div className='blog-wrapper home-wrapper-2 py-5 bg-[#E5E7EB]'>
                <div className='max-w-screen-xl mx-auto flex'>
                    <div className='w-full'>
                        <div className='single-blog-card'>
                            <Link to="/blogs" className='flex items-center gap-2'>
                                <HiOutlineArrowLeft /> Go Back to Blogs
                            </Link>
                            <h3 className='title mx-auto'>
                                {blogState?.title}
                            </h3>
                            <img
                                src={blogState?.images?.[0]?.url || "groceries.webp"}
                                alt='blog'
                                className='w-[50rem] my-4 mx-auto'
                            />
                            <p
                                className='mx-auto'
                                dangerouslySetInnerHTML={{ __html: blogState?.description || "No description available" }}
                            />
                        </div>
                    </div> 
                </div>
            </div>
        </>
    );
};

export default SingleBlog;
