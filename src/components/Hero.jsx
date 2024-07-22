import React from "react";
import team from "../team.json";

const Hero = () => {
  return (
    <div className=" ">
      <div className="  bg-gradient-to-r from-purple-400 to-pink-300 xl:flex xl:flex-col xl:w-full xl:p-10 ">
        {team.map((data, index) => {
          const teamType = Object.keys(data)[0];
          const members = data[teamType];
          return (
            <div className="  text-center xl:flex xl:flex-row xl:flex-wrap xl:justify-center xl:m-auto xl:w-7/12 ">
              <div className="xl:flex xl:flex-row xl:justify-center xl:w-full xl:p-4">
                <h1 className=" text-xl text-white font-mono xl:text-center ">
                  {teamType || "not availablee"}
                </h1>
              </div>

              {/* <div className="xl:bg-yellow-500 xl:flex xl:flex-row xl:overflow-x-scroll xl:w-9/12 "> */}
                {members.map((member, idx) => {
                  const { profile, Name } = member;

                  return (
                  
                      <div className=" flex flex-col bg-white  items-center m-2 p-4 xl:m-1 xl:p-3 rounded-md  xl:w-52  ">
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
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
