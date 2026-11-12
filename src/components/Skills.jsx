import "../css/skills.css"
import SkillCards from "./SkillCards";
const Skills = () => {
  return (
    <div id="skills" className="skills flex flex-col items-center mt-[80px] py-5">
       
       <h1 id="skillheading" className=" text-5xl w-[180px] text-center">SKILLS</h1>

       <div className="flex flex-col-reverse md:flex-row items-center w-full mt-5">


            <div className=" w-full md:w-[70%] p-5  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">

                <SkillCards skillname={"Java"} image={"/assets/skillphoto/java.png"}/>
                <SkillCards skillname={"SpringBoot"} image={"/assets/skillphoto/springboot.png"}/>
                <SkillCards skillname={"React"} image={"/assets/skillphoto/react.png"}/>
                <SkillCards skillname={"PostgreSql"} image={"/assets/skillphoto/postgresql.png"}/>
                <SkillCards skillname={"Redis"} image={"/assets/skillphoto/redis.png"}/>
                <SkillCards skillname={"Docker"} image={"/assets/skillphoto/docker.png"}/>
                <SkillCards skillname={"Git"} image={"/assets/skillphoto/git.png"}/>
                <SkillCards skillname={"Github"} image={"/assets/skillphoto/github.png"}/>
                <SkillCards skillname={"Javascript"} image={"/assets/skillphoto/js.jpeg"}/>
                <SkillCards skillname={"HTML"} image={"/assets/skillphoto/html.png"}/>
                <SkillCards skillname={"CSS"} image={"/assets/skillphoto/css.png"}/>
                <SkillCards skillname={"Postman"} image={"/assets/skillphoto/postman.png"}/>

            </div>

            <div className="flex flex-col gap-2 w-full  md:w-[30%] px-5 py-5">

                <h3 className="text-4xl md:text-6xl text-green-600 opacity-50">02</h3>
                <h1 className="text-6xl lg:text-7xl md:text-6xl">MY <br /> <span className="text-green-600">SKILLS</span></h1>

                <p className="text-xl font-sans">Technologies and tools I work with to build scalable and efficient applications.</p>

            </div>

       </div>

    </div>
  );
}

export default Skills;
