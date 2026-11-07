import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Contact = () => {
  return (
    <div id="contact" className="flex flex-col items-center mt-[80px] pt-5 pb-15" style={{scrollMarginTop:50}}>

        <h1 id="skillheading" className="text-5xl w-[200px] text-center">Contact</h1>

        <div className="flex mt-10 w-[100%] ">

            <div className="flex flex-col gap-1 w-[60%] px-5 py-5 ">
            
                <h3 className="text-6xl text-green-600 opacity-50">06</h3>
                <h1 className="text-7xl">GET IN<span className="text-green-600"> TOUCH</span></h1>

                <p className="text-xl font-sans">Let's build something great together.</p>
                <p className="text-xl font-sans">I'm always open to discussing new opportunities, projects and everything regarding tech.</p>

                <div className="flex flex-col gap-3 mt-5 font-sans text-md">

                    <div className="flex items-center gap-3 text-xl">
                        <CiMail size={35} className="text-green-600"/>
                        sy05092005@gmail.com
                    </div>

                    <div className="flex items-center gap-3 text-xl">
                        <FaGithub size={35} className="text-green-600"/>
                        https://github.com/SAHILYDV5356J
                    </div>

                    <div className="flex items-center gap-3 text-xl">
                        <FaLinkedinIn size={35} className="text-green-600"/>
                        linkedin.com/in/sahilyadav001
                    </div>

                </div>


            </div>

            <div className="w-[40%] ">
                <form action="" className="flex flex-col gap-3  p-5 bg-black/50 rounded-2xl shadow-md shadow-white/30">

                    
                    <input type="text" placeholder="Enter your name here..." className="bg-white/10 p-2 rounded-sm outline-0" />

                    <input type="email" placeholder="Enter your email here..." className="bg-white/10 p-2 rounded-sm outline-0" />
 
                    <textarea rows={10} cols={20} type="text" placeholder="Enter your Message here..." className="bg-white/10 p-2 rounded-sm outline-0" />


                    <button type="submit" className="w-full bg-green-600 p-2 rounded-2xl">Submit</button>

                </form>
            </div>

        </div>
      
    </div>
  );
}

export default Contact;
