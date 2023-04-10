import React from 'react'
import hc from '../Image/logo/hc.png'
import b from '../Image/logo/b.png'
import js from '../Image/logo/js.png'
import njs from '../Image/logo/node-js.webp'
import r from '../Image/logo/r.png'
import t from '../Image/logo/tw.png'
import g from '../Image/logo/g.png'
import sass from '../Image/logo/sass.png'
import jq from '../Image/logo/jq.png'

export default function About() {
  return (
    <div className='h-screen bg-slate-600 flex justify-center items-center' id='about'>
      <div className='bg-neutral-200 w-4/5 h-max rounded-2xl drop-shadow-xl flex flex-col justify-center items-center'>
      <div className='bg-neutral-100 rounded-xl drop-shadow-xl p-4 w-1/2 text-center max-md:h-1/2 max-md:w-full'>
        <h2 className='text-5xl my-3'>About me</h2>
        <p>Innovative, task driven professional in web design and development. Proficient in developing web pages, creating user interfaces, writing and testing codes, troubleshooting simple/complex issues and implementing new features.</p>
        <p>Technical Skills - React Js, Java Script, jQuery, Html, Css, Sass, Jsx, Bootstrap, Tailwind, Figma</p>
      </div>
        <div className='flex justify-center items-center flex-wrap h-56 max-md:py-4'>
        <img className='w-24 max-md:w-16 m-2 animate-spin' src={r}></img>
        <img className='w-24 max-md:w-16 m-2 animate-pulse' src={b}></img>
        <img className='w-24 max-md:w-16 m-2 animate-bounce' src={hc}></img>
        <img className='w-24 max-md:w-16 m-2 animate-bounce' src={js}></img>
        <img className='w-24 max-md:w-16 m-2 animate-bounce' src={njs}></img>
        <img className='w-24 max-md:w-16 m-2 animate-pulse' src={t}></img>
        <img className='w-24 max-md:w-16 m-2 animate-pulse' src={g}></img>
        <img className='w-24 max-md:w-16 m-2 animate-pulse' src={sass}></img>
        <img className='w-24 max-md:w-16 m-2 animate-bounce' src={jq}></img>
        </div>
      </div>
    </div>
  )
}
