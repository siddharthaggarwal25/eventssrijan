import React from "react";

function EventCard() {
  return (
    <div className=" px-8">
     <div class="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]">
    <img
      src="https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxMTM4MTU1NXx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
      alt="AirMax Pro"
      class="z-0 h-full w-full rounded-md object-cover"
    />
    <div class="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div class="absolute bottom-4 left-4 text-left">
      <h1 class="text-3xl  font-semibold text-white pb-3  text-center">Event Name</h1>
      <h1 className="text-xl text-center font-semibold text-white pb-3"> Prize : Prizemoney</h1>
      <h1 className="text-xl  font-semibold text-white pb-3">Venue : Venue </h1>
    
      <button class="mt-2 inline-flex cursor-pointer items-center text-m font-semibold text-white">
        Show Event  →
      </button>
    </div>
  </div>
    </div>
  );
}
export default EventCard;
