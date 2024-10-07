const HomeCard = () => {
    return (<>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center mb-20 lg:mb-36">
            <div
                data-aos="fade-up-right"
                className="flex flex-col gap-5 lg:w-[50%] text-white">

                <h1 className="text-5xl lg:7xl gradiant-text mb-5 lg:mb-10"> Hey ! </h1>
                <p className="text-xl lg:text-[19px] text-gray-300">
                    I am a passionate Front-End Developer with a Master of Computer Applications (MCA), achieving a CGPA of 9.0. My strengths lie in creating dynamic, user-friendly websites and applications using HTML, CSS, JavaScript, and ReactJS.
                </p>
                <p className="text-xl lg:text-[19px] text-gray-300">
                    In addition to front-end technologies, I am familiar with modern CSS frameworks and proficient in both SQL and NoSQL databases, currently expanding my knowledge to include MongoDB. I also have experience with backend technologies like Node.js and Express.js, as well as cloud services like Appwrite and Firebase.
                </p>
                <p className="text-xl lg:text-[19px] text-gray-300">
                    Dedicated to staying updated with industry trends, I aim for excellence in every project, whether working independently or collaboratively, delivering exceptional digital solutions.
                </p>
            </div>
            <div data-aos="fade-up-left">

                <img src="./Profile.jpg "
                    className="rounded-full w-[230px] h-[230px] lg:w-[450px] lg:h-[450px]" />
            </div>
        </div>


    </>)
}
export default HomeCard