import ProjectCard from "./ProjectCard";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { useRef } from "react";

const ProjectSection = () => {
  const scrollRef = useRef();
  const LeftScroll = () => {
    scrollRef.current.scrollLeft -= 500;
  };
  const rightScroll = () => {
    scrollRef.current.scrollLeft += 500;
  };

  const projects = [
    {
      title: "Forma Construction ",
      github: "https://github.com/TwoDigitInnovations/forma-web",
      liveUrl: "https://forma-web-seven.vercel.app/",
      img: "/forma.png",
      desc: "A responsive ecommerce site for browsing, filtering, and securely buying products",
    },

    {
      title: "My Lodge",
      github: "",
      liveUrl: "https://www.mylodge.cloud/",
      img: "/image3.png",
      desc: "A rental platform where users can book lodges and hosts can list their properties.",
    },
    {
      title: "GroceryPickup Store",
      github: "https://github.com/TwoDigitInnovations/grocerypickup-web",
      liveUrl: "https://www.bachhoahouston.com/",
      img: "/image1.png",
      desc: "A grocery web app for browsing items, adding to cart, and scheduling in-store pickups.",
    },
    {
      title: "Ecommerce Store",
      github: "https://github.com/jasznco/jasznco-web",
      liveUrl: "https://main.d29ub4hxfp2gu3.amplifyapp.com/",
      img: "/image2.png",
      desc: "A responsive ecommerce site for browsing, filtering, and securely buying products",
    },
    {
      title: "Hariir (Job Portal)",
      github: "https://github.com/TwoDigitInnovations/hariir-web",
      liveUrl: "https://hariir-web.vercel.app/",
      img: "/image4.png",
      desc: "A social app for connecting professionals, Company, and managing personal portfolios.",
    },

    {
      title: "Prescripto",
      github:
        "https://github.com/rishabh73096/Prescripto-Doctor-Booking-Appointment-System",
      liveUrl:
        "https://prescripto-doctor-booking-appointment-system.vercel.app",
      img: "/docter.png",
      desc: "A seamless doctor booking System with a context-driven API for efficient scheduling.",
    },
    {
      title: "Threads Of Artisans",
      github: "https://github.com/rishabh73096/threads-of-Artisans-frontend",
      liveUrl: "https://threads-of-artisans-frontend.vercel.app/",
      img: "/Threads-of-Artisans.jpg",
      desc: "A MERN stack eCommerce platform connecting artisans to global customers.",
    },
    {
      title: "Clipwise-Design",
      github: "https://github.com/rishabh73096/Clipwise-Task",
      liveUrl: "https://clipwise-task.vercel.app",
      img: "/clipwise.png",
      desc: "A sleek, responsive homepage UI built with React and styled using Tailwind CSS.",
    },
    {
      title: " Portfolio",
      github: "https://github.com/rishabh73096/Rishabh-Portfolio",
      liveUrl: "https://rishabh-portfolio-fawn.vercel.app",
      img: "/portfolio.jpg",
      desc: "Portfolio showcasing my frontend development skills using React and Tailwind CSS.",
    },
    {
      title: "Tastytails",
      github: "https://github.com/rishabh73096/TastyTrail",
      liveUrl: "https://tasty-trails-eight.vercel.app",
      img: "/Tastytails.png",
      desc: "React-based food delivery app using Tailwind CSS and Redux for dynamic cart management.",
    },
  ];

  return (
    <>
      <div data-aos="fade-down" className="mb-20 lg:mb-36">
        <h1 className="text-5xl lg:text-7xl mb-10 gradiant-text">
          Project section{" "}
        </h1>
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll gap-5 scroll-hide"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              github={project.github}
              liveUrl={project.liveUrl}
              img={project.img}
              desc={project.desc}
            />
          ))}
        </div>
        <div className="flex justify-center items-center gap-2 select-none text-white">
          <FaArrowLeft
            onClick={LeftScroll}
            className="text-xl lg:text-2xl text-yellow-500 hidden lg:block cursor-pointer"
          />
          <h2 className=" gradiant-text font-mono text-lg uppercase">
            Slide for more{" "}
          </h2>
          <FaArrowRight
            onClick={rightScroll}
            className="text-xl lg:text-2xl text-yellow-500 hidden lg:block cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};
export default ProjectSection;
