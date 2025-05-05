import { Link, useHref } from "react-router-dom";
import { useState } from "react";
import Doctorsimg from "../Utils/images/Doctors.jpg"
import Reviewimg from "../Utils/images/Review.jpg"
import AnimateBg from "./AnimateBg";
import Nav from "./Nav"
import { motion, AnimatePresence } from "framer-motion";
import { Target } from "lucide-react";
export default function Header()
{

    return(
        <>
        <Nav/>
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
        <Footer/>
        </>
    )
}
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
              <Link to="urgent">
              Urgent Admission
              </Link>
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
        className="w-full md:w-[50%] backdrop-blur-md bg-white/30 border border-white/20 rounded-xl shadow-lg p-6 max-w-md mt-10"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">Trusted by Patients and Providers</h1>
        <p className="mb-4  text-gray-500">Our platform has been trusted by thousands of patients and healthcare providers to deliver exceptional care and experiences.</p>
        <hr className="mb-4" />
        <h2 className="font-semibold text-2xl mt-1">10,000+ Patients Served</h2>
        <p className="text-cyan-600">High-quality care delivered with compassion and efficiency.</p>

        <h2 className="font-semibold text-2xl mt-4">500+ Healthcare Providers</h2>
        <p className="text-cyan-600">Top professionals from across specialties on one platform.</p>

        <h2 className="font-semibold text-2xl mt-4">4.9/5 Rating</h2>
        <p className="text-cyan-600">Trusted reviews from real patients across the country.</p>
      </motion.div>

      {/* Image from right */}
      <motion.img
        src={Reviewimg}
        alt="Review"
        className="w-[40%] rounded-2xl mx-auto"
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
          className="w-full md:w-[50%] backdrop-blur-md bg-white/30 border border-white/20 rounded-xl shadow-lg p-6 max-w-md mx-auto mt-10"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-4">Innovative Features for Better Healthcare</h1>
          <p className="mb-4 text-gray-500">We offer a wide range of features to ease your Medical Experience</p>
          <hr className="mb-4" />
          <h2 className="font-semibold text-2xl mt-1">Online Appointment Scheduling</h2>
          <p className="text-cyan-600">Reducing waiting time & ensuring a smooth flow through the OPD process.</p>
  
          <h2 className="font-semibold text-2xl mt-4">Real-time Updates on Bed Availability</h2>
          <p className="text-cyan-600">Allowing for quicker decisions and streamlined patient admissions.</p>
  
          <h2 className="font-semibold text-2xl mt-4">Faster Emergency Admissions</h2>
          <p className="text-cyan-600" >Ensures critical patients receive timely care without unnecessary delays.</p>
        </motion.div>
      </div>
    );
  }

function Footer()
{
    return(
      <>
        <footer className="py-7 bg-white/10 backdrop-blur-md px-12">
        <div className="flex justify-between">
            {/* about app */}
            <div className="w-[25vw]">
              <h1 className="text-2xl font-bold">CuraSlot</h1>
              <p>We simplifies hospital management with efficient queuing models, OPDs & inventory management</p>
            </div>

            <div className="w-[13vw]">
            <h1 className="text-xl font-semibold mb-1">Quick Links</h1>
            <p className="hover:text-pink-400 hover:cursor-pointer mb-0.5">&#x2022; Appointment</p>
            <p className="hover:text-blue-400 hover:cursor-pointer mb-0.5">&#x2022; Bed Availability</p>
            <p className="hover:text-red-500 hover:cursor-pointer mb-0.5">&#x2022; Urgent Admission</p>
            <p className="hover:text-purple-400 hover:cursor-pointer mb-0.5">&#x2022; About Us</p>
            <p className="hover:text-green-400 hover:cursor-pointer mb-0.5">&#x2022; Career</p>
            </div>

            <div className="flex justify-center items-center  bg-transparent w-[25vw]">
      <FlipCard />
    </div>
    </div>
    <hr className="mt-6"></hr>
    <h1 className="text-center mt-6">&copy;2025 CuraSlot.All rights reserved.</h1>
        </footer>
      </>
    )
}

const FlipCard = () => {
  return (
    <div className="w-64 h-40 perspective group cursor-pointer ">
      <div className="relative w-full h-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden py-5 bg-gradient-to-r from-purple-400 to-blue-300 backdrop-blur-md bg-opacity-60 text-gray-700 font-semibold text-2xl flex items-center justify-center rounded-xl shadow-xl">
        &#128222;Contact us
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 py-5 bg-gradient-to-r from-pink-700 to-pink-500 backdrop-blur-md bg-opacity-60 text-white flex flex-col items-center justify-center rounded-xl shadow-xl p-4">
          <h1 className="text-lg font-bold">📍Address</h1>
          <p className="text-sm text-center">27A, Ballygunge Park Road, Kolkata, West Bengal 700019</p>
          <h1 className="text-lg font-bold">✉️Email</h1>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=anubhavr219@gmail.com"
            className="text-sm text-center block hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >anubhavr219@gmail.com</a>
        </div>
      </div>
    </div>
  );
};