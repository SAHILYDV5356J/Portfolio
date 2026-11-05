import { IoCodeSlashOutline } from "react-icons/io5";
import { RiGraduationCapLine } from "react-icons/ri";
import { MdOutlineWorkOutline } from "react-icons/md";
const Stepper = () => {
  return (
    <div className="flex flex-col gap-10 w-full bg-black/30 p-5 py-10 rounded-3xl shadow-xl shadow-black/30 hover:scale-102 transition-all duration-50">

    

            <div className="flex gap-4 justify-evently items-center relative">

                <div className="h-[50px] w-[50px] bg-black/30 rounded-4xl flex justify-center items-center">
                    <RiGraduationCapLine className="text-3xl text-green-600"/>
                </div>

                <div className="flex flex-col">
                    <h1 className="text-lg">B.Tech CSE</h1>
                    <p>Jaipur Engineering College , Kukas</p>
                    <p>2025-2029 (Expected)</p>
                </div>

                <div className="text-sm text-white bg-green-600 font-sans px-2 py-1 rounded-2xl absolute right-10 w-20 flex justify-center items-center">
                    Currently
                </div>
            
            </div>


            <div className="flex gap-4 justify-evently items-center relative">

                <div className="h-[50px] w-[50px] bg-black/30 rounded-4xl flex justify-center items-center">
                    <IoCodeSlashOutline className="text-3xl text-green-600"/>
                </div>

                <div className="flex flex-col">
                    <h1 className="text-lg">Self learning</h1>
                    <p>Java , SpringBoot , DSA and many more... </p>
                    <p>2025-Present</p>
                </div>

               <div className="text-sm text-white bg-green-600 font-sans px-2 py-1 rounded-2xl absolute right-10 w-20 flex justify-center items-center">
                    Ongoing
                </div>
            
            </div>

            <div className="flex gap-4 justify-evently items-center relative">

                <div className="h-[50px] w-[50px] bg-black/30 rounded-4xl flex justify-center items-center">
                    <MdOutlineWorkOutline className="text-3xl text-green-600"/>
                </div>

                <div className="flex flex-col">
                    <h1 className="text-lg">Open For Internships</h1>
                    <p>Looking for backend and full stack internships</p>
                </div>

                <div className="text-sm text-white bg-green-600 font-sans px-2 py-1 rounded-2xl absolute right-10 w-20 flex justify-center items-center">
                    Now
                </div>
            
            </div>

      
    </div>
  );
}

export default Stepper;

