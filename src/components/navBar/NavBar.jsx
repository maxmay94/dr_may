const NavBar = () => {
  return (
  <div className='bg-gray-600/[.2] hover:bg-gray-600/[.4] text-slate-200 font-sans font-semibold  h-10 w-screen'>
    <nav className="sticky top-0">
      <ul className="flex flex-row">
        <li className="grow m-2">Dr.May</li>
        <li className="m-2">(413)663-5264</li>
      </ul>
    </nav>
  </div>
  )
}

export default NavBar