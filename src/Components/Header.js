export default function Header()
{
    return(
        <>
        <header>
            {/* Logo */}
            <div className="bg-[linear-gradient(90deg,_#a1c4fd_0%,_#c2e9fb_100%)] text-black top-0 fixed z-[100] py-4 md:py-2 flex justify-between items-center w-full px-5 lg:py-2 md:px-10 transition-transform duration-300 ease-in-out translate-y-0">
                <p>OPDs</p>
                <div>
                <a>About</a>
                <a>Hospitals List</a>
                </div>
                <div>
                <button>Login</button>
                <button>Register</button>
                <button>Light mode</button>
                </div>
            </div>
        </header>
        <main className="pt-24">
        <h1>Revolution</h1>
        
        <h1>OPDs registration</h1>
        <p>Skip the Queue and get Treatment Faster</p>
        <button>Book appointment</button>
        <button>Explore other Services</button>
        </main>
        </>
    )
}
