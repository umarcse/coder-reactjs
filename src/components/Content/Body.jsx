import React from "react";

const Body = ({name, img, children}) => {
    

  return (
    <>
      <div className="mx-2 w-[260px]   pt-2">
            
            <img src={img} alt="dummu_img" className=" rounded-sm"/> 
            <h2> My name is {name} </h2>
            <span> {children} </span>
      </div>
    </>
  );
};

export default Body;
