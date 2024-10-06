import { FaGithub } from "react-icons/fa";
import { RiSignalTowerFill } from "react-icons/ri";
const ProjectCard = () => {
    return (<>

        <div>
            <div className="h-fit w-[300px] lg:w-[320px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-clip lg:overflow-hidden hover:shadow-md lg:hover:scale-105 transition-all delay-500 backdrop-blur-3xl shadow-xl">
                <a href=""><img src="./Threads-of-Artisans.jpg" alt="image" className="lg:h-48 w-[200px] object-cover object-center w-full " /></a>
        <div className="p-4 flex flex-col lg:gap-3"> 
            <div>
                <h2 className="tracking-widest text-white text-2xl"> Threads Of Artisans</h2>
            </div>
            <h1> evelopment, particularly in the MERN (MongoDB, Express.js, React.js, Node.js) stack </h1>
            <div>
                <a href="http://">
                    <FaGithub />
                </a>
                <a href="http://">
                    <RiSignalTowerFill />
                </a>
            </div>
            </div>
        </div>
        </div>
    </>)

}
export default ProjectCard;