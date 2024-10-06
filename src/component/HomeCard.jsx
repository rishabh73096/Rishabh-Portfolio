const HomeCard = () => {
    return (<>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center mb-20 lg:mb-36">
            <div className="flex flex-col gap-5 lg:w-[50%] text-white">
                <h1 className="text-5xl lg:7xl gradiant-text mb-5 lg:mb-10"> Hey ! </h1>
                <p className="text-xl lg:text-2xl text-gray-300"> Hello, I'm Rishabh Tiwari, I have a keen interest in software development, particularly in the MERN (MongoDB, Express.js, React.js, Node.js) stack.

                    I specialize in crafting dynamic and responsive web applications using my expertise in HTML, CSS, JavaScript, and the MERN stack. Currently, I'm focused on deepening my understanding of MERN technologies and enhancing my skills in software development.
                </p>
                <p className="text-xl lg:text-2xl text-gray-300">
                    As a problem solver, I actively engage in tackling challenges related to software architecture, system design, and optimization. I enjoy delving into data structures and algorithms, seeking elegant solutions to complex problems
                </p>
            </div>
            <div>
                <img src="./Profile.jpg "
                className="rounded-full w-[230px] h-[230px] lg:w-[450px] lg:h-[450px]" />
            </div>
        </div>


    </>)
}
export default HomeCard