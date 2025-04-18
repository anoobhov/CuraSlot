import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Services from "./Components/Services";
import Appointment from "./Components/Appointment"
import HospitalCards from "./Components/HospitalCards";
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App()
{
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/services" element={<Services />} />
            <Route path="/Appointment" element={<Appointment />} />
            <Route path="/BedAvl" element={<HospitalCards />} />
            </Routes>
        </BrowserRouter>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);