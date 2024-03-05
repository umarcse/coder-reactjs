import React from "react";

const Body = ({name, img}) => {
    

  return (
    <>
      <div>
            <h2> My name is {name} </h2>
            <img src={img} alt="dummu_img"/> 
      </div>
    </>
  );
};

export default Body;
