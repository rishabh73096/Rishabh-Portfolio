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
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
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