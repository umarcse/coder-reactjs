import React, { useState } from 'react'


const Addmovie = ({setmoviefun}) => {
    const [title, setTitle] = useState('');
    const handelclick = ()=>{
        
        setmoviefun({

            title:title,
            backdrop_path: "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
            release_date : "2023-23-04",
            vote_count : "3323",
        });
        setTitle("");
        
    }
  return (
    <>
        <div className='p-2'>
            <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} className='outline-none border border-gray-300 rounded-sm p-1' placeholder='Add Title'/>
            <button onClick={handelclick} className=' bg-amber-600 text-white p-1 rounded-sm mx-2' > Add Movie </button>
        </div>
    </>
  )
}

export default Addmovie