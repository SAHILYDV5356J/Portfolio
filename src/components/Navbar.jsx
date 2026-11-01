import { IoCodeSlashOutline } from "react-icons/io5";
const Navbar = () => {
    
  return (
    <div className=" z-20 navbar h-[80px] w-full rounded-b-lg  bg-black/75 shadow-gray-600 shadow shadow-white/10 fixed top-0">

        <nav className="w-full h-full flex items-center ">
            <div id="logo" className="text-white flex items-center gap-x-2 mr-10 w-[25%] pl-[70px]">
               <IoCodeSlashOutline size={70}/> 
               <p className="text-4xl font-semibold">Sahil <span className="text-green-700">Yadav</span></p>
            </div>

            <div id="sections" className="flex items-center gap-6 w-[50%] justify-center">

            <a href="#home" className="text-white text-lg bg-white/10 px-3 py-2 rounded-lg">Home</a>

            <a href="#skills" className="text-white text-lg bg-white/10 px-3 py-2 rounded-lg">Skills</a>

            <a href="#projects" className="text-white text-lg bg-white/10 px-3 py-2 rounded-lg">Projects</a>

            <a href="#experience" className="text-white text-lg bg-white/10 px-3 py-2 rounded-lg">Experience</a>

            <a href="#about" className="text-white text-lg bg-white/10 px-3 py-2 rounded-lg">About</a>

            <a href="#contact" className="text-white text-lg bg-white/10 px-3 py-2 rounded-lg">Contact</a>

            </div>

            <div className="w-[25%] flex items-center">
                <button className="p-2 border border-green-600 w-[150px] rounded-3xl text-white font-bold shadow shadow-green-600 absolute right-10 hover:shadow-white">
                    Let's Talk
                </button>
            </div>
            
        </nav>
      
    </div>
  );
}

export default Navbar;
