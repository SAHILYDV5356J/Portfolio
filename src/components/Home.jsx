import { FaArrowRightLong } from "react-icons/fa6";
import { VscDownload } from "react-icons/vsc";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import "../css/home.css";
import Settingroller from "./Settingroller";
import { IoCodeSlashOutline } from "react-icons/io5";
const Home = () => {
  return (
    
    
    <div id="home" className= "home flex flex-col justify-center mt-[70px] w-full px-10 relative">

       
        <Settingroller/>
           
        <div className="flex flex-col sm:flex-col md:flex-row items-center justify-center w-full">

            <div className=" profile flex flex-col gap-2 md:w-[70%] py-7 w-full ">
                <p className="text-xl md:text-2xl xl:text-3xl">HELLO. I'M</p>
                <h1 className="text-3xl md:text-7xl xl:text-8xl ml-1 ">Sahil <span className="text-green-600">Yadav</span></h1>
                <h3 className="text-4xl md:text-5xl xl:text-6xl sm:text-3xl ml-1">Java Backend <span className="text-green-600">Developer</span></h3>
                <p className="text-sm md:text-xl font-sans font-semibold ml-1">Building scalable web applications with Java , SpringBoot and moderen technologies.</p>

                <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center mt-5 ml-1">
                    <button className="py-2 w-full md:w-auto md:py-4 pl-4 md:px-10 bg-green-600 rounded-2xl  md:rounded-4xl text-black font-sans font-semibold text-md flex items-center gap-2 hover:shadow-md hover:scale-101 transition-all duration-75 shadow-white/30">View My Project <FaArrowRightLong/></button>
                    <button className="py-2 w-full md:w-auto md:py-4 pl-4  px-1 md:px-10 rounded-2xl md:rounded-4xl text-white font-sans font-semibold text-md border border-green-600 flex items-center gap-1 hover:shadow-md hover:scale-101 transition-all duration-75 shadow-green-600/30">Download Resume <VscDownload/></button>
                </div>

                <div className="ml-1 mt-3 flex gap-3 items-center">

                    <div className="h-[35px] w-[35px] rounded-[50%] flex justify-center items-center shadow shadow-white/20 shadow-lg hover:shadow-white/30">
                        <a href="#" ><AiFillGithub size={35}/></a>
                    </div>

                    <div className="h-[35px] w-[35px] rounded-[50%] flex justify-center items-center shadow shadow-white/20 shadow-lg hover:shadow-white/30">
                        <a href="#" ><FaLinkedinIn size={25}/></a>
                    </div>

                
                    <div className="h-[35px] w-[35px] rounded-[50%] flex justify-center items-center shadow shadow-white/20 shadow-lg hover:shadow-white/30">
                        <a href="#" ><TbBrandLeetcode size={25}/></a>
                    </div>

                    <div className="h-[35px] w-[35px] rounded-[50%] flex justify-center items-center shadow shadow-white/20 shadow-lg hover:shadow-white/30">
                        <a href="#" ><MdOutlineMailOutline size={25}/></a>
                    </div>

                        <div className="h-[35px] w-[35px] rounded-[50%] flex justify-center items-center shadow shadow-white/20 shadow-lg hover:shadow-white/30">
                        <a href="#" ><IoMdCall size={25}/></a>
                    </div>

                </div>

            </div>

            <div className="codeicon w-[30%] hidden md:block">
                <IoCodeSlashOutline className="text-[15rem] lg:text-[20rem]"/>
            </div>

        {/* image part */}

        {/* <div className="hidden sm:hidden lg:visible heroimg w-[50%] h-[28rem] relative top-3 hover:scale-105 transition-all duration-75"></div> */}

        </div>


    </div>
    
  );
}

export default Home;
