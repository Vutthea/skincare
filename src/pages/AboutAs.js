import { FaFacebook, FaTelegram, FaInstagramSquare } from "react-icons/fa";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { RxDotFilled } from 'react-icons/rx';
import { useState } from "react";

function AboutAs() {
  const slides = [
    {
      url: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/06/02/15/combinationskincare-routine-indybest.jpg'
    },
    {
      url: 't2.jpg',
    },
    {
      url: 't3.jpg',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : slides.length - 1));
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex < slides.length - 1 ? prevIndex + 1 : 0));
  }

  const goToSlide = (slideIndex) => {
    
    setCurrentIndex(slideIndex);
  }

  return (
    <>
      <div className="w-full mt-[40px] ">
        <p className="text-[14px] sm:text-[28px] text-black items-center flex justify-center">Beautify of Shape you should be ....!</p>
        <p className="text-[12px] sm:text-[22px] text-gray-600 items-center flex justify-center">Everybody always needs a perfect body, like having beautiful skin and a smooth face</p>
        <p className="text-[12px] sm:text-[22px] text-gray-600 items-center flex justify-center">So we should use the best products with quality like international standards to ensure they help us</p>
      </div>

      <div className="w-[80%] p-2 flex mt-[50px] mx-auto flex-wrap">
        <img className='w-[50%] object-cover ' src="/img.jpg" alt="example"></img>
        <div className="w-[50%]">
          <p className=" text-black p-4 text-[12px] sm:text-[26px]"> &nbsp; &nbsp; &nbsp; &nbsp;Detail About Product for user fit with your Skin And Face.
            Everyone always needs a product that has quality!</p>
          <p className=" text-gray-700 p-4 text-[10px] sm:text-[18px]"> &nbsp; &nbsp; &nbsp; &nbsp;
            Illumination Consulting is a digital agency, providing consulting services, marketing, design, and development solutions. The agency was started by a group of entrepreneurs over
            20 years ago, who have operated several businesses across multiple industries holding various positions.
            At Illumination Consulting, all projects are reviewed and discussed with the client by a skilled business consultant. An experienced creative and marketing
            team manages projects for clients with quality and results-driven outcomes.

            Our passion has been about starting companies, assisting clients to succeed, and helping provide value to the end consumer. We have taken the best
            practices across multiple industries and formed a one-stop shop to provide high-quality services to our clients. Our services have been structured to ensure Illumination Consulting clients have the support to become successful and manage success more effectively.

            Our Editors try out hundreds of new products each year to keep up with the latest ingredients and buzziest launches on the market,
            so it takes a very special product to make it into our routines time and time again.

            Back to every damn time, why? Because they really work. If a skincare product has made it onto this list, you can bet it's an A* buy...
            &nbsp; &nbsp; &nbsp; &nbsp;
            On a day-to-day basis, if I’m out in the office or meeting up with friends, I love to wear a full-face beat.
            So, when coming home after a long day of said outings,
            I don’t want to be spending another hour lugging off all that makeup with a million cotton pads.
          </p>
        </div>
      </div>

      {/* workout */}
      <div className="w-[90%] flex flex-wrap mx-auto mt-5 justify-between">
        <div className="w-[50%] bg-green-50">
          <p className="text-[22px] text-black p-4 md:text-[8px]">HOW WE WORK</p>
          <p className="text-gray-300 pl-4">
            With the guidance of an experienced business consultant, we work one on one with our client to
            reach their organization's goals and objectives. We break up the complex tasks into manageable steps.
            We define with our client measurable milestones. Guide our clients through the myriad of tasks and details.

            We manage the entire project life-cycle on behalf of our client and with our client from inception to successful finish.
            We combine our client’s intimate knowledge of their business with our expertise in implementing and managing change
            effectively to achieve the desired successful outcome.
            Our service offerings are designed to help our clients generate revenue and increase cost-effectiveness.
          </p>
          <p className="text-[22px] text-black p-4">HOW TO WE GET STARTED</p>
          <p className="text-gray-300 pl-4">
            All our services offered start with a free no-obligation consultation. Speak with an experienced executive who can go over
            your organization's needs, answer questions, and offer some preliminary advice.
            If there is interest in moving forward, we can certainly assist in the next phase of outlining the specifics and the requirements.
            We look forward to discussing your project. Contact us today.
          </p>
        </div>

        <div className="w-[45%] relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-[300px] rounded-2xl bg-center bg-cover duration-500 object-cover'
      ></div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <AiOutlineArrowLeft onClick={prevSlide} size={20} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <AiOutlineArrowRight onClick={nextSlide} size={20} />
      </div>
      <div className='flex top-4 justify-center py-2 text-28px'>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer text-39px'>
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
    </div>

       <div className="w-ful  mt-[40px]  flex-wrap"> 
          <p className="text-center p-4 text-[10px] text-green-500 sm:text-[28px]">Should Be Have Beautify Skin and Face </p>
          <p className="p-4">  &nbsp; &nbsp; &nbsp; &nbsp;
            You may think that with a brand like Sephora -- which features thousands of products from different brands -- 
            it would be impossible to find your way through their website. But, that’s not true at all.

            The design is amazingly clean and breathable, and the simple navigation menu makes exploring it quite enjoyable.
             The platform also has a Tips and Tricks section and an online community you can join.
              But, probably the best thing about it is that it allows you to access new products long before they are available in the brick and mortar stores.

            Sephora is ahead of its game. It's innovative and exciting and extremely engaging.
             It's a website that prides itself on giving its users access to a product before they ever hit stores.
              And it's a website that learns from your behaviors, customizing suggested items to make the process even simpler.

            Not to mention the fact that the website lets users try three product samples with each purchase. 
            this gives users the ability to try before they buy in a remarkably user-friendly and intuitive way.


          </p>
          <p className="p-4"> &nbsp; &nbsp; &nbsp; &nbsp;
          This is a playful and creative website that keeps the Lush branding consistent throughout.
           From the cool and quirky typography to the playful patterns and exciting color and image overlays — this beauty website knows how to inspire and have fun.

          It also knows how to interact with its audience, presenting a simple, straightforward 
          list of products that make it easy for users to browse through the offerings and choose the solutions that are right for them.

          The Lush website plays with the color black in a moody and sophisticated way. 
          And most of its packaging is encased in that same color, bringing the Lush brand full circle. 
          It’s an intuitive brand with products perfect for anyone looking for natural, organic ingredients.

          And navigation is simple, with a clean layout, straightforward menu bar and clear list of products. 
          Bold black boxes with white bright text grab attention instantly and lead users throughout the site.
           It’s an attention-grabbing choice that encourages users to get lost in its beautiful interface.
          </p>
       </div>

      {/* footer for menu */}
      <div className='w-[100%] bg-orange-50 flex justify-around mt-[20px]'>
        <div className=''>
          <div><u>OH SHE GLOWS</u></div>
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
            <div>MY MOST USED KITCHEN TOOLS</div>
          </div>
        </div>
        <div className=''>
          <div><u>FOLLOW ON SOCIAL MEDIA</u></div>
          <div className='w-[100%] flex justify-around mt-[10px]'>
            <a href='https://web.facebook.com'><FaFacebook /></a>
            <a href='https://www.instagram.com'><FaInstagramSquare /></a>
            <FaTelegram />
          </div>
          <div>Telegram: 0717699959</div>
          <div>Email: vuttheaseng@gmail.com</div>
        </div>
      </div>
    </>
  );
}

export default AboutAs;
