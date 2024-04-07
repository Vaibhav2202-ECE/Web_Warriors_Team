import React from "react";
// import Header from "../Layout/Header";
import HomeLayout from "../Layout/HomeLayout"; // Assuming HomeLayout.js is in the same directory as Homepage.jsx
import homePageMainImage from "../assets/2.png";
import { Link } from "react-router-dom";
import aboutMainImage from "../assets/s1.png";
import a from "../assets/s2.jpg";
import b from "../assets/s3.avif";
import c from "../assets/s4.png";
import d from "../assets/s5.jpeg";
import e from "../assets/s6.jpg";
const Homepage = () => {
  return (
    <HomeLayout>
      {/* <Header /> */}
      <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
        {/* for platform details */}
        <div className="w-1/2 space-y-6">
          <h1 className="text-5xl font-semibold">
            Book Your {" "}
            <span className="text-yellow-500 font-bold">Ambulance</span>
          </h1>
          <p className="text-xl text-gray-200">
          Welcome to AmbuSwift, where quick and reliable ambulance booking services are just a click or call away. Our dedicated team of professionals ensures swift assistance during emergencies and non-emergency medical transfers. With transparent pricing and a fleet of well-equipped ambulances, we prioritize your safety and comfort at all times. Trust AmbuSwift for seamless medical transportation whenever you need it most.
          </p>

          {/* for buttons */}
          <div className="space-x-6">
            <Link to="/">
              <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                Explore Services
              </button>
            </Link>
            <Link to="/Booking">
              <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:border-yellow-600 transition-all ease-in-out duration-300">
                Book Now
              </button>
            </Link>
          </div>
        </div>

        {/* right section for image */}
        <div className="w-1/2 flex items-center justify-center">
          <img src={homePageMainImage} alt="home page image" />
        </div>
      </div>



      {/* added */}
      <div className="pl-20 pt-20 flex flex-col text-white">
      <div className="flex justify-center">
    <div className="text-center">
    <h1 className="text-5xl text-yellow-500 font-semibold">
      OUR GOALS
    </h1>
  </div>
  </div>

      <div className="mx-auto flex items-center justify-between w-full max-w-screen-lg">
        <section className="text-left w-1/2 mr-10">
          
          <p className="text-xl text-gray-200">
          AmbuSwift is dedicated to minimizing ambulance response times to enhance the safety and well-being of individuals in critical situations. By swiftly connecting patients with the necessary medical assistance, we aim to significantly reduce the probability of fatalities during emergencies. Our primary focus is on ensuring that timely and efficient ambulance services are readily available, thereby increasing the chances of survival and recovery for those in need.
          </p>
        </section>

        <div className="w-1/2">
          <img
            id="test1"
            className="w-full"
            src={aboutMainImage}
            alt="aboutMainImage"
          />
        </div>
      </div>

      <div className="carousel m-auto w-1/2 my-16">
        {/* Your carousel content */}
        <div id="slide1" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              {/* for personality image */}
              <img
                className="w-40 rounded-full border-2 border-gray-400"
                src={a}
                alt="A"
              />
              {/* for writting the quotes */}
              <p className="text-xl text-gray-200">
                "Ensure that emergency calls receive immediate attention to provide swift assistance to patients in critical conditions, thus increasing their chances of survival."
              </p>
              {/* for personality name */}
              <h3 className="text-2xl font-semibold"></h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide5" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              {/* for personality image */}
              <img
                className="w-40 rounded-full border-2 border-gray-400"
                src={b}
                alt="B"
              />
              {/* for writting the quotes */}
              <p className="text-xl text-gray-200">
                "Strategically deploy ambulances based on real-time data analysis to minimize response times and reach patients promptly, maximizing efficiency in emergency situations."
              </p>
              {/* for personality name */}
              <h3 className="text-2xl font-semibold">Optimize Ambulance Deployment</h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide3" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              {/* for personality image */}
              <img
                className="w-40 rounded-full border-2 border-gray-400"
                src={c}
                alt="C"
              />
              {/* for writting the quotes */}
              <p className="text-xl text-gray-200">
                "Establish clear communication protocols among dispatchers, ambulance crews, and medical facilities to facilitate seamless coordination and ensure accurate information exchange for optimal patient care."
              </p>
              {/* for personality name */}
              <h3 className="text-2xl font-semibold">Efficient Communication Protocols</h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide4" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              {/* for personality image */}
              <img
                className="w-40 rounded-full border-2 border-gray-400"
                src={d}
                alt="D"
              />
              {/* for writting the quotes */}
              <p className="text-xl text-gray-200">
                "Regularly train ambulance crews to enhance their skills and response capabilities, ensuring they are well-prepared to handle various medical emergencies proficiently."
              </p>
              {/* for personality name */}
              <h3 className="text-2xl font-semibold">Continuous Training and Development</h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide5" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              {/* for personality image */}
              <img
                className="w-40 rounded-full border-2 border-gray-400"
                src={e}
                alt="E"
              />
              {/* for writting the quotes */}
              <p className="text-xl text-gray-200">
                "Conduct routine maintenance checks on ambulances and inspect medical equipment regularly to maintain optimal functionality and reliability during critical situations, ensuring the safety and effectiveness of ambulance services."
              </p>
              {/* for personality name */}
              <h3 className="text-2xl font-semibold">Regular Maintenance and Equipment Checks</h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

      </div>
      <div className="p-3"></div>
    </div>
      {/* added */}
    </HomeLayout>
  );
};

export default Homepage;
