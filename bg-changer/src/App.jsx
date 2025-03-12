import { useState } from 'react'
import React from 'react'

const App = ()=>{
  const [color, setColor]= useState("#333")
  return(
    <div className='w-full h-screen duration-200' 
    style={{backgroundColor:color}}>
      
     
     
    </div>
  )
}



export default App
