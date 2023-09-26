 import React from 'react'
 import {IoSchoolOutline} from 'react-icons/io5'
 const Header = () => {
   return (
     <div className='w-full flex bg-black rounded-b-md sm:rounded-b-full text-white capitalize flex-col'>
        <div className='w-full text-2xl p-3 font-semibold mx-auto max-w-[900px]'>
       <div className='inline-flex gap-1 items-center'>
        <IoSchoolOutline size={30}/>
      <h1> Lite</h1>
       </div>
            </div>
     </div>
   )
 }
 
 export default Header