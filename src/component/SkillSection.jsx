import SkillCard from "./SkillCard";

const SkillSection = ({ max, min, skill }) => {
    return (<>
        <div 
        data-aos="fade-right"
        className="mb-20 lg:mb-36">
            <h1 className="text-5xl lg:text-7xl mb-10 gradiant-text"> My SKills</h1>
            <div className="h-[305px] overflow-y-scroll select-none scroll-bar">
                <SkillCard tilte="ReactJs" value={70} />
                <SkillCard tilte="JavScript" value={75} />
                <SkillCard tilte="NodeJs" value={60} />
                <SkillCard tilte="MongoDb" value={75} />
                <SkillCard tilte="SQL" value={65} />
                <SkillCard tilte="HTML5" value={90} />
                <SkillCard tilte="Tailwind CSS" value={85} />
                <SkillCard tilte="Java" value={60} />
                <SkillCard tilte="Php" value={50} />
            </div>
        </div>


    </>)
}
export default SkillSection;
