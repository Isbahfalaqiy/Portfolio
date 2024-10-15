import React from "react";
import icon from "../../assets/hero.jpg";
import { TypeAnimation } from "react-type-animation";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Content1 = () => {
  return (
    <div>
      <main className="flex flex-col-reverse lg:flex-row min-h-[65vh] px-5 lg:px-52 py-10 justify-around items-center lg:items-start mt-24">
        {/* Content text */}
        <div  data-aos="fade-right" data-aos-delay="100" data-aos-duration="100"  className="flex flex-col mt-10 lg:mt-32 text-center lg:text-left">
          <h2 className="text-[15px] lg:text-[17px] font-semibold text-[#C5D86D]">Hello World, I'm</h2>
          <h1 className="text-4xl lg:text-5xl mt-2 mb-1 font-Poppins font-semibold">IsbahFalaqiy</h1>
          <TypeAnimation
            sequence={["Informatics Student", 1000, "Front-End Enthusiast", 1000, "Web Developer Enthusiast", 1000]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: " 25px",
              md: { fontSize: "20px" },
              lg: { fontSize: "40px" },
              display: "inline-block",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "500",
              background: "linear-gradient(100deg, #DCE35B,#38ef7d, #45b649)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            repeat={Infinity}
          />
          <p className="mt-3 font-semibold text-[15px] lg:text-[17px] text-[#000]">Welcome to My Personal Website.👋🏼</p>
        </div>

        {/* Content image */}
        <div className="flex mt-10 lg:mt-0">
          <div data-aos="fade-down-left" data-aos-delay="100" data-aos-duration="100"  className="rounded-full border-[4px] lg:border-[6px] border-[#78e9a3] ">
            <img src={icon} alt="" className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px] object-cover rounded-full" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Content1;
