import React from "react";
import EventCard from "./EventCardComponent";


function EventsPage() {
  return (
    <div>
        <div>
            

<ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
    <li class="me-2">
        <span  className="inline-block p-4  hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Profile</span>
    </li>
    <li class="me-2">
        <span  className="inline-block p-4  hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Dashboard</span>
    </li>
    <li class="me-2">
        <span  className="inline-block p-4  hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Settings</span>
    </li>
    <li class="me-2">
        <span  className="inline-block p-4  hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Contacts</span>
    </li>
</ul>

            
        </div>
        
      <div className=" grid w-full  items-center space-y-4 px-5 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3">
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
