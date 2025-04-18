//Efficient queuing system.
//Real-time updates on bed availability.
//Faster emergency admissions.
//Patients reviews

import { ServicesData } from "../Utils/ServicesData"



export default function Services() {
    console.log("clicked")
    return (
        <div className="">
        <div className="flex flex-wrap">
            {ServicesData.map((service) => (
                <ServicesCard 
                    key={service.id} 
                    heading={service.heading} 
                    description={service.description} 
                />
            ))}
        </div>
        </div>
    );
}

function ServicesCard({ heading, description }) {
    return (
        <div className="flex w-full justify-between mb-2 pb-2">
            <div className="w-[70%]">
                <h1 className="text-2xl font-semibold">{heading}</h1>
                <p className="text-xl">{description}</p>
            </div>
        </div>
    );
}
