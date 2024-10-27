import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className='contact-inner-wrapper py-5 bg-[#E5E7EB]'>
        <div className='w-full lg:max-w-screen-xl mx-auto px-4'>
          <div className='flex flex-col items-center'>
            <div className='w-full'>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29480.974261962703!2d88.32910157286153!3d22.53711033301273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02773db4935153%3A0xd88deda839812c82!2sKolkata%2C%20West%20Bengal%20700020!5e0!3m2!1sen!2sin!4v1729790535156!5m2!1sen!2sin"
                width="100%" 
                height="450" 
                className="border-0 w-full"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className='w-full mt-5'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='contact-us-section text-center p-4 rounded-lg'>
                  <h3 className='contact-title font-serif text-2xl mb-3'>Contact Us</h3>
                  <form action='' className='flex flex-col gap-4'>
                    <div>
                      <input type='text' className='form-control w-full' placeholder='Name'/>
                    </div>
                    <div>
                      <input type='email' className='form-control w-full' placeholder='Email'/>
                    </div>
                    <div>
                      <input type='tel' className='form-control w-full' placeholder='Mobile Number'/>
                    </div>
                    <div>
                      <textarea className='form-control w-full' cols="30" rows="4" placeholder='Comments'/>
                    </div>
                    <div>
                      <button className='button w-full font-light tracking-wider'>Submit</button>
                    </div>
                  </form>
                </div>
                <div className='connect-us-section text-center p-4 rounded-lg'>
                  <h3 className='contact-title font-serif text-2xl mb-3'>Connect With Us</h3>
                  <div>
                    <ul className='list-none'>
                      <li className='mb-3 gap-2 flex items-center'>
                        <AiOutlineHome fontSize={15}/>
                        <address className='text-sm'>ABC Street, near XYZ Road, Kolkata</address>
                      </li>
                      <li className='mb-3 gap-2 flex items-center'>
                        <BiPhoneCall fontSize={15}/>
                        <a href='tel:+91 9999999999' className='text-blue-700'>+91 9999999999</a>
                      </li>
                      <li className='mb-3 gap-2 flex items-center'>
                        <AiOutlineMail fontSize={15}/>
                        <a href='mailto:primepicks.officially@gmail.com' className='text-blue-700'>primepicks.officially@gmail.com</a>
                      </li>
                      <li className='mb-3 gap-2 flex items-center'>
                        <BiInfoCircle fontSize={15}/>
                        <p className='mb-0'>24x7 available</p>
                      </li>
                    </ul>
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

export default Contact;



