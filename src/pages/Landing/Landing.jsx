
const Landing = () => {
  return (
    <main className="relative h-screen w-screen">
      <div className="lg:w-2/3 mx-auto">

        <div className="flex m-2 mt-20 ">
          <img className="w-2/3 rounded-l-md" src="/src/images/office_cover_photo.jpeg" alt="office"/>
          <img className="w-1/3 rounded-r-md border-l-0 border-4 border-borderGreen" src="/src/images/serenity_dad.jpeg" alt="office"/>
        </div>

        <div className="m-5 ">
          <div className="text-center text-xl">
            73 Church Street <br/> North Adams, MA 01247
          </div>
          <br />
          <div className="bg-emerald-900 rounded p-2 drop-shadow">
            Dr. May has been serving the North Adams community with expert chiropractic care for over 25 years. 
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora consequatur odit nobis, cupiditate consequuntur quia expedita sint eius dignissimos tempore vitae iure ratione molestias ipsam cum unde vero delectus? Nostrum.
          </div>
        </div>

        <br />

        <div className="m-5">
          <div className="flex">
            <img className="rounded-full m-1 w-20 h-20 drop-shadow" src="/src/images/baby_dad_head.jpeg" alt="baby_dad_head"/>
            <div className="bg-teal-900 text-gray-300 m-1 p-2 drop-shadow rounded">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est nam dignissimos laborum adipisci! Commodi sapiente mollitia dignissimos numquam similique? Deserunt perspiciatis incidunt cupiditate libero commodi, adipisci autem corrupti dignissimos explicabo!
            </div>
          </div>

          <div className="flex">
            <img className="rounded-full m-1 w-20 h-20 drop-shadow" src="/src/images/dad_headshot.jpeg" alt="baby_dad_head"/>
            <div className="bg-teal-900 text-gray-300 m-1 p-2 drop-shadow rounded">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est nam dignissimos laborum adipisci! Commodi sapiente mollitia dignissimos numquam similique? Deserunt perspiciatis incidunt cupiditate libero commodi, adipisci autem corrupti dignissimos explicabo!
            </div>
          </div>
        </div>

      </div>

    </main>
  )
}

export default Landing