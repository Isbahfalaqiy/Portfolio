import React, { useRef } from "react";
import { Link } from "react-router-dom"; 
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Content4 = () => {
  const form = useRef();

  const notify = (message, type) => {
    if (type === "success") {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0gux2gp", // Replace with your service ID
        "template_ru4nnyd", // Replace with your template ID
        form.current,
        "Jqdl2UxJ6FjSen0eD" // Replace with your public key
      )
      .then(
        () => {
          notify("Email sent successfully!", "success");
        },
        (error) => {
          console.log("FAILED...", error.text);
          notify("Failed to send email. Please try again.", "error");
        }
      );
  };

  return (
    <div className="mt-[40px] ">
      <section className="body-font relative">
        <div className="container mt-32 px-10 md:max-w-[1050px] lg:max-w-[1500px] md:px-20 ">
          <div className="text-center" data-aos="fade-down" data-aos-duration="600">
            <h1 className="text-[20px] md:text-[25px] lg:text-[25px] font-Poppins font-semibold">
              Contact Me
            </h1>
            <p className="mb-10 font-semibold text-[15px] lg:text-[17px] text-green-500">
              Feel free to get in touch with me
            </p>
          </div>

          {/* Card with Green Background */}
          <div className="bg-green-500 px-6 py-10 rounded-lg shadow-lg mx-auto max-w-full" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
            <form ref={form} onSubmit={sendEmail} className="w-full">
              <div className="flex flex-wrap sm:flex-col md:flex-row w-full">
                <div className="w-full md:w-1/2 p-2">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      className="peer w-full rounded border border-white bg-white py-1 px-3 text-base leading-8 text-black placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-white focus:ring-2 focus:ring-white"
                      placeholder="Name"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-black transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white"
                    >
                      Name
                    </label>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-2 mt-4 md:mt-0 lg:mt-0">
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      className="peer w-full rounded border border-white bg-white py-1 px-3 text-base leading-8 text-black placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-white focus:ring-2 focus:ring-white"
                      placeholder="Email"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-black transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white"
                    >
                      Email
                    </label>
                  </div>
                </div>
                <div className="mt-4 w-full p-2">
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      className="peer w-full rounded border border-white bg-white py-1 px-3 text-base leading-8 text-black placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-white focus:ring-2 focus:ring-white"
                      placeholder="Message"
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-black transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white"
                    >
                      Message
                    </label>
                  </div>
                </div>
                <div className="w-full p-2">
                  <button className="font-Poppins font-semibold mx-auto flex rounded border-0 bg-black py-2 px-8 text-lg text-white hover:bg-gray-800 focus:outline-none" type="submit"  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Footer Section with Border */}
          <div className="w-full mt-8 relative border-t border-gray-800 p-2 pt-5 text-center md:max-w-full lg:max-w-full md:mt-[450px] ">
            <Link className="text-indigo-400 " to="mailto:isbahfalaqiy61@gmail.com">
              isbahfalaqiy61@gmail.com
            </Link>
            <div className="flex justify-center space-x-4 mt-4">
              <span className="inline-flex">
                <Link to="https://web.facebook.com/misbahfalaqiy.falaqiy/" className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5 hover:scale-125 hover:text-indigo-500 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </Link>
                <Link to="https://www.tiktok.com/@miffalaqiy" className="ml-4 text-gray-500 mt-[2px]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-4 w-4 hover:scale-125 hover:text-black text-gray-500">
                    <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                  </svg>
                </Link>
                <Link to="https://www.instagram.com/isbahfalaqiy_/" className="ml-4 text-red-500 hover:scale-125">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </Link>
                <Link to="https://www.linkedin.com/in/muhamad-isbah-falaqiy-1b4a6724a/" className="ml-4 text-indigo-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5 hover:scale-125 hover:text-blue-700 text-blue-700" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </Link>
              </span>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </div>
  );
};

export default Content4;
