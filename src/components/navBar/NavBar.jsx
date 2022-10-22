const NavBar = () => {
  return (
    <div className="flex justify-around bg-teal-900/90
    backdrop-blur-md shadow-md w-full
    fixed top-0 left-0 right-0 z-10">
      <div className='font-sans w-screen'>
        <nav className="">
          <ul className="flex flex-row">

            <li className="grow m-2 mt-3 font-serif font-bold text-2xl text-slate-200">Dr. Peter May</li>

            {/* <li className="grow m-2">
              <img className="rotate-90 w-10 h-10" src="/src/images/spine.svg" alt="spine" />
            </li> */}

            <li className="m-2 text-sm font-light">
              <p className="text-amber-500 text-right">
                (413) 458-9050
              </p>
              <p className="text-amber-500 text-right">
                docmay@gmail.com
              </p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavBar