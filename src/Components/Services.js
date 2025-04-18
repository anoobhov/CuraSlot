//Efficient queuing system.
//Real-time updates on bed availability.
//Faster emergency admissions.
//Patients reviews

import { ServicesData } from "../Utils/ServicesData"



export default function Services() {
    return (
        <>
        <h1 className="text-center font-extrabold text-5xl mb-5">Our Services</h1><hr></hr>
        <div className="flex justify-center">
        <div className="flex flex-wrap gap-5 justify-evenly w-[80%] mt-5">
        
            {ServicesData.map((service) => (
                <div key={service.id} className="bg-blue-100 w-[300px] rounded-3xl text-center px-5 py-7">
                <ServicesCard  
                    heading={service.heading} 
                    description={service.description} 
                />
                </div>
            ))}
        </div>
        </div>
        </>
    );
}

function ServicesCard({ heading, description }) {
    return (
        <div className="flex w-full">
            <div className="w-full">
                <h1 className="text-2xl font-semibold">{heading}</h1>
                <p className="text-xl text-gray-600">{description}</p>
            </div>
        </div>
    );
}
