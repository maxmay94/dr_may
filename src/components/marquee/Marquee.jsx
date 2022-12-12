const Marquee = () => {
  return (
    <div className="bg-teal-900 mb-10 mx-5 rounded drop-shadow-xl">
    <div class="relative flex overflow-x-hidden">
      <div class="animate-marquee whitespace-nowrap">
        <span className="mx-1 text-xl">Call Today!</span>
        <span className="mx-4 text-xl text-amber-500">(413) 664-9050</span>
        <span className="mx-4 text-xl">     </span>
        <span className="mx-1 text-xl">Email me at:</span>
        <span className="mx-4 text-xl text-amber-500">docmay@gmail.com</span>
        <span className="mx-4 text-xl">     </span>
      </div>

      <div class="absolute top-0 animate-marquee2 whitespace-nowrap">
        <span className="mx-1 text-xl">Call Today!</span>
        <span className="mx-4 text-xl text-amber-500">(413) 664-9050</span>
        <span className="mx-4 text-xl">     </span>
        <span className="mx-1 text-xl">Email me at:</span>
        <span className="mx-4 text-xl text-amber-500">docmay@gmail.com</span>
        <span className="mx-4 text-xl">     </span>
      </div>
    </div>
  </div>
  )
}

export default Marquee