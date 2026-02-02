const HomeCard = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center mb-20 lg:mb-36">
        <div
          data-aos="fade-up-right"
          className="flex flex-col gap-5 lg:w-[50%] text-white"
        >

          <p className="text-xl lg:text-[19px] text-gray-300">
            I'm Rishabh Tiwari — a Full Stack Developer with 2 years of
            combined freelance and professional experience. I specialize in
            building end-to-end web applications using the MERN stack, and I
            actively contribute to both frontend and backend architecture.
          </p>
          <p className="text-xl lg:text-[19px] text-gray-300">
            Beyond development, I work with Figma to design user-centric
            interfaces, and I have also implemented DevOps practices like CI/CD
            pipelines, containerization with Docker, and cloud deployments to
            streamline delivery and scale effectively.
          </p>
          <p className="text-xl lg:text-[19px] text-gray-300">
            I enjoy building meaningful tech products that solve real problems,
            and I am always open to new challenges and collaborations.
          </p>
          <a
            href="https://drive.google.com/file/d/1v3VoNFJaQhpul7YCTbF4O5oEEfksvnxS/view?usp=sharing"
            className="font-mono text-center font-semibold text-lg lg:text-2xl cursor-pointer mb-3 lg:mb-0 hover:border-2 p-2 hover:border-gray-200 hover:backdrop-blur-lg rounded-xl gradiant-text"
          >
            See My Resume
          </a>
        </div>
        <div data-aos="fade-up-left">
          <img
            src="./Profile.jpg "
            className="rounded-full w-[230px] h-[230px] lg:w-[450px] lg:h-[450px]"
          />
        </div>
      </div>
    </>
  );
};
export default HomeCard;
