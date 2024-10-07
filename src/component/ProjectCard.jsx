import { FaGithub } from "react-icons/fa";
import { RiSignalTowerFill } from "react-icons/ri";
const ProjectCard = () => {
    return (<>

        <div className="p-2 m-2">
            <div className="h-fit w-[320px] lg:w-[290px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-clip lg:overflow-hidden hover:shadow-md lg:hover:scale-105 transition-all delay-500 backdrop-blur-3xl shadow-xl">
                <a href=""><img src="./Threads-of-Artisans.jpg" alt="image" className="lg:h-48 w-[200px] object-cover object-center w-full " /></a>
                <div className="p-4 flex flex-col lg:gap-3">
                    <div>
                        <h2 className="tracking-widest text-white text-2xl"> Threads Of Artisans</h2>
                    </div>
                    <h1 className="text-lg lg:text-xl font-bold text-gray-400"> evelopment, particularly in the MERN (MongoDB, Express.js, React.js, Node.js) stack </h1>
                    <div className="flex items-center justify-between ">
                        <a href="http://">
                            <FaGithub className="text-pink-500 font-bold inline-flex items-center text-lg md:text-xl lg:mb-0 mb-2 hover:text-purple-600 cursor-pointer"/>
                        </a>
                        <a href="http://">
                            <RiSignalTowerFill className="text-pink-500 font-bold inline-flex items-center text-lg md:text-xl lg:mb-0 mb-2 hover:text-purple-600 cursor-pointer"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>)

}
export default ProjectCard;