import { IoCodeSlashOutline } from "react-icons/io5";
import HomeTabs from "./HomeTabs";
const Navbar = () => {
    
  return (
    <div className=" z-20 navbar h-[60px] w-full rounded-b-none lg:rounded-b-lg  bg-black/75 shadow-gray-600 shadow shadow-white/10 fixed top-0">

        <nav className="w-full h-full flex items-center ">
            <div id="logo" className="text-white flex items-center gap-x-2 mr-10 w-[50%] md:w-[25%] pl-2 md:pl-[70px]">
               <IoCodeSlashOutline className="text-3xl"/> 
               <p className="text-xl md:text-2xl font-semibold">Sahil <span className="text-green-700">Yadav</span></p>
            </div>

            <div className="hidden lg:block w-[50%]">
              <HomeTabs/>  
            </div>
            

            <div className="w-[50%] md:w-[25%] flex items-center">
                <button className="px-3 py-1 border border-green-600 rounded-2xl text-white font-semibold shadow shadow-green-600 absolute right-10 hover:shadow-white">
                    Let's Talk
                </button>
            </div>
            
        </nav>

        
        <div className="hidden md:block lg:hidden w-[100%] bg-black/70 py-2">
          <HomeTabs/>  
        </div>
        
      
    </div>
  );
}

export default Navbar;
