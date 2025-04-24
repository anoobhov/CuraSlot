import { useState } from "react"
import { Link } from "react-router-dom"
export default function Nav()
{

  //change nav color
  
  const [navColor,setnavColor] = useState(false)
  const changeNavColor = ()=>{
    if(window.scrollY >=1)
    {
      setnavColor(true)
    }else{
      setnavColor(false)
    }
  }
  window.addEventListener('scroll',changeNavColor)
    return(
        <header>
            {/* Logo */}
            <div className={`top-0 fixed z-[100]  flex justify-between items-center w-full px-7 transition-all duration-500 ease-in-out ${
    navColor
      ? "py-5 bg-gradient-to-r from-blue-300 to-blue-200 backdrop-blur-md bg-opacity-60 "
      :"bg-white/10 backdrop-blur-md py-7"
  }`}>
              <Link to="/">
                <p className="font-extrabold text-2xl">OPDs</p>
                </Link>
                <div>
                
                </div>
                <div>                
                <div className="flex gap-4">
  <button className="px-5 py-2 rounded-xl bg-white/70 text-blue-700 font-semibold shadow-md backdrop-blur-sm hover:bg-white/90 transition">
    Get Started
  </button>
  
  <button className="px-5 py-2 rounded-xl bg-white/70 text-gray-800 font-semibold shadow-md backdrop-blur-sm hover:bg-white/90 transition">
    Light Mode
  </button>
</div>

</div>
            </div>
        </header>
    )
}