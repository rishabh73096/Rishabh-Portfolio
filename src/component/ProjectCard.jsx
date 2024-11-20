import { FaGithub } from "react-icons/fa";
import { RiSignalTowerFill } from "react-icons/ri";

const ProjectCard = ({title,img,github,liveUrl,desc}) => {
    return (<>

        <div className="p-1 m-2">
            <div className="h-fit w-[300px] lg:w-[300px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-clip lg:overflow-hidden hover:shadow-md lg:hover:scale-105 transition-all delay-500 backdrop-blur-3xl shadow-xl">
                <a href=""><img src={img} alt="image" className="lg:h-44 w-[200px] object-center w-full " /></a>
                <div className="p-4 flex flex-col lg:gap-3">
                    <div>
                        <h2 className="tracking-widest text-white text-2xl"> {title}</h2>
                    </div>
                    <h1 className="text-lg lg:text-lg font-bold text-gray-400 mb-3 lg:mb-0"> {desc}</h1>
                    <div className="flex items-center justify-between ">
                        <a href={github}>
                            <FaGithub className="text-pink-500 font-bold inline-flex items-center text-lg md:text-xl lg:mb-0 mb-1 hover:text-purple-600 cursor-pointer"/>
                        </a>
                        <a href={liveUrl}>
                            <RiSignalTowerFill className="text-pink-500 font-bold inline-flex items-center text-lg md:text-xl lg:mb-0 mb-1 hover:text-purple-600 cursor-pointer"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>)

}
export default ProjectCard;