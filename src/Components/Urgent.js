import { useState } from "react";
import { hospitallist } from "../Utils/HospitalList";
import AnimateBg from "./AnimateBg";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
export default function Urgent()
{
    const navigate = useNavigate()
    const [formData, setFormData] = useState(
        {
            name: '',
            age: '',
            hospital: '',
            contact: '',
            reason: '',
        }
    )

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData.name.trim()||!formData.age.trim()||!formData.contact.trim()||!formData.reason.trim())
          {
            alert("Please fill the form Correctly!")
            return;
          }
        alert("Urgent Admission Confirmed!")
        const formPayload = { ...formData, id: Date.now() };
        const existingAppointments = JSON.parse(localStorage.getItem('urgent')) || [];
        existingAppointments.push(formPayload);
        localStorage.setItem('urgent', JSON.stringify(existingAppointments));
        navigate('/myapt')
        //console.log('Form Data Submitted:', formData);
      };
    return (
        <div>
            <Nav/>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-25 backdrop-blur-md bg-white/30 border border-white/20 rounded-xl shadow-lg p-6">
        <div >
          <h2 className="text-xl text-center font-semibold mb-4">Urgent Admission Form</h2>
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
              required
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
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
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
                    required
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
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
        <label htmlFor="reason" className="block text-gray-700 text-sm font-bold mb-2">
          Reason:
        </label>
        <select
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select Reason</option>
          <option value="Accident">Accident</option>
          <option value="Burn">Burn</option>
          <option value="Chest_Pain">Chest Pain</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Submit
      </button>
        </div>
        </form>
        <AnimateBg/>
        </div>
      );
}