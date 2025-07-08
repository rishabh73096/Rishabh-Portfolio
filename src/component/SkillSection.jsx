import SkillCard from "./SkillCard";

const SkillSection = () => {
    return (
        <div data-aos="fade-right" className="mb-20 lg:mb-36">
            <h1 className="text-5xl lg:text-7xl mb-10 gradiant-text">My Skills</h1>
            <div className="h-[305px] overflow-y-scroll select-none scroll-bar">

                {/* Languages & Frameworks */}
                <SkillCard title="React.js" value={70} />
                <SkillCard title="Next.js" value={60} />
                <SkillCard title="JavaScript (ES6+)" value={75} />
                <SkillCard title="Redux Toolkit" value={65} />
                <SkillCard title="Tailwind CSS" value={85} />
                <SkillCard title="HTML5" value={90} />
                <SkillCard title="CSS3" value={80} />
                <SkillCard title="Node.js" value={60} />
                <SkillCard title="Express.js" value={60} />
                <SkillCard title="Java" value={60} />
                <SkillCard title="PHP" value={50} />

                {/* Tools & Utilities */}
                <SkillCard title="Git" value={75} />
                <SkillCard title="GitHub" value={75} />
                <SkillCard title="Docker" value={40} />
                <SkillCard title="Figma" value={60} />
                <SkillCard title="VS Code" value={85} />

                {/* Other Skills */}
                <SkillCard title="Responsive Design" value={85} />
                <SkillCard title="REST APIs" value={80} />
                <SkillCard title="JWT Authentication" value={70} />
                <SkillCard title="UI Optimization" value={70} />
                <SkillCard title="Cross-Browser Compatibility" value={70} />

                {/* Nice to Have */}
                <SkillCard title="AWS (S3)" value={30} />
                <SkillCard title="MongoDB" value={75} />
                <SkillCard title="MySQL" value={65} />
                <SkillCard title="Jest (learning)" value={30} />

            </div>
        </div>
    );
};

export default SkillSection;
