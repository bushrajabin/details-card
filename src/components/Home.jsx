import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const clickHere = () => {
    navigate("/hero");
  };
  return (
    <div className="bg-white flex flex-row justify-center items-center m-auto text-center h-screen w-screen xl:h-screen xl:flex xl:flex-row xl:text-center xl:justify-center xl:m-auto xl:items-center">
      <button
        onClick={clickHere}
        className=" font-mono  bg-red-100 w-40 p-3 rounded-xl "
      >
        Click Here!
      </button>
    </div>
  );
}

export default Home;
