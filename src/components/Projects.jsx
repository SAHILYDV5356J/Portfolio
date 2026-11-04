import { FaArrowRightLong } from "react-icons/fa6";
import ProjectCard from "./ProjectCard";
import "../css/project.css"


const Projects = () => {
  return (
    <div id='projects' className='projects flex flex-col items-center mt-[80px] pt-5 pb-15'>

      <h1 id="skillheading" className="text-5xl w-[250px] text-center">PROJECTS</h1>

      <div className="flex items-center w-full mt-5 ">

            <div className="flex flex-col gap-2  w-[30%] px-5 py-5 ">

                <h3 className="text-7xl text-green-600 opacity-50">03</h3>
                <h1 className="text-8xl">MY <br /> <span className="text-green-600">PROJECTS</span></h1>

                <p className="text-2xl font-sans">Here are some of my recent projects that showcase my skills and passion for building real-world applications.</p>

               <button className="my-10 py-4 px-10 border border-2 border-green-600 rounded-4xl text-white font-sans font-semibold text-xl flex items-center gap-2 justify-center ">View All Projects<FaArrowRightLong/></button>

            </div>

            <div className="projectgrid w-[70%] mx-10 p-10 grid  grid-cols-2 gap-5 mt-10">

                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                

            </div>
       </div>
      
    </div>
  );
}

export default Projects;
