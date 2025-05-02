import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Appointment from "./Components/Appointment"
import HospitalCards from "./Components/HospitalCards";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Urgent from "./Components/Urgent";
import MyAppointments from "./Components/MyAppointments";
import HospitalRouteMap from "./Components/HospitalRoute";
function App()
{
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/Appointment" element={<Appointment />} />
            <Route path="/BedAvl" element={<HospitalCards />} />
            <Route path="/urgent" element={<Urgent />} />
            <Route path="/myapt" element={<MyAppointments />} />
            <Route path="/route" element={<HospitalRouteMap/>}/>
            </Routes>
        </BrowserRouter>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);