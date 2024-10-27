import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProducts from '../components/SpecialProducts';
import { Helmet } from 'react-helmet';
import Container from './Container';
import { services } from '../utils/Data';
const Home = () => {
  return (
    <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>PrimePicks-Home</title>
            </Helmet>
            <Container class1="home-wrapper-1 py-5">
            <div className='flex flex-wrap'>
      {/* First image without the hover effect */}
      <div className='w-full sm:w-1/2'>
        <div className='small-banner relative p-3'>
          <img src='banner1.webp' alt="main banner" className='w-full rounded-lg' />
          <div className='main-banner-content absolute'>
            <h4 className='font-serif text-violet-950'>Pick the Prime Ones.</h4>
            <h5 className='font-serif'>Sale on all products!</h5>
            <p className='text-xs pt-2'>Starting from Rs.299/-</p>
            <Link className='button mt-7'>BUY NOW</Link>
          </div>
        </div>
      </div>

      {/* Four grid images with hover effect */}
      <div className='w-full sm:w-1/2'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-0'>
          {['accessories.jpeg', 'clothes.jpg', 'groceries.webp', 'electronics.jpg'].map((imgSrc, index) => (
            <div className='small-banner relative group' key={index}>
              <div className='relative p-3'>
                <img
                  src={imgSrc}
                  alt="main banner"
                  className='w-full h-full rounded-lg object-cover transition-opacity duration-300 group-hover:opacity-70'
                />
                <div className='small-banner-content custom-banner absolute inset-0 bg-violet-950 bg-opacity-60 flex flex-col justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg'>
                  <h4>Special Offer</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
            </Container>
    

            <Container className='home-wrapper-2 mt-5 mb-5 bg-[#f5f5f7]'>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-5 mb-7'>
    {services.map((service, index) => (
      <div key={index} className='flex flex-col sm:flex-row items-center sm:items-start sm:text-left text-center hover:bg-violet-950 hover:text-white hover:rounded-lg p-2'>
        <img src={service.image} alt={service.title} className='h-10 w-10 mb-2 sm:mb-0 sm:mr-4' />
        <div>
          <h6 className='font-bold text-sm'>{service.title}</h6>
          <p className='mb-0 text-xs'>{service.tagline}</p>
        </div>
      </div>
    ))}
  </div>
</Container>


<section className='home-wrapper-2 py-5 bg-[#f5f5f7]'>
<div className='max-w-screen-xl mx-auto'>
    <div className='flex flex-wrap'>
      <div className='w-full'>
        <div className='categories flex flex-wrap'>
          {[
            { title: "Menswear", items: "500 items", imgSrc: "men.png" },
            { title: "Womens'", items: "600 items", imgSrc: "women.png" },
            { title: "Male accessories", items: "100 items", imgSrc: "watch.png" },
            { title: "Female accessories", items: "400 items", imgSrc: "cosmo.png" },
            { title: "Cameras", items: "10 items", imgSrc: "camera.webp" },
            { title: "Groceries", items: "Unlimited", imgSrc: "groc.png" },
            { title: "Electronics", items: "1000 items", imgSrc: "mobile.png" },
            { title: "Furnitures", items: "100 items", imgSrc: "furni.png" }
          ].map((category, index) => (
            <div key={index} className='flex items-center'>
              <div>
                <img src={category.imgSrc} alt={category.title} className='h-16 w-16' />
              </div>
              <div className='ml-4'>
                <h6>{category.title}</h6>
                <p>{category.items}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

<section className='featured-wrapper home-wrapper-2 py-5 bg-[#f5f5f7]'>
  <div className='max-w-screen-xl mx-auto'>
    <h3 className='section-heading font-bold text-3xl mb-3 ms-2'>Featured Collections</h3>
    <div className='flex flex-wrap'>
      {/* For larger screens, 4 items in a row */}
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
        <ProductCard />
      </div>
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
        <ProductCard />
      </div>
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
        <ProductCard />
      </div>
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
        <ProductCard />
      </div>
    </div>
  </div>
</section>

<section className='famous-wrapper py-5 home-wrapper-2 bg-[#f5f5f7]'>
  <div className='max-w-screen-xl mx-auto'>
    <h3 className='section-heading font-bold text-3xl mb-5 ms-2'>Prime Offers</h3>
    <div className='flex flex-wrap'>
      <div className='w-full sm:w-1/2 lg:w-1/4 p-2'>
        <div className='famous-card bg-black relative rounded-lg m-1'>
          <img src='sw.png' alt='' className='pt-20 w-full'/>
          <div className='famous-content absolute'>
            <h5 className='text-white text-sm font-thin'>BIG SCREEN</h5>
            <h6 className='text-white text-lg font-bold'>Smart Watch Series 7</h6>
            <p className='text-gray-300 text-xs'>From Rs.6999 to Rs.49999</p>
          </div>
        </div>
      </div>
      
      <div className='w-full sm:w-1/2 lg:w-1/4 p-2'>
        <div className='famous-card bg-white relative rounded-lg m-1 overflow-hidden'>
          <img src='fam2.png' alt='' className='pt-20 w-full h-[24.5rem]'/>
          <div className='famous-content absolute'>
            <h5 className='text-black text-sm font-thin uppercase'>Ethnic</h5>
            <h6 className='text-black text-lg font-bold'>Sharara Collection</h6>
            <p className='text-gray-800 text-xs'>Rs.1299 onwards</p>
          </div>
        </div>
      </div>

      <div className='w-full sm:w-1/2 lg:w-1/4 p-2'>
        <div className='famous-card bg-white relative rounded-lg m-1'>
          <img src='he.avif' alt='' className='pt-20 w-full h-[24.5rem]'/>
          <div className='famous-content absolute'>
            <h5 className='text-black text-sm font-thin uppercase'>Headset</h5>
            <h6 className='text-black text-lg font-bold'>Boat headset</h6>
            <p className='text-gray-800 text-xs'>From Rs.5999 onwards</p>
          </div>
        </div>
      </div>

      <div className='w-full sm:w-1/2 lg:w-1/4 p-2'>
        <div className='famous-card bg-white relative rounded-lg m-1'>
          <img src='fc.jpeg' alt='' className='pt-20 w-full h-[24.5rem]'/>
          <div className='famous-content absolute'>
            <h5 className='text-black text-sm font-thin uppercase'>Grocery</h5>
            <h6 className='text-black text-lg font-bold'>Ferrero Rocher</h6>
            <p className='text-gray-800 text-xs'>From Rs.6999 to Rs.49999</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>


<section className='special-wrapper py-5 home-wrapper-2 bg-[#f5f5f7]'>
  <div className='max-w-screen-xl mx-auto'>
    <div className='flex flex-wrap'>
      <h3 className='section-heading font-bold text-3xl mb-3 ms-2'>Special Products</h3>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-3'>
      <SpecialProducts />
      <SpecialProducts />
      <SpecialProducts />
    </div>
  </div>
</section>

<section className='popular-wrapper home-wrapper-2 py-5 bg-[#f5f5f7]'>
  <div className='max-w-screen-xl mx-auto'>
    <h3 className='section-heading font-bold text-3xl mb-3 ms-2'>Our Popular Products</h3>
    <div className='flex flex-wrap'>
      {/* For larger screens, 4 items in a row */}
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
        <ProductCard />
      </div>
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
        <ProductCard />
      </div>
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
        <ProductCard />
      </div>
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
        <ProductCard />
      </div>
    </div>
  </div>
</section>

<section className='marque-wrapper py-5'>
  <div className='max-w-screen-xl mx-auto py-5'>
    <div className='flex flex-wrap'>
      <div className='w-full'>
        <div className='marquee-inner-wrapper card-wrapper bg-white p-3'>
          <Marquee className='flex'>
            {/* Adjust the width of the images for different screen sizes */}
            <div className='mx-4 w-24 sm:w-20 md:w-24 lg:w-28 xl:w-32'>
              <img src='brand1.png' alt='brand'/>
            </div>
            <div className='mx-4 w-24 sm:w-20 md:w-24 lg:w-28 xl:w-32'>
              <img src='brand2.png' alt='brand'/>
            </div>
            <div className='mx-4 w-24 sm:w-20 md:w-24 lg:w-28 xl:w-32'>
              <img src='brand3.png' alt='brand'/>
            </div>
            <div className='mx-4 w-24 sm:w-20 md:w-24 lg:w-28 xl:w-32'>
              <img src='brand4.png' alt='brand'/>
            </div>
            <div className='mx-4 w-24 sm:w-20 md:w-24 lg:w-28 xl:w-32'>
              <img src='brand5.png' alt='brand'/>
            </div>
            <div className='mx-4 w-24 sm:w-20 md:w-24 lg:w-28 xl:w-32'>
              <img src='brand6.png' alt='brand'/>
            </div>
            <div className='mx-4 w-24 sm:w-20 md:w-24 lg:w-28 xl:w-32'>
              <img src='brand7.png' alt='brand'/>
            </div>
            <div className='mx-4 w-24 sm:w-20 md:w-24 lg:w-28 xl:w-32'>
              <img src='brand8.png' alt='brand'/>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  </div>
</section>


<section className='blog-wrapper home-wrapper-2 py-5 bg-[#f5f5f7]'>
  <div className='max-w-screen-xl mx-auto'>
    <h3 className='section-heading font-bold text-3xl mb-3 ms-2'>Our Latest Blogs</h3>
    <div className='flex flex-wrap'>
      {/* For larger screens, 4 items in a row */}
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
        <BlogCard />
      </div>
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
        <BlogCard />
      </div>
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
        <BlogCard />
      </div>
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
        <BlogCard />
      </div>
    </div>
  </div>
</section>



    </>
  )
}

export default Home;



