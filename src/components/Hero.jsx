import React from "react";
import team from "../team.json"; // Import JSON data directly

const Hero = () => {
  return (
    <div className=" flex flex-col gap-2 text-center bg-gradient-to-r from-purple-400 to-pink-300 items-center ">
      <div className="xl:bg-red-950 xl:w-full xl:m-auto xl:flex xl:flex-col ">
        {team.map((data, index) => {
          const teamType = Object.keys(data)[0];
          const members = data[teamType];
          return (
            <div className=" m-auto  sm:justify-center text-black  ">
              <h1 className=" text-xl text-white font-mono xl:bg-purple-950 ">
                {teamType || "not availablee"}
              </h1>
              {members.map((member, idx) => {
                const { profile, Name } = member;
                return (
                  <div className=" flex flex-col bg-white m-5 items-center p-4 rounded-md  xl:bg-red-900  xl:w-60 ">
                    <img
                      src={profile}
                      alt=""
                      className=" w-20 h-20 object-cover rounded-full xl:w-20 xl:rounded-full xl:h-20 xl:object-cover"
                    />
                    <h2 className="text-lg font-mono">{Name}</h2>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
