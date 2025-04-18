import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Services from "./Components/Services";

function App()
{
    return(
        <>
            <Header/>
            <Services></Services>
        </>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);