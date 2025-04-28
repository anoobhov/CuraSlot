import { useEffect, useState } from "react";
import AnimateBg from "./AnimateBg";
function MyAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Get appointments from localStorage (default to empty array if none)
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(storedAppointments);
  }, []);

  if (appointments.length === 0) {
    return(
    <div className="text-center p-10 text-gray-500 mt-24">
  <div className="text-7xl mb-4">🚫📅</div>
  <h2 className="text-6xl font-semibold text-black">No Appointments</h2>
  <p className="mt-2 text-2xl">Book a new one!</p>
</div>
    )

  }

  return (
    <>
    {/* <AnimateBg/> */}
    <div className="w-[100vw] mx-auto mt-10 p-6 ">
      <h2 className="text-2xl font-bold mb-4 text-center">🕓My Appointments</h2>

    <div className="flex flex-wrap gap-2 justify-center">
      {appointments.map((appointment) => (
        <div key={appointment.id} className="mb-4 border rounded-2xl p-3">
          <h3 className="font-semibold">{new Date(appointment.id).toLocaleString()}</h3>
          <p><strong>Name:</strong> {appointment.name}</p>
          <p><strong>Age:</strong> {appointment.age}</p>
          <p><strong>Gender:</strong> {appointment.gender}</p>
          <p><strong>Contact:</strong> {appointment.contact}</p>
          <p><strong>Symtoms Description:</strong> {appointment.diseaseDescription}</p>
          <p><strong>Appointment Date:</strong> {appointment.appointmentDate}</p>
          <p><strong>Appointment Time:</strong> {appointment.appointmentTime}</p>
        </div>
        
      ))}
      </div>
    </div>
    </>
  );
}

export default MyAppointments;
