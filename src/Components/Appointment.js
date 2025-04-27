import { useState } from 'react';
import { hospitallist } from '../Utils/HospitalList';
import { Specialist } from '../Utils/HospitalList';
import AnimateBg from './AnimateBg';
import Nav from './Nav';

export default function Appointment()
{
    return(<>
    <Nav/>
    <div className='backdrop-blur-md bg-white/30 border border-white/20 rounded-xl shadow-lg p-6 max-w-md mx-auto mt-40'>
    <h1 className='text-center text-4xl font-mono font-bold'>Doctor Appointment Form</h1>
    <div >
    <PatientForm></PatientForm>
    </div>
    </div>
    <AnimateBg/>
    
    </>)
}


function PersonalDetailsStep ({ formData, handleChange })  {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">
          Age:
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">
          Gender:
        </label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="contact" className="block text-gray-700 text-sm font-bold mb-2">
          Contact Info:
        </label>
        <input
          type="tel"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  );
};


const MedicalDetailsStep = ({ formData, handleChange }) => {
  return (
    <div >
      <h2 className="text-xl font-semibold mb-4">Medical Details</h2>
      
      <div className="mb-4">
        <label htmlFor="diseaseDescription" className="block text-gray-700 text-sm font-bold mb-2">
          Brief Description of Disease:
        </label>
        <textarea
          id="diseaseDescription"
          name="diseaseDescription"
          value={formData.diseaseDescription}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows="3"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="disease" className="block text-gray-700 text-sm font-bold mb-2">
          Specialist Required:
        </label>
        <select
          id="Specialist"
          name="Specialist"
          value={formData.Specialist}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select Specialist</option>
          {
            Specialist.map((special) => (
                <option key={special} value={special}>
                  {special}
                </option>
              ))
          }
</select>
      </div>
      <div className="mb-4">
        <label htmlFor="hospital" className="block text-gray-700 text-sm font-bold mb-2">
          Hospital:
        </label>
        <select
          id="hospital"
          name="hospital"
          value={formData.hospital}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select Hospital</option>
          {
            hospitallist.map((hospital) => (
                <option key={hospital.name} value={hospital.name}>
                  {hospital.name}
                </option>
              ))
          }
        </select>
      </div>
    </div>
  );
};

const AppointmentDetailsStep = ({ formData, handleChange, handleFileChange }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Appointment Details & Reports</h2>
      <div className="mb-4">
        <label htmlFor="appointmentDate" className="block text-gray-700 text-sm font-bold mb-2">
          Appointment Date:
        </label>
        <input
          type="date"
          id="appointmentDate"
          name="appointmentDate"
          value={formData.appointmentDate}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="appointmentTime" className="block text-gray-700 text-sm font-bold mb-2">
          Appointment Time:
        </label>
        <input
          type="time"
          id="appointmentTime"
          name="appointmentTime"
          value={formData.appointmentTime}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="previousReports" className="block text-gray-700 text-sm font-bold mb-2">
          Previous Medical Reports:
        </label>
        <input
          type="file"
          id="previousReports"
          name="previousReports"
          onChange={handleFileChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {formData.previousReports && (
          <p className="text-gray-600 text-sm mt-1">
            Selected file: {formData.previousReports.name}
          </p>
        )}
      </div>
    </div>
  );
};


function PatientForm()
{
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
      name: '',
      age: '',
      gender: '',
      contact: '',
      disease: '',
      diseaseDescription: '',
      appointmentDate: '',
      appointmentTime: '',
      previousReports: null, // For file uploads
    });
  
    const nextStep = () => {
      setCurrentStep(currentStep + 1);
    };
  
    const prevStep = () => {
      setCurrentStep(currentStep - 1);
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleFileChange = (event) => {
      setFormData({
        ...formData,
        previousReports: event.target.files[0], // Assuming single file upload for now
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (currentStep !== 3) {
        return;
      }
      //console.log('Form Data Submitted:', formData);
      const formPayload = { ...formData, id: Date.now() }; // Adding a unique ID based on timestamp
      console.log('Form Data Submitted:', formData);
    
      // Retrieve the current appointments from localStorage
      const existingAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    
      // Add the new appointment to the array
      existingAppointments.push(formPayload);
    
      // Save the updated array back to localStorage
      localStorage.setItem('appointments', JSON.stringify(existingAppointments));
    
      alert('Appointment submitted and saved!');
    };
    
  
    return (
      <form  className="max-w-md mx-auto mt-8 p-6 border rounded shadow-md">
        {/* Render different sections based on currentStep */}
        {currentStep === 1 && <PersonalDetailsStep formData={formData} handleChange={handleChange} />}
        {currentStep === 2 && (
          <MedicalDetailsStep formData={formData} handleChange={handleChange} />
        )}
        {currentStep === 3 && (
          <AppointmentDetailsStep
            formData={formData}
            handleChange={handleChange}
            handleFileChange={handleFileChange}
          />
        )}
  
        {/* Navigation Buttons */}
        <div className="mt-4 flex justify-between">
          {currentStep > 1 && (
            <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
              Previous
            </button>
          )}
          {currentStep < 3 ? (
            <button type="button" onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Next
            </button>
          ) : (
            <button type="button" onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Submit
            </button>
          )}
        </div>
      </form>
    );
  };