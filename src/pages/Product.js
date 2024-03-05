import { FaFacebook, FaTelegram, FaInstagramSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
function Product(){
    const data = [
        { "img": "skin1.jpg", "title": "This is the Skin care", "subTitlt": "Uer it for Daytime", "body": "Help your skin stay in good condition" },
        { "img": "skin2.jpg", "title": "This is the Skin care", "subTitlt": "Uer it for Daytime", "body": "Help your skin stay in good condition" },
        { "img": "skin3.jpg", "title": "This is the Skin care", "subTitlt": "Uer it for Daytime", "body": "Help your skin stay in good condition" },
        { "img": "skin4.jpg", "title": "This is the Skin care", "subTitlt": "Uer it for Daytime", "body": "Help your skin stay in good condition" },

        { "img": "night1.jpg", "title": "This is the Skin care", "subTitlt": "Uer it for Daytime", "body": "Help your skin stay in good condition" },
        { "img": "night2.jpg", "title": "This is the Skin care", "subTitlt": "Uer it for Daytime", "body": "Help your skin stay in good condition" },
        { "img": "night3.jpg", "title": "This is the Skin care", "subTitlt": "Uer it for Daytime", "body": "Help your skin stay in good condition" },
        { "img": "night4.jpg", "title": "This is the Skin care", "subTitlt": "Uer it for Daytime", "body": "Help your skin stay in good condition" },

        { "img": "mark1.jpg", "title": "This is the Skin care", "subTitlt": "Uer it for Daytime", "body": "Help your skin stay in good condition" },
        { "img": "mark2.jpg", "title": "This is the Skin care", "subTitlt": "Uer it for Daytime", "body": "Help your skin stay in good condition" },
        { "img": "mark3.jpg", "title": "This is the Skin care", "subTitlt": "Uer it for Daytime", "body": "Help your skin stay in good condition" },
        { "img": "mark4.png", "title": "This is the Skin care", "subTitlt": "Uer it for Daytime", "body": "Help your skin stay in good condition" }


   ]
    return(
        <>
               <div className="w-[92%] mt-4  mx-auto flex flex-wrap justify-center ">
                    {data.map((item) => {
                         return
                          <div className="w-[300px] p-2 bg-green-300 rounded-[10px] m-2 flex-col ">
                              <img className="w-[100%] rounded-xl p-2 h-[284px] md:h-[150px] object-cover" src={item.img}/>
                              <div className="w-[100%] flex-col mx-auto">
                                   <h1 className="text-black text-[20px] text-center">{item.title}</h1>
                                   <span className="text-black text-[16px] flex justify-center">{item.subTitlt}</span>
                                   <span className="text-black text-[12px] flex justify-center">{item.body}</span>
                                   <button className="text-red-800  flex justify-center mx-auto" type="button">View</button>
                              </div>
                         </div>
                    })}
                  
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

          </>
    )
}
export default Product;