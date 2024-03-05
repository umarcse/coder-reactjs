import React from "react";
import Header from "./components/Header/Header";
import Body from "./components/Content/Body";
import bodycontent from "./data/data";
import Playbutton from "./components/Playbutton";
const App = () => {
 

  return (
    <>
      <Header />
      {
        bodycontent.map(({name,image},id)=><Body key={id} name={name} img={image}/>)
      }
      <Playbutton msg="message for play"> Play </Playbutton>
      <Playbutton name="Pause" msg="message for pause"> Pause</Playbutton>
    </>
  );
};

export default App;
