const NavBar = () => {
  return (
    <div className="flex justify-around bg-teal-900
    backdrop-blur-md shadow-md w-full
    fixed top-0 left-0 right-0 z-10">
      <div className='font-sans w-screen'>
        <nav className="">
          <ul className="flex flex-row">
            <li className="grow m-2 text-sm font-light">
              <div className="text-left underline">
                Email:
              </div>
              <p className="text-amber-500">
                docmay@gmail.com
              </p>
            </li>

            <li className="grow m-2 mt-3 font-serif font-bold text-2xl text-slate-300">Dr.Peter May</li>

            <li className="m-2 text-sm font-light">
              <div className="text-right underline">
                Phone
              </div>
              <p className="text-amber-500">
                (413)663-5264
              </p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavBar