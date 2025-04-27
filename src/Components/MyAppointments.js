import { useEffect, useState } from "react";

function MyAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Get appointments from localStorage (default to empty array if none)
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(storedAppointments);
  }, []);

  if (appointments.length === 0) {
    return <div className="text-center mt-10">No appointments found.</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">My Appointments</h2>

      {appointments.map((appointment) => (
        <div key={appointment.id} className="mb-4">
          <h3 className="font-semibold">Appointment {new Date(appointment.id).toLocaleString()}</h3>
          <p><strong>Name:</strong> {appointment.name}</p>
          <p><strong>Age:</strong> {appointment.age}</p>
          <p><strong>Gender:</strong> {appointment.gender}</p>
          <p><strong>Contact:</strong> {appointment.contact}</p>
          <p><strong>Disease:</strong> {appointment.disease}</p>
          <p><strong>Disease Description:</strong> {appointment.diseaseDescription}</p>
          <p><strong>Appointment Date:</strong> {appointment.appointmentDate}</p>
          
          <p><strong>Appointment Time:</strong> {appointment.appointmentTime}</p>
          <hr className="mt-5"></hr>
        </div>
        
      ))}
      
    </div>
  );
}

export default MyAppointments;
