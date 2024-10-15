import React, { useRef } from "react";
import { Link } from "react-router-dom"; 
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

AOS.init();

const Content4 = () => {
  const form = useRef();

  // Notification logic
  const notify = (message, type) => {
    if (type === "success") {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  // Send email function
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
    <div className="mt-[40px]">
      <section className="body-font relative">
        <div className="container mt-32 px-10 md:max-w-[1050px] lg:max-w-[1500px] md:px-20">
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
                      required
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
                      required
                    />
                    <label
                      htmlFor="email"
                      className="font-Poppins font-normal absolute left-3 -top-6 bg-transparent text-sm leading-7 text-black focus-visible:text-white transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white active:text-white"
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
                      required
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
                  <button className="font-Poppins font-semibold mx-auto flex rounded border-0 bg-black py-2 px-8 text-lg text-white hover:bg-gray-800 focus:outline-none" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* ToastContainer for Notifications */}
          <ToastContainer />

          {/* Footer Section with Border */}
          <div className="w-full mt-8 relative border-t border-gray-800 p-2 pt-5 text-center md:max-w-full lg:max-w-full md:mt-[450px]">
            <Link className="text-indigo-400" to="mailto:isbahfalaqiy61@gmail.com">
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
                {/* Add other social media links here */}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content4;
