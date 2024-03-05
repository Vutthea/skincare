import React from "react";
import {Link} from"react-router-dom";
import {CgProfile} from 'react-icons/cg';
import { IoIosMenu } from "react-icons/io";

function RoutePage(){
    return(
        <>
          <div className=" w-[100%] flex bg-green-50">
            <div className=" w-[15%]">
              <img className="w-[100%] h-[60px] mx-auto p-1" src="logo.png"></img>
            </div>
            <div className="w-[65%] flex justify-around items-center">
                <Link to="/" >Home</Link>
                <Link to="aboutAs" >About As</Link>
                <Link to="product" >Product</Link>
                <Link to="Context" >Context</Link>
                
            </div>
            <div className=" w-[20%] flex justify-around ">
              <div className="bg-blue-200 w-[60%] h-[40px]  mt-[10px] rounded-[10px] hidden 2xl:block">
                  <div className="text-[20px] text-white items-center justify-center pl-[30px] pt-[4px] "> My Account</div>
              </div>
              <div className=" w-[30%] flex items-center text-40px pl-[7%]">
              <Link to="/Register">
              <CgProfile size={30} />
              </Link>
              </div >
              <div className=" w-[30%] md:hidden flex items-center text-40px pl-[7%]">
                 < IoIosMenu className="w-[30px] h-[30px]"/>
              </div>
            </div>
          </div>
        </>
    )
}
export default RoutePage;