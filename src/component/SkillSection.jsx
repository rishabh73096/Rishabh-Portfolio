import SkillCard from "./SkillCard";

const SkillSection = ({ max, min, skill }) => {
    return (<>
        <div className="mb-20 lg:mb-36">
            <h1 className="text-5xl lg:text-7xl mb-10 gradiant-text"> My SKills</h1>
            <div className="h-[305px] overflow-y-scroll select-none scroll-bar">
                <SkillCard tilte="reactJs" value={70} />
                <SkillCard tilte="HTML" value={70} />
                <SkillCard tilte="CSS" value={70} />
                <SkillCard tilte="JavScript" value={70} />
                <SkillCard tilte="Java" value={70} />
                <SkillCard tilte="Php" value={70} />
                <SkillCard tilte="NodeJs" value={70} />
            </div>
        </div>


    </>)
}
export default SkillSection;
