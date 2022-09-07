import React, { useState } from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupIcon from "@mui/icons-material/Group";

const Service = (props) => {
  // TODO: use the right icons or each service.

  return (
    <div>
      <div className="max-w-[1440px] w-full mx-auto py-10 px-10 flex-col justify-between text-center md:flex-row relative">
        {/* property-card-container */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 py-10">
          <div>
            {/* section label */}
            <div className="p-6 md:text-left md:mt-[10%]">
              <h3 className="text-purple-700 "> {props.label} </h3>
              <h2 className="md:max-w-[70%]">{props.header}</h2>
              <h5 className="pt-4 "> {props.text} </h5>
            </div>
          </div>
          <div className="md:ml-8 grid grid-cols-2 gap-4 md:gap-x-8 text-left">
            <div className="p-4 md:p-8 rounded-[25px] rounded-tr-none bg-zinc-800 hover:border hover:border-zinc-300 duration-500">
              <ApartmentIcon className="bigIcon"></ApartmentIcon>
              <h4>Buy Property</h4>
              <p>
                With our vast search tool, you can find your dream home from
                anywhere in the world.
              </p>
            </div>

            <div className="p-4 md:p-8  rounded-[25px] rounded-tr-none bg-zinc-800 hover:border hover:border-zinc-300 duration-500">
              <ApartmentIcon className="bigIcon"></ApartmentIcon>
              <h4>Sell Property</h4>
              <p>
                With our vast search tool, you can find your dream home from
                anywhere in the world.
              </p>
            </div>

            <div className="p-4 md:p-8  rounded-[25px] rounded-tr-none bg-zinc-800 hover:border hover:border-zinc-300 duration-500">
              <ApartmentIcon className="bigIcon"></ApartmentIcon>
              <h4>Rent Property</h4>
              <p>
                With our vast search tool, you can find your dream home from
                anywhere in the world.
              </p>
            </div>

            <div className="p-4 md:p-8  rounded-[25px] rounded-tr-none bg-zinc-800 hover:border hover:border-zinc-300 duration-500">
              <GroupIcon className="bigIcon"></GroupIcon>
              <h4>Property Agent</h4>
              <p>
                With our vast search tool, you can find your dream home from
                anywhere in the world.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full pt-4 pb-8 items-center md:absolute top-[71%] left-[-41%]">
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
