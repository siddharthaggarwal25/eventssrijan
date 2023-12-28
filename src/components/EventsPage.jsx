import React from "react";
import EventCard from "./EventCardComponent";
import Vanta from "./Vanta";

function EventsPage() {
  return (
    <div>
      <div>
        <div class="mx-auto px-8 ">
          <div class="mt-10 hidden w-full flex-col justify-between space-y-4 md:flex md:flex-row">
            <div class="flex w-full items-end border-b border-gray-300">
              <div class="cursor-pointer px-6 py-1 leading-normal  ">
                <button
                  type="button"
                  class="inline-flex items-center rounded-md bg-gray-800 px-7 py-2 text-sm font-semibold text-white hover:bg-black/80"
                >All</button>
              </div>
              <div class="cursor-pointer px-6 py-1 leading-normal  ">
              <button
                  type="button"
                  class="inline-flex items-center rounded-md bg-black px-6 py-2 text-sm font-semibold text-white hover:bg-black/80"
                >Clubs</button>
              </div>
              <div class="cursor-pointer px-6 py-1 leading-normal ">
              <button
                  type="button"
                  class="inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/80"
                >Department</button>
              </div>
            </div>
          </div>
          <div class="mx-auto grid w-full  items-center space-y-8 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3">
          <EventCard/>
          <EventCard/>
          <EventCard/>
          </div>
        </div>
    
      </div>
    </div>
  );
}

export default EventsPage;
