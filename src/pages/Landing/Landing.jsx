
const Landing = () => {
  return (
    <main className="relative">
      <div className="flex m-1">
        <img className="w-2/3 rounded-l-md" src="/src/images/office_cover_photo.jpeg" alt="office"/>
        <img className="w-1/3 rounded-r-md border-l-0 border-4 border-borderGreen" src="/src/images/serenity_dad.jpeg" alt="office"/>
      </div>
      <div className="flex m-5">
        <img className="rounded-full m-1 w-20 h-20 drop-shadow" src="/src/images/baby_dad_head.jpeg" alt="baby_dad_head"/>
        <div className="bg-teal-900 text-gray-300 m-1 p-2 drop-shadow rounded">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est nam dignissimos laborum adipisci! Commodi sapiente mollitia dignissimos numquam similique? Deserunt perspiciatis incidunt cupiditate libero commodi, adipisci autem corrupti dignissimos explicabo!
        </div>
      </div>
    </main>
  )
}

export default Landing