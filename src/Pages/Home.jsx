import { useEffect } from "react";
import About from "../component/About";
import ContactSection from "../component/ContactSection";
import HomeCard from "../component/HomeCard";
import PortfolioCart from "../component/PortfolioCart";
import ProjectSection from "../component/ProjectSection";
import SkillSection from "../component/SkillSection";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Home = () => {
    useEffect(()=>{
        AOS.init({
            duration:1500,
        },[]);
    })
    return (<>
        <div className="w-[84vw] mx-auto">
            <PortfolioCart />
            <HomeCard />
            <About />
            <SkillSection />
            <ProjectSection />
            <ContactSection />
        </div>

    </>)
}
export default Home;