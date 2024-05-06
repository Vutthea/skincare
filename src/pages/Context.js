import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RiSubtractLine } from "react-icons/ri";
import { FaFacebook, FaTelegram, FaInstagramSquare } from "react-icons/fa";

function Context() {
    const data = [
        { "img": "skin1.jpg", "title": "Skin care", "subTitle": "Price", "body": "$200 " },
        { "img": "mark4.png", "title": "Face Mask", "subTitle": "Price", "body": "$230" }
    ];

    // const [showHide, setShowHide] = useState(true);

    const [count, setCount] = useState(0);
    const increment = ()=> {
        setCount(count + 1);
    };
    const decrement = ()=>{
        if(count > 0){
            setCount(count -1);
        }
    };

  
    const [view, setView] = useState(false);
    const [detail, setDetail]= useState(false);


    return (
        <>
            <div className="text-[12px] sm:text-[32px] mx-auto text-center text-blue-800 mt-[30px]">
                Beautify care Contact at Store My Company
            </div>
            <div className="w-[40%] m-4 mx-auto rounded-[20px]">
                <img className="rounded-[20px]" src="/t2.jpg" alt="cosmetic" />
            </div>
            <div className="w-[90%] mx-auto flex justify-between ">
                <div className="w-[20%] bg-slate-400 p-4 text-[8px] sm:text-[12px] md:text-[20px]">
                    <p className="text-center">Welcome to Cosmetic</p>
                    <p className="text-center">Beauty pageant</p>
                    <div className=" w-[60px] sm:w-[110px] mx-auto rounded-[10px] p-2">
                        <p className={`p-1 bg-gray-800 text-center text-green-500 text-[8px] sm:text-[18px]`} onClick={() => setView(!view)}>
                             {view === true? 'close':'view'}
                            </p>
                    </div>
                    {view && (
                    <div className="text-[6px] sm:text-[8px]  md:text-[14px]">

                        Establishing a proper skin care routine order is Dermstore establish the proper way in which to apply skin care products and how to establish a proper skin care routine in order to get that glowing skin we all want.
                    </div>
                    )}
                </div>

                <div className="w-[40%]  bg-slate-400 ">
                    <img src="/skin1.jpg" alt="cosmetic" className="w-full" />
                    <div className="flex justify-around sm:justify-around p-1 sm:p-4 sm:flex">
                        <button className="btn btn-succesess mx-3" onClick={increment}>
                            <FaPlus className="text-[10px] sm:text-[25px]" />
                        </button>
                        <button className="btn btn-succesess mx-3 text-[10px] sm:text-[25px]">{count}</button>
                        <button className="btn btn-succesess mx-3" onClick={decrement}>
                            <RiSubtractLine className="text-[10px] sm:text-[25px]" />
                        </button>
                        <button className="btn btn-succesess mx-3 hidden sm:block" onClick={() => setCount(0)}>Reset</button>
                    </div>
                </div>

                <div className="w-[20%]  bg-slate-400  p-4 text-[8px] sm:text-[12px] md:text-[18px]">
                    <p>This is a Cosmetic That</p>
                    <p>Make to detail products</p>
                    <div className="p-2 w-[60px] sm:w-[110px] mx-auto rounded-[10px]">
                        <p className={`p-1 bg-gray-800 text-center text-green-500`} onClick={()=> setDetail(!detail)}>
                            {detail ? 'close' : 'detail'} 
                        </p>
                        
                    </div>
                    {detail && (
                            <div className="p-2 text-yellow-200 ">
                                Hello all the great customers, welcome to use my service!
                            </div>
                        )}
                </div>
            </div>

            <div className="w-[92%] mt-4 mx-auto flex flex-wrap justify-center">
                {data.map((item, index) => (
                    <div key={index} className="w-[300px] p-2 bg-green-300 rounded-[10px] m-2 flex-col">
                        <img className="w-[100%] rounded-xl p-2 h-[280px] md:h-[150px] object-cover" src={item.img} alt={item.title} />
                        <div className="w-[100%] flex-col mx-auto">
                            <h1 className="text-black text-[16px] text-center">{item.title}</h1>
                            <span className="text-black text-[16px] flex justify-center">{item.body}</span>
                            <button className="text-red-800 flex justify-center mx-auto" type="button">View</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-[90%] mx-auto rounded-md p-4 mx-auto flex flex-wrap justify-between">
                <img src="/t2.jpg" alt="cosmetic" className="rounded-full w-[50%]" />
                <p className="w-[40%] text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] text-gray-500">
                    Good skin care is important for the following reasons: It helps your skin stay in good condition: You're shedding skin cells throughout the day, so it's important to keep your skin glowing and in good condition. An effective routine can help prevent acne, treat wrinkles, and help keep your skin looking its best. You’ve likely heard many beauty and health influencers and experts tout their best skin care tips, but their recommendations might leave you wondering, “why is skincare so important, really?”. Skin care plays an important role in your overall health and appearance. After all, your skin is the largest organ of your body. Skin care primarily focuses on the delicate areas on your face, neck, and chest, with regimens focused on cleansing, moisturizing, and treating specific conditions. If you want to dive deeper into why skin care is important and how you can make it a priority in your life, we’re here to help. In this article, we’ll break down the importance of skin care and provide helpful tips on how to care for your skin–from wearing sunscreen to prevent skin cancer.
                </p>
            </div>

            <div className="w-[100%] bg-orange-50 flex justify-around mt-[20px]">
                <div className="">
                    <div><u>OH SHE GLOWS</u></div>
                    <div className="text-[12px] mt-[10px]">
                        <div>My STORY</div>
                        <div>THE APP</div>
                        <div>THE BOOKS</div>
                    </div>
                </div>
                <div className="">
                    <div><u>POPULAR</u></div>
                    <div className="text-[12px] mt-[10px]">
                        <div>RECIPE SEARCH</div>
                        <div>RECIP INDEX</div>
                        <div>COOKBOOK INDEX</div>
                        <div>MY FAVOURITE SKIN CARE PRODUCT</div>
                        <div>MY MOST USED KITCHEN TOOLS</div>
                    </div>
                </div>
                <div className="">
                    <div><u>FOLLOW ON SOCIAL MEDIA</u></div>
                    <div className="w-[100%] flex justify-around mt-[10px]">
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

export default Context;