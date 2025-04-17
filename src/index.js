import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";

function App()
{
    return(
        <>
            <Header/>
        </>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);