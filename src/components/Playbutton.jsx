import React, { useState } from 'react'

const Playbutton = ({msg,children,clickfunction}) => {

  const [buttonname, setbuttonname] = useState(true);

    const handleclick = (btnname)=>{
        setbuttonname((previous)=>{
            return !previous;
        });
    }
  return (
    <>
        <button onClick={()=> {handleclick(buttonname)}} className=' bg-orange-500 text-white  py-1 px-4 rounded-sm mt-2'> {buttonname?"Play": "Pause"} </button>
    </>
  )
}

export default Playbutton