import About from "../component/About";
import HomeCard from "../component/HomeCard";
import PortfolioCart from "../component/PortfolioCart";
import ProjectSection from "../component/ProjectSection";
import SkillSection from "../component/SkillSection";

const Home =()=>{
 return (<>
 <div className="w-[80vw] mx-auto">
 <PortfolioCart />
 <HomeCard />
 <About />
 <SkillSection />
 <ProjectSection />
 </div>

 </>)
}
 export default Home;