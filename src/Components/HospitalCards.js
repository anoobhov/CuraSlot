import { hospitallist } from "../Utils/HospitalList";
import AnimateBg from "./AnimateBg";
// import Nav from "./Nav";
// Main Component
export default function HospitalCards() {
  return (
    <>
    {/* <Nav/> */}
    <div className="min-h-screen bg-transparent p-6">
      <h1 className="text-2xl font-bold mb-4 text-black">Hospitals in Kolkata 🏥</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        <Hcard hospitalList={hospitallist} />
        <AnimateBg/>
      </div>
      
    </div>
    </>
  );
}

// Hcard Component
const Hcard = ({ hospitalList }) => {
  return (
    <>
      {hospitalList.map((hospital, index) => (
        <div
          key={index}
          className="flex flex-col transition-all duration-200 ease-linear  items-center p-4 bg-blue-50 rounded-lg w-60 hover:shadow-md hover:bg-blue-100"
        >
          {/* Hospital Image */}
          <img
            src={hospital.image_url}
            alt={hospital.name}
            className="w-full h-32 object-cover rounded-md mb-3"
          />

          {/* Name & Rating */}
          <div className=" mb-2">
            <h2 className="text-lg font-semibold text-center text-gray-800">{hospital.name}</h2>
            <p className="text-sm text-center text-yellow-600">⭐ {hospital.rating}</p>
          </div>

          {/* Location */}
          <p className="text-sm text-gray-600 text-center mb-1">
            📍 {hospital.location}
          </p>

          {/* Beds */}
          <h1 className="text-sm font-medium text-gray-800 text-center">🛏️Beds Available: </h1>
          <p className="text-sm font-medium text-gray-700 text-center">
             General:{" "}
            <span className="text-blue-600">{hospital.general_bed}</span>
          </p>
          <p className="text-sm font-medium text-gray-700 ">
             ICU :{" "}
            <span className="text-blue-600">{hospital.ICU}</span>
          </p>
          <p className="text-sm font-medium text-gray-700 ">
             CCU :{" "}
            <span className="text-blue-600">{hospital.CCU}</span>
          </p>
          {/* Location link */}
          <a className="text-sm font-medium text-gray-700 text-center mt-3 p-0 hover:underline decoration-dotted" 
          href={`https://www.google.com/maps/search/?api=1&query=${hospital.lat},${hospital.long}`} target="_blank">
          🌍Map</a>
        </div>
      ))}
    </>
  );
};


