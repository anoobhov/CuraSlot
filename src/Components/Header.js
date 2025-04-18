import Services from "./Services"
export default function Header()
{
    return(
        <>
        <header>
            {/* Logo */}
            <div className="bg-[linear-gradient(90deg,_#a1c4fd_0%,_#c2e9fb_100%)] top-0 fixed z-[100] py-7 flex justify-between items-center w-full px-7">
                <p className="font-extrabold text-2xl">OPDs</p>
                <div>
                <a href="" className="font-extrabold p-5">About</a>
                <a href="" className="font-extrabold ">Hospitals List</a>
                </div>
                <div>                
                <div className="flex gap-4">
  <button className="px-5 py-2 rounded-xl bg-white/70 text-blue-700 font-semibold shadow-md backdrop-blur-sm hover:bg-white/90 transition">
    Get Started
  </button>
  {/* <button className="px-5 py-2 rounded-xl bg-white/70 text-green-700 font-semibold shadow-md backdrop-blur-sm hover:bg-white/90 transition">
    Register
  </button> */}
  <button className="px-5 py-2 rounded-xl bg-white/70 text-gray-800 font-semibold shadow-md backdrop-blur-sm hover:bg-white/90 transition">
    Light Mode
  </button>
</div>

</div>
            </div>
        </header>
        <main className="pt-39 pl-12 max-w-[55%]">
        <h1 className="text-7xl font-bold text-">Revolutizing</h1>
        
        <h1 className="text-7xl pb-5  font-bold">Hospital Management</h1>
        <p className="text-gray-400 text-2xl">Skip the Queue and get Treatment Faster</p>
        <div className="mt-9">
        
<div className="">
  <button className="text-xl md:text-2xl px-6 py-3 rounded-4xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white font-semibold shadow-md hover:from-blue-600 hover:to-blue-700 transition-all">
    Explore Services
  </button>
</div>

</div>

        </main>
        </>
    )
}
