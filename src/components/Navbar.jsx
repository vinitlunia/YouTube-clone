import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch,AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube,BsCameraVideo,BsBell } from "react-icons/bs";
import { IoAppsSharp, IoArrowBack } from "react-icons/io5";
import Avatar from "react-avatar";
import logo from "../../public/logo.jpg"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUtils } from "../context/utilsConstext";
import { IoIosSearch } from "react-icons/io";
// import { Link } from "react-router-dom";

function Navbar() {

    const [searchQuery,setSearchQuery] = useState("")

    const {isSidebar,setisSidebar,mobilShow,setmobilShow} = useUtils()
    const [searchbar,setSearchbar] = useState(false)

    const navigate = useNavigate();

    useEffect(()=>{
        console.log(isSidebar,mobilShow);
        
    },[isSidebar])

    const searchQueryHandler = (event) =>{
        if ((event)?.key === "Enter" || event === "searchButton" && searchQuery?.length>0){
            navigate(`/search/${searchQuery}`)
            setSearchQuery("")
        }

    }

    const handelSidebar = () =>{
        if(window.innerWidth <= 1280){
            setisSidebar(!isSidebar);
            setmobilShow(!mobilShow)
        }
        setisSidebar(!isSidebar);

    };

    if(searchbar){
        return (<div className="flex justify-between items-center  fixed top-0 w-[100%] bg-white px-6 py-2">
            <IoArrowBack size={20} onClick={()=>setSearchbar(!searchbar)}/>
             <div className='flex justify-center items-center gap-5'>
            <form action="">
                <div className='flex   items-center border border-gray-500  rounded-full h-10 px-4 pr-0'>
                    <div className='flex  gap-4 items-center pr-5'>
                        <div>
                            <AiOutlineSearch className='text-xl cursor-pointer'/>
                        </div>
                        <input type="text" placeholder="Search" 
                        className='w-96  focus:outline-none border-none'
                        onChange={(e)=>setSearchQuery(e.target.value)}
                        onKeyUp={searchQueryHandler}
                        value={searchQuery} />

                        <AiOutlineClose className='text-xl cursor-pointer'/>
                    </div>
                    <button className='h-10 w-16 flex items-center justify-center border border-gray-500 rounded-r-full bg-gray-100 cursor-pointer'
                        onClick={()=>searchQueryHandler("searchButton")}>
                        <AiOutlineSearch className='text-xl'/>
                    </button>

                </div>
            </form>
        </div> 
            <div className='text-xl p-3 border  rounded-full hover:bg-gray-200 duration-200 cursor-pointer'>
                <TiMicrophone/>
            </div>
        </div>
        )
    }
    
  return (
    <div className="flex justify-between z-100 fixed top-0 w-[100%] bg-white px-6 py-2">
        <div className="flex gap-8 items-center text-2xl  ">
           <div onClick={handelSidebar}>
            <AiOutlineMenu />
           </div> 
           {/* <Link to="/"> */}
            <div className="flex gap-1 items-center justify-center">
                <BsYoutube className='text-3xl text-red-600'/>
                <span className='texl-xl font-medium'>YouTube</span>
            </div>
            {/* </Link> */} 
        </div>
        <div className='hidden md:flex justify-center items-center gap-5'>
            <form action="">
                <div className=' flex flex-grow items-center border border-gray-500  rounded-full h-10 px-4 pr-0'>
                    <div className='flex gap-4 items-center pr-5'>
                        <div>
                            <AiOutlineSearch className='text-xl cursor-pointer'/>
                        </div>
                        <input type="text" placeholder="Search" 
                        className='w-96  focus:outline-none border-none'
                        onChange={(e)=>setSearchQuery(e.target.value)}
                        onKeyUp={searchQueryHandler}
                        value={searchQuery} />

                        <AiOutlineClose className='text-xl cursor-pointer'/>
                    </div>
                    <button className='h-10 w-16 flex items-center justify-center border border-gray-500 rounded-r-full bg-gray-100 cursor-pointer'
                        onClick={()=>searchQueryHandler("searchButton")}>
                        <AiOutlineSearch className='text-xl'/>
                    </button>

                </div>
            </form>
            <div className='text-xl p-3 border  rounded-full hover:bg-gray-200 duration-200 cursor-pointer'>
                <TiMicrophone/>
            </div>
        </div>
        <div className='flex gap-5 items-center text-xl'>
            <IoIosSearch className="text-2xl md:hidden" onClick={()=>setSearchbar(!searchbar)}/>
            <BsCameraVideo/>
            <IoAppsSharp/>
            <div className='relative'>
                <BsBell/>
                <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'>9+</span>
            </div>
            <Avatar src={logo} size={32} round={true} />
        </div>
    </div>
  )
}

export default Navbar