import React from "react";
import Header from "./components/Header/Header";
import Body from "./components/Content/Body";
import bodycontent from "./data/data";
import Playbutton from "./components/Playbutton";
import Todo from "./components/Todo/Todo";
const App = () => {
 
  const handleClick = () =>{
      alert('okay');
  }
  return (
    <>
      <Header />
      {/* <div className="flex">
      {
        bodycontent.map(({name,image},id)=><Body key={id} name={name} img={image} > 

          <Playbutton msg="message for play" clickfunction={handleClick} > Play </Playbutton>

        </Body>)
      }
      </div> */}

      <Todo/>
      
      
    </>
  );
};

export default App;
