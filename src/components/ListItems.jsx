import React from "react";
import '../index.css'

function ListItems() {
  const categories = [
    "All",
    "Music",
    "React routers",
    "Computer programming",
    "Reverbration",
    "Movie musicals",
    "Indian Dramas",
    "News",
    "Mixes",
    "Trailers",
    "Web Series",
    "Albums",
    "Mandopop music",
    "Satire",
    "Soul Music",
    "Live",
    "Watched",
    "Recently uploded",
    "New to you",
  ];
  return (
    <div className="overflow-x-auto no-scrollbar flex px-4">
      <div className="flex space-x-4 w-max px-4 py-2">
        {categories.map((category) => {
        return (
          <div
            key={category}
            className="mb-4 cursor-pointer flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-700 "
          >
            {category}
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default ListItems;
