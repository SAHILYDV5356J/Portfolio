import { FaGraduationCap } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { RiTargetFill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import "../css/about.css"
const About = () => {
  return (
    <div id="about" className="flex flex-col items-center mt-[10px] md:mt-[80px] pt-5 pb-15 " style={{scrollMarginTop:70}}>

        <h1 id="skillheading" className="text-3xl md:text-5xl w-[150px] md:w-[220px] text-center">About Me</h1>

        <div className="flex flex-col gap-2  w-full px-5 py-5">

            <div className="flex flex-col gap-2 w-full lg:w-[50%] pr-2 lg:pr-10">
                <h3 className="text-4xl lg:text-6xl text-green-600 opacity-50">05</h3>
                <h1 className="text-5xl lg:text-7xl">ABOUT<span className="text-green-600"> ME</span></h1>

                <p className="text-sm  md:text-xl font-sans">I'm a B.Tech CSE student, passionate about backend development and problem solving. I love exploring new technologies and building impactful products that solve real-world problems</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2  mt-10 font-sans">

                <div className="flex gap-2 justify-center p-3 border-1 border-green-600 rounded-2xl bg-black/30 shadow shadow-md shadow-black/30">
                    <FaGraduationCap size={40} className="text-green-600"/>
                    <div className="flex flex-col">
                        <h1 className="text-2xl">Education</h1>
                        <p>B.Tech CSE</p>
                        <p>JEC , Kukas, Jaipur</p>
                    </div>
                </div>

                <div className="flex gap-2 justify-center p-3 border-1 border-green-600 rounded-2xl bg-black/30 shadow shadow-md shadow-black/30">
                    <MdLocationPin size={40} className="text-green-600"/>
                    <div className="flex flex-col">
                        <h1 className="text-2xl">Location</h1>
                        <p>Jaipur, Rajasthan</p>
                        <p>(Open to Relocate)</p>
                    </div>
                </div>

                <div className="flex gap-2 justify-center p-3 border-1 border-green-600 rounded-2xl bg-black/30 shadow shadow-md shadow-black/30">
                    <RiTargetFill size={40} className="text-green-600"/>
                    <div className="flex flex-col">
                        <h1 className="text-2xl">Focus</h1>
                        <p>Backend Development</p>
                        <p>Java full stack</p>
                    </div>
                </div>

                 <div className="flex gap-2 justify-center p-3 border-1 border-green-600 rounded-2xl bg-black/30 shadow shadow-md shadow-black/30">
                    <SlCalender size={35} className="text-green-600"/>
                    <div className="flex flex-col">
                        <h1 className="text-2xl">Availability</h1>
                        <p>Open for internships</p>
                        <p>& Opportunities</p>
                    </div>
                </div>

            </div>
            
            


        </div>



        
      
    </div>
  );
}

export default About;
