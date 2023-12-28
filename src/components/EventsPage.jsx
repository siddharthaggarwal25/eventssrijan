import React from "react";
import EventCard from "./EventCardComponent";
import "./style.css";


function EventsPage() {
  return (
    <div className="backgroundWork">
        <div>
                        
        </div>
        
      <div class=" grid w-full  items-center space-y-4 px-5 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}

export default EventsPage;
