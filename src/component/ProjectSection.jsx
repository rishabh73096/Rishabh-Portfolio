import ProjectCard from "./ProjectCard";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { useRef } from "react";

const ProjectSection = () => {

    const scrollRef = useRef();

    const LeftScroll = () => {
        scrollRef.current.scrollLeft -= 500;
    }

    const rightScroll = () => {
        scrollRef.current.scrollLeft += 500;
    }

    return (<>
        <div 
        data-aos="fade-down"
        className="mb-20 lg:mb-36">
            <h1 className="text-5xl lg:text-7xl mb-10 gradiant-text">Project section </h1>
            <div ref={scrollRef} className="flex overflow-x-scroll gap-3 scroll-hide">
                <ProjectCard title="Threads Of Artisans" github="https://github.com/rishabh73096/threads-of-Artisans-frontend" liveurl="https://threads-of-artisans-frontend.vercel.app/" img ="./Threads-of-Artisans.jpg" desc="A MERN stack eCommerce platform connecting artisans to global customers."/>
                <ProjectCard title="Tastytails" github="https://github.com/rishabh73096/TastyTrail" liveUrl="https://tasty-trails-eight.vercel.app/" img ="/Tastytails.png" desc="React-based food delivery app using Tailwind CSS and Redux for dynamic cart management."/>
                <ProjectCard title="Portfolio" github="https://github.com/rishabh73096/Rishabh-Portfolio" liveUrl="https://rishabh-portfolio-eight.vercel.app/" img ="/portfolio.jpg" desc="Portfolio showcasing my frontend development skills using React and Tailwind CSS."/>
                <ProjectCard title="" github="" liveUrl="" img ="" desc=""/>
                <ProjectCard title="" github="" liveUrl="" img ="" desc=""/>
            </div>
            <div className="flex justify-center items-center gap-4 select-none text-white">
                <FaArrowLeft onClick={LeftScroll} className="text-xl lg:text-2xl text-yellow-500 hidden lg:block cursor-pointer" />
                <h2 className=" gradiant-text font-mono text-lg uppercase">Slide for more </h2>
                <FaArrowRight onClick={rightScroll} className="text-xl lg:text-2xl text-yellow-500 hidden lg:block cursor-pointer" />
            </div>


        </div>
    </>)

}
export default ProjectSection;