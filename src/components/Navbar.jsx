import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoMic } from "react-icons/io5";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import profile from "../assets/profile.png";
import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";
import { useUtils } from "../context/UtilsContext";
import { IoIosSearch } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

export default function Navbar() {

  const [searchQuery, setSearchQuery] = useState("");
  const {isSidebar, setIsSidebar, mobileShow, setMobileShow} = useUtils()
  useEffect(()=>{
    console.log({isSidebar, mobileShow})
  },[isSidebar])

  const [searchbar, setSearchbar] = useState(false);
  const navigate = useNavigate()

  const searchQueryHandler = (event)=>{
    if((event?.key=="Enter"||event==="searchButton") && searchQuery?.length>0){
      navigate(`/search/${searchQuery}`)
      setSearchQuery("")
    }
  }

  const handleSidebar = () =>{
    if(window.innerWidth <=1280){
      setIsSidebar(!isSidebar)
      setMobileShow(!mobileShow)
    }
    setIsSidebar(!isSidebar)
  }

  if(searchbar){
    return(
      <div className="flex px-6 justify-between fixed top-0 w-[100%] bg-white py-2 z-50 items-center">
        <IoArrowBack size={20} onClick={()=>setSearchbar(!searchbar)}/>
        <div className="flex flex-grow w-[35%] items-center mx-4">
        <div className="w-[100%] px-4 py-2 rounded-l-full border border-gray-400">
          <input type="text" placeholder="Search" className="outline-none"
          onChange={(e)=>setSearchQuery(e.target.value)}
          onKeyUp={searchQueryHandler}
          value={searchQuery} />
        </div>
        <button className="px-4 py-2 border border-gray-400 rounded-r-full bg-gray-100" onClick={()=>searchQueryHandler("searchButton")}>
          <CiSearch size={"24px"}  />
        </button>
        
      </div>
      <IoMic
          size={"42px"}
          className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
    )
  }

  return (
    <div className="flex px-6 justify-between fixed top-0 w-[100%] bg-white py-2 z-50">
      <div className="flex items-center space-x-4">
        <AiOutlineMenu className="text-xl cursor-pointer" onClick={handleSidebar}/>
        <img src={logo} alt="Image" className="w-28 cursor-pointer" />
      </div>

      <div className="hidden md:flex w-[35%]">
        <div className="w-[100%] px-4 py-2 rounded-l-full border border-gray-400">
          <input type="text" placeholder="Search" className="outline-none"
          onChange={(e)=>setSearchQuery(e.target.value)}
          onKeyUp={searchQueryHandler}
          value={searchQuery} />
        </div>
        <button className="px-4 py-2 border border-gray-400 rounded-r-full bg-gray-100" onClick={()=>searchQueryHandler("searchButton")}>
          <CiSearch size={"24px"}  />
        </button>
        <IoMic
          size={"42px"}
          className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>

      <div className="flex space-x-5 items-center">
        <IoIosSearch className="text-2xl md:hidden" onClick={()=>setSearchbar(!searchbar)}/>
        <RiVideoAddLine className="text-2xl" />
        <AiOutlineBell className="text-2xl" />
        <Avatar src={profile} size="32" round={true} />
      </div>
    </div>
  );
}
