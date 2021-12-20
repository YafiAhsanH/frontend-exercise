import { useState } from "react";
import { filters } from "../data/variables";
import React from 'react';

const GenreFilter = () => {
  const genrefilters = [{ id: "0", name: "All" }, ...filters];
  const [selected, setSelected] = useState("0");

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const filter: HTMLElement | null = document.getElementById("filter");
    if(filter){
        const containerScrollPosition = filter.scrollLeft;
        filter.scrollTo({
          top: 0,
          left: containerScrollPosition + e.deltaY,
          behavior: "smooth"
        });
    }
  };

  return (
    <div id="filter" onWheel={onWheel} className="transition-all duration-100 py-3 px-5 mr-[16%] bg-youtube-black-secondary border-y-[1px] border-youtube-highlight-grey flex gap-x-3 overflow-x-scroll scrollbar-hide">
      {genrefilters.map((filter, i) => (
        <div
          key={i}
          className={`${
            selected === filter.id
              ? "bg-white"
              : "bg-youtube-highlight-grey border-[rgb(90,90,90)] hover:bg-[rgb(75,75,75)] text-white"
          } whitespace-nowrap transition duration-200  cursor-pointer text-sm pt-1.5 pb-1 px-3.5 rounded-full border-[1px] `}
          onClick={() => setSelected(filter.id)}
        >
          <p>{filter.name}</p>
        </div>
      ))}
    </div>
  );
};

export default GenreFilter;
