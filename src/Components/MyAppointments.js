import { useEffect, useState } from "react";

function MyAppointments() {
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('patientFormData');

    if (storedData) {
      setAppointmentData(JSON.parse(storedData));
    }
  }, []);

  if (!appointmentData) {
    return <div className="text-center mt-10">No appointments found!</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">My Appointments</h2>

      <p><strong>Name:</strong> {appointmentData.name}</p>
      <p><strong>Age:</strong> {appointmentData.age}</p>
      <p><strong>Gender:</strong> {appointmentData.gender}</p>
      <p><strong>Contact:</strong> {appointmentData.contact}</p>
      <p><strong>Disease Description:</strong> {appointmentData.diseaseDescription}</p>
      <p><strong>Appointment Date:</strong> {appointmentData.appointmentDate}</p>
      <p><strong>Appointment Time:</strong> {appointmentData.appointmentTime}</p>
    </div>
  );
}

export default MyAppointments;
