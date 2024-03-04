import React from 'react'

const Header = () => {
  return (
    <>
        <nav className='flex justify-between h-12  border-b items-center'>
            <div className=" w-1/5 text-center uppercase">umarcse</div>
            <div className='flex w-3/5 justify-end'>
                <ul className='flex'>
                    <li className='px-2'> <a href="#"> Home </a> </li>
                    <li className='px-2'> <a href="#">About Us</a> </li>
                    <li className='px-2'> <a href="#">Gallery</a> </li>
                    <li className='px-2'> <a href="#">Resource</a> </li>
                    
                </ul>
                <button className='border rounded-sm border-slate-300 px-3 mx-6 py-[2px]'> Sign In </button>
            </div>
        </nav>
    </>
  )
}

export default Header