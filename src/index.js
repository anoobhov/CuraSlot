import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Services from "./Components/Services";
import Appointment from "./Components/Appointment"
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App()
{
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/services" element={<Services />} />
            <Route path="/Appointment" element={<Appointment />} />
            </Routes>
        </BrowserRouter>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);