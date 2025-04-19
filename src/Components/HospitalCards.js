import { hospitallist } from "../Utils/HospitalList";

export default function HospitalCards()
{
    return (
        <div className="min-h-screen bg-blue-300 p-6">
          <h1 className="text-2xl font-bold mb-4">Hospitals in Kolkata 🏥</h1>
          <Hcard hospitals={hospitallist} />
        </div>
      );
}

const Hcard = ({ hospitals }) => {
  return (
    <div className="p-4 grid gap-4 ">
      {hospitals.map((hospital, index) => (
        <div
          key={index}
          className="bg-blue-100 shadow-md rounded-xl p-4 flex items-start gap-4"
        >
          {/* Image */}
          <img
            src={hospital.image_url}
            alt={hospital.name}
            className="w-32 h-32 object-cover rounded-md"
          />

          {/* Details */}
          <div className="flex flex-col justify-between h-full">
            {/* Name & Rating */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {hospital.name}
              </h2>
              <p className="text-sm text-yellow-500">⭐ {hospital.rating}</p>
            </div>

            {/* Location */}
            <p className="text-sm text-gray-600">{hospital.location}</p>

            {/* Beds */}
            <p className="text-sm font-medium text-gray-700">
              Beds Available:{" "}
              <span className="text-blue-600">{hospital.beds_available}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

