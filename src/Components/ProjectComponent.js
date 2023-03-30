import React, { useState } from 'react'

export default function (props) {
  
  return (
    <div className='my-4 '>
    <div className='w-96 h-60 m-12  max-md:mx-0 max-sm:w-80 max-sm:h-52 my-8 mb-5 p-4 pb-3 bg-stone-600 rounded-xl flex items-end justify-around drop-shadow-xl hover:drop-shadow-2xl' style={{ backgroundImage:`url(${props.projectImg})`, backgroundSize:"contain",backgroundRepeat:"no-repeat" }}>
    <a className='w-28 h-8 -mb-1 flex items-center justify-center bg-cyan-500 hover:bg-cyan-400 cursor-pointer rounded-xl' href={props.liveDemo} target="_blank"><span>Live Demo</span></a>
    <a className='w-28 h-8 -mb-1 flex items-center justify-center bg-amber-400 hover:bg-amber-300 cursor-pointer rounded-xl' href={props.sourceCode} target="_blank"><span>Source Code</span></a>
</div>
<p className='text-center text-xl text-white'>{props.projectName}</p>
</div>
  )
}
