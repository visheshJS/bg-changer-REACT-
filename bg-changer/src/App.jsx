import { useState } from 'react'
import React from 'react'

const App = ()=>{
  const [color, setColor]= useState("#333")

  
  return(
    <div className='w-full bg-cy bg-orange- h-screen transition duration-200' 
    style={{backgroundColor:color}}>

      <div className='flex justify-center items-center'>
        <h1 className='text-white text-7xl underline mt-30'>Background Changer</h1>
      </div>

      <div className='px-4 fixed bottom-12 inset-x-0 flex flex-wrap justify-center'>
        <div className='flex gap-3 shadow-xl flex-wrap bg-white py-3 px-3 rounded-lg'>
          <button onClick={()=>setColor("#ff6467")} className='transform active:scale-90 transition duration-150 outline-none shadow-lg rounded-xl py-1 cursor-pointer px-4'
           style={{backgroundColor:"#ff6467"}}>Red</button>
          <button onClick={()=>setColor("#05df72")} className='transform active:scale-90 transition duration-150 outline-none shadow-lg rounded-xl py-1 cursor-pointer px-4'
           style={{backgroundColor:"#05df72"}}>Green</button>
          <button onClick={()=>setColor("#fb64b6")} className='transform active:scale-90 transition duration-150 outline-none shadow-lg rounded-xl py-1 cursor-pointer px-4'
           style={{backgroundColor:"#fb64b6"}}>Pink</button>
          <button onClick={()=>setColor("#53eafd")} className='transform active:scale-90 transition duration-150 outline-none shadow-lg rounded-xl py-1 cursor-pointer px-4'
           style={{backgroundColor:"#53eafd"}}>Cyan</button>
          <button onClick={()=>setColor("#ffb86a")} className='transform active:scale-90 transition duration-150 outline-none shadow-lg rounded-xl py-1 cursor-pointer px-4'
           style={{backgroundColor:"#ffb86a"}}>Orange</button>
          
        </div>
      </div>
      
     
     
    </div>
  )
}



export default App
