import React, { useEffect, useState } from "react";
import axios from "axios";
import "boxicons/css/boxicons.min.css"; // Import Boxicons CSS
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS animations
AOS.init();

const Content3 = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project data from the 'public' folder
    axios.get("/project.json").then((response) => {
      setProjects(response.data.Projects);
    });
  }, []);

  return (
    <div className="mt-[140px]">
      <div className="text-center" data-aos="fade-down" data-aos-duration="600" data-aos-delay="50">
        <h1 className="text-[20px] md:text-[25px] lg:text-[25px] font-Poppins font-semibold">
          My Projects Experience
        </h1>
        <p className="font-semibold text-[15px] lg:text-[17px] text-green-500">
          Explore the projects I've worked on so far
        </p>
      </div>

      <div className="px-5 md:px-15 lg:px-20 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-5 md:px-10" >
          {/* Responsive grid */}
          {projects &&
            projects.map((project) => (
              <div
                key={project.id}
                className="border rounded-md p-5 cursor-pointer bg-green-500" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="500"
              >
                <div className="flex flex-col">
                  <h1 className="mb-5 text-xl font-Poppins font-normal text-white text-center">
                    {project.title}
                  </h1>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded-md"
                  />
                  <h2 className="text-[14px] mt-5 text-[#f4f4f4] font-Poppins font-normal">
                    {project.description}
                  </h2>
                  <h3 className="text-[16px] mt-5  font-Poppins text-[#F4F6FF] font-semibold">
                    {project.stack}
                  </h3>
                  {/* Use tag <a> for external links */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-end"
                  >
                    <i className="bx bx-link text-yellow-200 text-xl mt-2"></i>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Content3;
