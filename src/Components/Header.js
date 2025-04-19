import { Link } from "react-router-dom";
import { useState } from "react";
import Doctorsimg from "../Utils/images/Doctors.jpg"
import Reviewimg from "../Utils/images/Review.jpg"
import AnimateBg from "./AnimateBg";

import { motion, AnimatePresence } from "framer-motion";
export default function Header()
{
// service button
const ServicesButtons = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => setShowOptions((prev) => !prev);

  return (
    <div className="flex flex-wrap items-center gap-3 px-4 py-6">
      {/* Toggle Button */}
      <div
        onClick={toggleOptions}
        className="cursor-pointer text-xl md:text-2xl px-6 py-3 rounded-4xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white font-semibold shadow-md hover:from-blue-600 hover:to-blue-700 transition-all"
      >
        Explore Services
      </div>

      {/* AnimatePresence handles exit animations */}
      <AnimatePresence>
        {showOptions && (
          <>
            {/* Appointment */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="cursor-pointer text-xl px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white font-semibold shadow-md hover:from-amber-600 hover:to-amber-700 transition-all"
            ><Link
            to="/Appointment">

              Book Appointment
              </Link>
            </motion.div>

            {/* Bed Availability */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="cursor-pointer text-xl px-6 py-3 rounded-xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-semibold shadow-md hover:from-green-600 hover:to-green-700 transition-all"
            >
              <Link to="BedAvl">
              Check Bed Availability</Link>
              
            </motion.div>

            {/* Urgent Admission */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="cursor-pointer text-xl px-6 py-3 rounded-xl bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white font-semibold shadow-md hover:from-red-600 hover:to-red-700 transition-all"
            >
              Urgent Admission
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

function ReviewSection(){
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 pb-24">
      {/* Text from left */}
      <motion.div
        className="w-full md:w-[50%]"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">Trusted by Patients and Providers</h1>
        <p className="mb-4 text-xl">Our platform has been trusted by thousands of patients and healthcare providers to deliver exceptional care and experiences.</p>
        <hr className="mb-4" />
        <h2 className="font-semibold text-2xl mt-1">10,000+ Patients Served</h2>
        <p>High-quality care delivered with compassion and efficiency.</p>

        <h2 className="font-semibold text-2xl mt-4">500+ Healthcare Providers</h2>
        <p>Top professionals from across specialties on one platform.</p>

        <h2 className="font-semibold text-2xl mt-4">4.9/5 Rating</h2>
        <p>Trusted reviews from real patients across the country.</p>
      </motion.div>

      {/* Image from right */}
      <motion.img
        src={Reviewimg}
        alt="Review"
        className="w-[40%] rounded-2xl"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      />
    </div>
  );
};

function ServiceSection() {
    return(
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 pb-24">
        {/* Image animation from left */}
        <motion.img
          src={Doctorsimg}
          alt="Doctors"
          className="w-[40%] rounded-2xl"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        />
  
        {/* Text animation from right */}
        <motion.div
          className="w-full md:w-[50%]"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">Innovative Features for Better Healthcare</h1>
          <p className="mb-4 text-xl">We offer a wide range of features to ease your Medical Experience</p>
          <hr className="mb-4" />
          <h2 className="font-semibold text-2xl mt-1">Online Appointment Scheduling</h2>
          <p>Reduce waiting times with our intelligent queuing system...</p>
  
          <h2 className="font-semibold text-2xl mt-4">Real-time Updates on Bed Availability</h2>
          <p>Stay informed with live updates on bed availability...</p>
  
          <h2 className="font-semibold text-2xl mt-4">Faster Emergency Admissions</h2>
          <p>Our optimized emergency admission process ensures...</p>
        </motion.div>
      </div>
    );
  }

    return(
        <>
        <header>
            {/* Logo */}
            <div className="bg-[linear-gradient(90deg,_#a1c4fd_0%,_#c2e9fb_100%)] top-0 fixed z-[100] py-7 flex justify-between items-center w-full px-7">
                <p className="font-extrabold text-2xl">OPDs</p>
                <div>
                {/* <a href="" className="font-extrabold p-5">About</a>
                <a href="" className="font-extrabold ">Hospitals List</a> */}
                </div>
                <div>                
                <div className="flex gap-4">
  <button className="px-5 py-2 rounded-xl bg-white/70 text-blue-700 font-semibold shadow-md backdrop-blur-sm hover:bg-white/90 transition">
    Get Started
  </button>
  {/* <button className="px-5 py-2 rounded-xl bg-white/70 text-green-700 font-semibold shadow-md backdrop-blur-sm hover:bg-white/90 transition">
    Register
  </button> */}
  <button className="px-5 py-2 rounded-xl bg-white/70 text-gray-800 font-semibold shadow-md backdrop-blur-sm hover:bg-white/90 transition">
    Light Mode
  </button>
</div>

</div>
            </div>
        </header>
        <main className="pt-39 pl-12">
        <div className="h-[100vh]">
        <h1 className="text-7xl font-bold text-">Yours Shortcut</h1>
        <h1 className="text-7xl font-bold">to Healthcare</h1>
        <p className="text-gray-400 text-2xl mt-3">Find, Book, and Review with Ease</p>
        <div className="mt-6">
          <ServicesButtons/>
          <AnimateBg/>
        </div>
</div>

<ServiceSection/>
<ReviewSection/>
        </main>
        </>
    )
}
