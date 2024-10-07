import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const ContactSection = () => {
    return (<>
        <div
            data-aos="fade-right"
            className="flex flex-col lg:flex-row mb-20 lg:mb-36 lg:items-center">
            <span className="uppercase text-3xl lg:2xl font-bold mb-8 lg:mb-0 rotate-0 lg:-rotate-90 gradiant-text">
                Get Started
            </span>
            <div className="flex flex-col lg:flex-row lg:ml-20 lg:gap-24">
                <div className="mb-5 lg:mb-0">
                    <h1 className="text-5xl lg:text-7xl gradiant-text mb-5 lg:mb-10"> Contact me</h1>
                    <div className="flex flex-col gap-2">
                        <a href="mailto:rishabhtiwari73096@gmail.com" className="font-mono text-white underline text-lg lg:text-2xl ">rishabhtiwari73096@gmail.com</a>
                        <a href="tailto:+917309651657" className="font-mono text-white underline text-lg lg:text-2xl "> +91 7309651657</a>
                    </div>
                    <div className="flex gap-2 mt-2">
                        <AiFillGithub className="text-white text-2xl" />
                        <AiFillLinkedin className="text-white text-2xl" />
                        <AiFillInstagram className="text-white text-2xl" />
                    </div>
                    <h2 className="text-2xl font-mono font-bold text-white text-center"> OR</h2>
                </div>
                <div className="flex flex-col p-3">
                    <form>
                        <input type="text" placeholder="enter your name" name="name" id="name" className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 rounded transition-all delay-100 border-white gradiant-text font-mono text-xl lg:text-2xl mb-5 lg:mb-10 w-full lg:w-[30vw]" />
                        <input type="text" placeholder="enter your email" name="name" id="name" className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 rounded-lg border-white gradiant-text transition-all delay-100 font-mono text-xl lg:text-2xl mb-5 lg:mb-10 w-full lg:w-[30vw]" />
                        <textarea rows="3" name="message" id="message" placeholder="Enter Your Message" className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 rounded transition-all delay-100 border-white gradiant-text font-mono text-xl lg:text-2xl mb-5 lg:mb-10 w-full lg:w-[30vw]" />
                        <button type="Submit" className="px-3 py-2 bg-purple-500 hover:bg-purple-600 font-mono text-bold text-lg lg:text-xl w-full rounded-md">Send message</button>
                    </form>
                </div>
            </div>
        </div>
    </>)
}
export default ContactSection;