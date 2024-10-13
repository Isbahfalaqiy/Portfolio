import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import emailjs from '@emailjs/browser';

AOS.init();
const Content4 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0gux2gp', 'template_ru4nnyd', form.current, {
        publicKey: 'Jqdl2UxJ6FjSen0eD',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="mt-[40px]">
      <section className="body-font relative">
        <div className="container px-4 pt-24 md:px-20 lg:px-10 w-full">
          <div className="text-center" data-aos="fade-down" data-aos-duration="600">
            <h1 className="text-[20px] md:text-[25px] lg:text-[25px] font-Poppins font-semibold">
              Contact Me
            </h1>
            <p className="mb-10 font-semibold text-[15px] lg:text-[17px] text-green-500">
              Feel free to get in touch with me
            </p>
          </div>

          {/* Card with Green Background */}
          <form className="bg-green-500 px-6 py-10 rounded-lg shadow-lg mx-auto max-w-4xl" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" ref={form} onSubmit={sendEmail}>
            <div className="-m-2 flex flex-wrap sm:flex-col md:flex-row w-full" >
              <div className="w-full md:w-1/2 p-2">
                <div className="relative" >
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="peer w-full rounded border  border-yellow-400 bg-white py-1 px-3 text-base leading-8 text-black placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-white focus:ring-2 focus:ring-white "
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
              <div className="w-full md:w-1/2 p-2">
                <div className="relative">
                  <input
                    type="email" 
                    id="email"
                    name="user_email"
                    className="peer w-full rounded border  border-yellow-400 bg-white py-1 px-3 text-base leading-8 text-black placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-white focus:ring-2 focus:ring-white"
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
                    className="peer w-full rounded border border-yellow-400 bg-white py-1 px-3 text-base leading-8 text-black placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-white focus:ring-2 focus:ring-white"
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
                <button className="font-Poppins font-semibold mx-auto flex rounded border-0 bg-black py-2 px-8 text-lg text-white hover:bg-gray-800 focus:outline-none" type="submit" value="Send">
                  Submit
                </button>
              </div>
            </div>
          </form>

          <div className="mt-8 w-full border-t border-gray-800 p-2 pt-5 text-center ">
            <Link className="text-indigo-400" to="mailto:isbahfalaqiy61@gmail.com">
              isbahfalaqiy61@gmail.com
            </Link>
            <div className="flex justify-center space-x-4 mt-4">
              <span className="inline-flex">
                <Link
                  to="https://web.facebook.com/misbahfalaqiy.falaqiy/"
                  className="text-gray-500"
                >
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
                <Link
                  to="https://www.tiktok.com/@yourusername" 
                  className="ml-4 text-gray-500 mt-[2px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-4 w-4 hover:scale-125 hover:text-black  text-gray-500 "
                  >
                    <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                  </svg>
                </Link>
                <Link
                  to="https://www.instagram.com/isbahfalaqiy_/"
                  className="ml-4 text-red-500 hover:scale-125"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/muhamad-isbah-falaqiy-1b4a6724a/"
                  className="ml-4 text-indigo-500"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5 hover:scale-125 hover:text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15A1.5 1.5 0 0021 19.5v-15A1.5 1.5 0 0019.5 3zM8 17.5H6.5V10h1.5v7.5zm-0.75-8.75c-0.5 0-1-.5-1-1s0.5-1 1-1 1 0.5 1 1-0.5 1-1 1zM18 17.5h-1.5v-4.5c0-1.125-0.5-2.5-2-2.5-1.5 0-2 1-2 2.5v4.5H10.5V10h1.5v1.5c1.5-2.25 5-2.25 5 2.25v4.75H18z"></path>
                  </svg>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content4;
``
