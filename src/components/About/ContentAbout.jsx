import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHtml5,
	faCss3,
	faJs,
	faReact,
	faNodeJs,
	faBootstrap,
	faGitAlt,
} from "@fortawesome/free-brands-svg-icons"; // Import all icons
import img1 from "../../assets/hero.jpg";
import mySql from "../../assets/database.png";
import imgTailwind from "../../assets/tailwind.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const ContentAbout = () => {
	// State to manage which section is visible (Tech Stack or Tools)
	const [activeSection, setActiveSection] = useState("techStack");

	return (
		<div className="mt-32">
			<div className="px-5 md:px-20 lg:px-20">
				<div className="container bg-green-500 rounded-[20px] opacity-">
					{/* Header section with title and line */}
					<div className="flex items-center w-[310px] md:w-[345px] lg:w-[475px] mt-10 pt-10" data-aos="fade-down" data-aos-duration="700">
						<h2 className="font-bold ml-5 md:ml-10 text-white text-2xl">
							About Me
						</h2>
						<div className="flex-grow border-t border-white ml-5"></div>
					</div>

					{/* Flex container for image on the left and text on the right */}
					<div className="flex flex-col md:flex-row items-center pb-10" >
						{/* Image on the left */}
						<div className="w-full md:w-1/2 flex justify-center mt-5 lg:w-1/3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
							<img
								src={img1}
								alt="Muhamad Isbah Falaqiy"
								className="rounded-full w-[300px] h-[300px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] ml-0 md:ml-10 "
							/>
						</div>

						{/* Text on the right */}
						<div className="w-full md:w-2/3 text-white px-5 md:pl-20 text-justify mt-5 md:mt-0">
							<p className="mb-10 leading-relaxed font-popins font-normal text-[20px] indent-12" data-aos="fade-down-left" data-aos-duration="1500" data-aos-delay="700">
								Hi, I'm Muhamad Isbah Falaqiy, a front-end developer from Depok.
								I focus on building interactive, user-friendly web interfaces
								and have a strong passion for web design and the latest web
								technologies.
							</p>
							<p className="leading-relaxed font-popins font-normal text-[20px] indent-12" data-aos="fade-up-left" data-aos-duration="1800" data-aos-delay="1000">
								I enjoy simplifying complex ideas into clean, functional, and
								visually appealing designs. With a solid understanding of design
								principles, I'm always eager to learn and improve, staying up to
								date with new trends in web development.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Section with buttons to toggle between Tech Stack and Tools */}
			<div className="px-5 md:px-[120px] py-8 flex items-center lg:w-[400px] w-[200px]">
				<div className="flex-grow border-t border-yellow-400"></div>
				<h2 className="ml-5 mt-2 text-2xl font-semibold font-Poppins">Skills</h2>
			</div>

			<div className="flex gap-5 px-5 md:px-[120px]">
				<button
					className={`w-32 h-10 rounded-md font-semibold font-Poppins text-[15px] ${
						activeSection === "techStack"
							? "bg-green-500 text-white"
							: "bg-black text-white"
					}`}
					onClick={() => setActiveSection("techStack")}
				>
					Tech Stack
				</button>
				<button
					className={`w-32 h-10 rounded-md font-semibold font-Poppins   text-[15px] ${
						activeSection === "tools"
							? "bg-green-500 text-white"
							: "bg-black text-white"
					}`}
					onClick={() => setActiveSection("tools")}
				>
					Tools
				</button>
			</div>

			{/* Conditional rendering based on active section */}
			{activeSection === "techStack" && (
				<div className="px-5 md:px-[120px] mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 pb-32 cursor-pointer">
					{/* Tech Stack Cards */}
					<div className="border-2 border-[#C5D86D] flex items-center p-5 rounded-md hover:bg-[#f5ffcc] font-semibold font-Poppins">
						<FontAwesomeIcon
							icon={faHtml5}
							style={{ color: "#ff0000" }}
							className="w-[40px] h-[40px]"
						/>
						<h1 className="text-center ml-3">HTML</h1>
					</div>
					<div className="border-2 border-[#C5D86D] flex items-center p-5 rounded-md hover:bg-[#f5ffcc] font-semibold font-Poppins">
						<FontAwesomeIcon
							icon={faCss3}
							style={{ color: "#005eff" }}
							className="w-[40px] h-[35px]"
						/>
						<h1 className="text-center ml-3">CSS</h1>
					</div>
					<div className="border-2 border-[#C5D86D] flex items-center p-5 rounded-md hover:bg-[#f5ffcc] font-semibold font-Poppins">
						<FontAwesomeIcon
							icon={faJs}
							style={{ color: "#f7df1e" }}
							className="w-[40px] h-[40px]"
						/>
						<h1 className="text-center ml-3">JavaScript</h1>
					</div>
					<div className="border-2 border-[#C5D86D] flex items-center p-5 rounded-md hover:bg-[#f5ffcc] font-semibold font-Poppins">
						<FontAwesomeIcon
							icon={faReact}
							style={{ color: "#61dafb" }}
							className="w-[40px] h-[40px]"
						/>
						<h1 className="text-center ml-3">React</h1>
					</div>
					<div className="border-2 border-[#C5D86D] flex items-center p-5 rounded-md hover:bg-[#f5ffcc] font-semibold font-Poppins">
						<FontAwesomeIcon
							icon={faNodeJs}
							style={{ color: "#3c873a" }}
							className="w-[40px] h-[40px]"
						/>
						<h1 className="text-center ml-3">Node.js</h1>
					</div>
					<div className="border-2 border-[#C5D86D] flex items-center p-5 rounded-md hover:bg-[#f5ffcc] font-semibold font-Poppins">
						<FontAwesomeIcon
							icon={faBootstrap}
							style={{ color: "#563d7c" }}
							className="w-[40px] h-[40px]"
						/>
						<h1 className="text-center ml-3">Bootstrap</h1>
					</div>
					<div className="border-2 border-[#C5D86D] flex items-center p-5 rounded-md hover:bg-[#f5ffcc] font-semibold font-Poppins">
						<img
							src={imgTailwind}
							alt="Tailwind CSS"
							className="w-[40px] h-[30px]"
						/>
						<h1 className="text-center ml-3">Tailwind</h1>
					</div>
				</div>
			)}

			{activeSection === "tools" && (
				<div className="px-5 md:px-[120px] mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 pb-32 cursor-pointer">
					<div className="border-2 border-[#C5D86D] flex items-center p-5 rounded-md hover:bg-[#f5ffcc] font-semibold font-Poppins">
						<FontAwesomeIcon
							icon={faGitAlt}
							style={{ color: "#ff0000" }}
							className="w-[40px] h-[40px]"
						/>
						<h1 className="text-center ml-3">Git</h1>
					</div>
					<div className="border-2 border-[#C5D86D] flex items-center p-5 rounded-md hover:bg-[#f5ffcc] font-semibold font-Poppins">
						<img src={mySql} alt="MySQL" className="w-[40px] h-[40px]" />
						<h1 className="text-center ml-3">MySQL</h1>
					</div>
				</div>
			)}
		</div>
	);
};

export default ContentAbout;
