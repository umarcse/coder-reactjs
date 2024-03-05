import React from 'react'

const Playbutton = ({msg,children}) => {

    
  return (
    <>
        <button onClick={()=>{console.log(msg)}} className=' bg-orange-500 text-white mx-4 py-1 px-4 rounded-sm mt-2'> {children} </button>
    </>
  )
}

export default Playbutton