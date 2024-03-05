
import React, { Component, useState } from 'react';
import {AiOutlineArrowLeft,AiOutlineArrowRight} from"react-icons/ai";
import{RxDotFilled} from 'react-icons/rx';
import { FaFacebook ,FaTelegram ,FaInstagramSquare} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function Home() {
  const slides = [
    {
      url: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/06/02/15/combinationskincare-routine-indybest.jpg'
      
    },
    {
      url: 'https://cdn.mos.cms.futurecdn.net/8ngyRm9vbGp3dBohczgT8F.jpg'
    },
    {
      url: 'https://media.allure.com/photos/61d8bc7264960bb638dc8a28/16:9/w_2580,c_limit/1-07_bb_cream_update.jpeg'
    },
    {
      url: 'https://lzd-img-global.slatic.net/g/p/3064a252eb4e7ac39894b36c2c86cc73.jpg_720x720q80.jpg'
    },
    {
      url: 'mark1.jpg',
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const pervSlide= () =>{
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex -1: slides.length - 1))
      
}
  const nextSlide = () =>{
    setCurrentIndex((prevIndex) => (prevIndex < slides.length - 1 ? prevIndex + 1 : 0));
  }
const goToSlide =(slideIndex)=> {
  setCurrentIndex(slideIndex);
}


  return (
    <>
    <div className='max-w-[1080px] h-[580px] w-full m-auto py-16 px-4 relative group'>
      <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
      </div>
      <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <AiOutlineArrowLeft onClick={pervSlide} size={30}/>
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <AiOutlineArrowRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2 text-28px'>
        {slides.map((slides,slideIndex)=>(
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer text-39px'>
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
    <div className='w-[80%] flex mx-auto'>
        <div className='w-[60%]  flex-col '>
          <div className='flex  justify-center text-[28px] text-blue-700 ipad:text-[14px]'>Beauty & Healty Skin</div>
          <div className='p-4 ipad:text-[10px]'>When it comes to skincare, choosing from a plethora of products can feel downright.
           toners, scrubs, moisturizers, 
            and serums can appear a daunting task. Follow Us On Social Media. Get App.
             Subscribe. Types: Politics, World News, Business.
             People say that beauty’s only skin deep; it’s what’s on the “inside” that counts.
              Our insides are certainly important, but skin is your first layer of defense against the outside world. 
              Skin can also give important clues to your overall health. 
             Learn to take good care of your skin, so your skin can keep taking good care of you. 
          </div>
          <div className='w-[220px] bg-blue-700 p-4 rounded-[10px] ml-[10px] ipad:p-1 ipad:text-[10px] ipad:w-[140px] ipad:ml-[4px]'>Request An Appioniment</div>
        </div>
        {/* <div className='w-[40%] bg-black'>r</div> */}
        <img  className='w-[40%] ipad:h-[200px]' src="/skincare.jpg"></img>
    </div>
     <div className='w-[90%] flex flex-wrap justify-around mx-auto mt-[20px]'>

     <div className='relative w-[28%]  h-[210px] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url('/skin1.jpg')` }}>
         <div className='absolute bottom-4 left-1 t text-black'>TakeCare Skin</div>
      </div>
      
      <div className='relative w-[28%]  h-[210px] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url('/night1.jpg')` }}>
         <div className='absolute bottom-4 left-1t text-black'>Beaulty Night</div>
      </div>  
         
          
      <div className='relative w-[28%] h-[210px] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url('/mark1.jpg')` }}>
         <div className='absolute bottom-4 left-1  text-black'>Smooth Face</div>
      </div>

     </div>

    {/* fooler for menu */}
    <div className='w-[100%] bg-orange-50 flex justify-around mt-[20px]'>
       <div className=''>
        <div ><u>OH SHE GLOWS</u></div>
        <div className='text-[12px] mt-[10px]'>
          <div>My STORY</div>
          <div>THE APP</div>
          <div>THE BOOKS</div>
        </div>
       </div>
       <div className=''>
        <div><u>POPULAR</u></div>
        <div className='text-[12px] mt-[10px]'>
          <div>RECIPE SEARCH</div>
          <div>RECIP INDEX</div>
          <div>COOKBOOK INDEX</div>
          <div>MY FAVOURITE SKIN CARE PRODUCT</div>
          <div>MY MOST USERD KITCHEN TOOLS</div>
        </div>
       </div>
       <div className=''>
        <div><u>FOLLOW ON SOCIAL MEDIA</u></div>
        <div className='w-[100%] flex justify-around mt-[10px]'>
          <a href='https://web.facebook.com'>  <  FaFacebook /></a>
          <a href='https://www.instagram.com'>  < FaInstagramSquare /></a>
          < FaTelegram />
        </div>
        <div>Telegram: 0717699959</div>
        <div>Email: vuttheaseng@gmail.com</div>

       </div>

    </div>
    {/* TextStyle: {textDecorationLine: 'Underline'} */}
    </>
  );
}

export default Home;