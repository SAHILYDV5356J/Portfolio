import "../css/skills.css"
import SkillCards from "./SkillCards";
const Skills = () => {
  return (
    <div id="skills" className="skills flex flex-col items-center mt-[80px] py-5">
       
       <h1 id="skillheading" className="text-5xl w-[180px] text-center">SKILLS</h1>

       <div className="flex items-center w-full mt-5">


            <div className=" w-[80%] p-5 mx-10  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 gap-x-2">

                <SkillCards skillname={"Java"} image={"/src/assets/skillphoto/java.png"}/>
                <SkillCards skillname={"SpringBoot"} image={"/src/assets/skillphoto/springboot.png"}/>
                <SkillCards skillname={"React"} image={"/src/assets/skillphoto/react.png"}/>
                <SkillCards skillname={"PostgreSql"} image={"/src/assets/skillphoto/postgresql.png"}/>
                <SkillCards skillname={"Redis"} image={"/src/assets/skillphoto/redis.png"}/>
                <SkillCards skillname={"Docker"} image={"/src/assets/skillphoto/docker.png"}/>
                <SkillCards skillname={"Git"} image={"/src/assets/skillphoto/git.png"}/>
                <SkillCards skillname={"Github"} image={"/src/assets/skillphoto/github.png"}/>
                <SkillCards skillname={"Javascript"} image={"/src/assets/skillphoto/js.jpeg"}/>
                <SkillCards skillname={"HTML"} image={"/src/assets/skillphoto/html.png"}/>
                <SkillCards skillname={"CSS"} image={"/src/assets/skillphoto/css.png"}/>
                <SkillCards skillname={"Postman"} image={"/src/assets/skillphoto/postman.png"}/>

            </div>

            <div className="flex flex-col gap-2  w-[20%] px-5 py-5">

                <h3 className="text-6xl text-green-600 opacity-50">02</h3>
                <h1 className="text-7xl">MY <br /> <span className="text-green-600">SKILLS</span></h1>

                <p className="text-xl font-sans">Technologies and tools I work with to build scalable and efficient applications.</p>

            </div>

       </div>

    </div>
  );
}

export default Skills;
