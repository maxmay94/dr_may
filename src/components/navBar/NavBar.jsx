const NavBar = () => {
  return (
    <div className="flex justify-around sm:py-1 md:py-2 xl:py-4 bg-gray-300/80
    backdrop-blur-md shadow-md w-full
    fixed top-0 left-0 right-0 z-10">
      <div className='text-gray-900 font-sans w-screen'>
        <nav className="">
          <ul className="flex flex-row">
            <li className="grow m-2">Dr.Peter May</li>
            <li className="grow m-2">docmay@gmail.com</li>
            <li className="m-2">(413)663-5264</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavBar