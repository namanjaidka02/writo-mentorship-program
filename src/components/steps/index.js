import React from "react";
import "./index.css";

const GettingStarted = (props) => {
  return (
    <div className="flex xxs:mb-[2rem] lg:mb-[5rem] font-raleway relative xxs:flex-col lg:mx-2 pt-6 pb-9 px-5 bg-opacity-10 step-shadow  hover:bg-opacity-10 rounded-[30px] min-w-[32%] min-h-min bg-webGreen my-[1rem]">
      <h3 className="border-hidden rounded-[100px] mb-5 bg-webGreen bg-opacity-70 text-3xl text-white font-semibold w-[60px] h-[60px] flex justify-center items-center p-3  ">
        {props.number}
      </h3>
      <p className="xs:text-2xl tracking-wide">{props.description}</p>
      {/* <button className="absolute xxs:text-sm md:text-base font-semibold  xxs:right-1 bottom-1 p-3 border-none border-2 mb-5 text-xl hover:text-webGreen">
        {props.btn}
      </button> */}
    </div>
  );
};

export default GettingStarted;
