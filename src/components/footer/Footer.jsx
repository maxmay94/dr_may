const Footer = () => {
  return (
    <div className="flex justify-around bg-teal-900
    backdrop-blur-md shadow-md w-full
    fixed bottom-0 left-0 right-0 z-10">
      <div className='font-sans w-screen'>
        <nav className="">
          <ul className="flex flex-row">

            <li className="grow m-2 text-xs font-light">
              <p className="text-amber-500">
                docmay@gmail.com
              </p>
            </li>

            <li className="grow m-2">
              <div className="text-xs">
                73 Church Street, North Adams, MA 01247
              </div>
            </li>

            <li className="m-2 text-xs font-light">
              <p className="text-amber-500">
                (413) 458-9909
              </p>
            </li>

          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Footer