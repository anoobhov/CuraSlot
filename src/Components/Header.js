import { Link } from "react-router-dom";
import Doctorsimg from "../Utils/images/Doctors.jpg"
import Reviewimg from "../Utils/images/Review.jpg"
import { ServicesData } from "../Utils/ServicesData"
export default function Header()
{
    return(
        <>
        <header>
            {/* Logo */}
            <div className="bg-[linear-gradient(90deg,_#a1c4fd_0%,_#c2e9fb_100%)] top-0 fixed z-[100] py-7 flex justify-between items-center w-full px-7">
                <p className="font-extrabold text-2xl">OPDs</p>
                <div>
                <a href="" className="font-extrabold p-5">About</a>
                <a href="" className="font-extrabold ">Hospitals List</a>
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
        <div className="max-w-[55%] h-[100vh]">
        <h1 className="text-7xl font-bold text-">Yours Shortcut to Healthcare</h1>
        
        {/* <h1 className="text-7xl pb-5  font-bold">& informed Choices</h1> */}
        <p className="text-gray-400 text-2xl mt-3">Find, Book, and Review with Ease</p>
        <div className="mt-6">
        
<div className="">
<Link
  to="/services"
  className="text-xl md:text-2xl px-6 py-3 rounded-4xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white font-semibold shadow-md hover:from-blue-600 hover:to-blue-700 transition-all inline-block text-center">
  Explore Services
</Link>
</div>

</div>
</div>
{/* bellow main section */}
{/* Section 1 */}
<div className="flex flex-col md:flex-row items-center justify-between gap-10 pb-24">
  <img src={Doctorsimg} alt="Doctors" className="w-[40%] rounded-2xl" />
  <div className="w-full md:w-[50%] pr-12">
    <h1 className="text-4xl font-bold mb-4">Innovative Features for Better Healthcare</h1>
    <p className="mb-4 text-xl">We offer a wide range of features to ease your Medical Experience</p>
    <hr className="mb-4"/>
    <h2 className="font-semibold text-2xl mt-1">Online Appointment Scheduling</h2>
    <p>Reduce waiting times with our intelligent queuing system...</p>

    <h2 className="font-semibold text-2xl mt-4">Real-time Updates on Bed Availability</h2>
    <p>Stay informed with live updates on bed availability...</p>

    <h2 className="font-semibold text-2xl mt-4">Faster Emergency Admissions</h2>
    <p>Our optimized emergency admission process ensures...</p>
  </div>
</div>

{/* Section 2 */}
<div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 pb-24">
  <div className="w-full md:w-[50%]">
    <h1 className="text-4xl font-bold mb-4">Trusted by Patients and Providers</h1>
    <p className="mb-4 text-xl">We offer a wide range of features to ease your Medical Experience</p>
    <hr className="mb-4"/>
    <h2 className="font-semibold text-2xl mt-1">Online Appointment Scheduling</h2>
    <p>Reduce waiting times with our intelligent queuing system...</p>

    <h2 className="font-semibold text-2xl mt-4">Real-time Updates on Bed Availability</h2>
    <p>Stay informed with live updates on bed availability...</p>

    <h2 className="font-semibold text-2xl mt-4">Faster Emergency Admissions</h2>
    <p>Our optimized emergency admission process ensures...</p>
  </div>
  <img src={Reviewimg} alt="Review" className="w-[40%] rounded-2xl pr-12" />
</div>

        </main>
        </>
    )
}
