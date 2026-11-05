import Stepper from "./Stepper";

const Experience = () => {
  return (
    <div id="experience" className="flex flex-col items-center mt-[80px] pt-5 pb-15" style={{scrollMarginTop:80}}>

        <h1 id="skillheading" className="text-5xl w-[300px] text-center">EXPERIENCE</h1>

        <div className="flex flex-row-reverse items-center w-full mt-10 ">

            <div className="flex flex-col gap-2  w-[40%] px-5 py-5 ">
            
                <h3 className="text-6xl text-green-600 opacity-50">04</h3>
                <h1 className="text-7xl">EXPERIENCE<br /> <span className="text-green-600">&EDUCATION</span></h1>

                <p className="text-xl font-sans">My journey so far and what I'm currently focusing on.</p>


            </div>

            <div className="flex flex-col gap-2  w-[60%] px-5 py-5 ">
              <Stepper/>
            </div>

        </div>
      
    </div>
  );
}

export default Experience;
