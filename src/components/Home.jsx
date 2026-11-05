import { FaArrowRightLong } from "react-icons/fa6";
import { VscDownload } from "react-icons/vsc";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import "../css/home.css"
const Home = () => {
  return (
    <div id="home" className= "home flex flex-row items-center justify-center mt-[150px] px-10">

        <div className=" profile flex flex-col gap-2 w-[50%] py-7">
            <p className="text-2xl">HELLO. I'M</p>
            <h1 className="text-7xl ml-1">Sahil <span className="text-green-600">Yadav</span></h1>
            <h3 className="text-5xl ml-1">Java Backend <span className="text-green-600">Developer</span></h3>
            <p className="text-xl font-sans font-semibold ml-1">Building scalable web applications with Java , SpringBoot and moderen technologies.</p>

            <div className="flex flex-row gap-10 items-center mt-5 ml-1">
                <button className="py-4 px-10 bg-green-600 rounded-4xl text-black font-sans font-semibold text-md flex items-center gap-2">View My Project <FaArrowRightLong/></button>
                <button className="py-4 px-10 rounded-4xl text-white font-sans font-semibold text-md border border-green-600 flex items-center gap-1">Download Resume <VscDownload/></button>
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

        {/* image part */}

        <div className="heroimg w-[50%] h-[500px] relative top-3"></div>

    </div>
  );
}

export default Home;
