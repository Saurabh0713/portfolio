import React from 'react'
import ProjectComponent from './ProjectComponent'
import {MyProjectsArray} from '.././ProjectDetails'
import textutils from '../Image/textutils.jpg'
import game from '../Image/game.jpg'
import login from '../Image/login.jpg'
import netflix from '../Image/netflix.jpg'
import playstation from '../Image/playstation.jpg'
import softdrinks from '../Image/softdrinks2.jpg'
import spotify from '../Image/spotify.jpg'
import youtube from '../Image/youtube.jpg'
import ecom from '../Image/ecomm.jpg'
import tic from '../Image/tic.jpg'
import cal from '../Image/calculator.jpg'
import clock from '../Image/clock.jpg'
import weather from '../Image/weather.jpg'

export default function MyProjects() {
  return (
    <div className='h-max flex justify-center items-center bg-gradient-to-b from-stone-400 to-stone-200' id='myProjects'>
        <div className='container my-10 h-max max-md:rounded bg-zinc-800 drop-shadow-xl rounded-xl'>
            <h3 className='text-center my-4 text-4xl text-neutral-100'>My Projects</h3>
            <div className='flex flex-wrap justify-center items-center w-full bg-gradient-to-r from-blue-700 to-gray-900 pb-4 rounded-b-xl'>
              
            <ProjectComponent projectName={MyProjectsArray[10].projectName} projectImg={weather} liveDemo={MyProjectsArray[10].liveLink} sourceCode={MyProjectsArray[10].sourceCode}/>
            <ProjectComponent projectName={MyProjectsArray[8].projectName} projectImg={ecom} liveDemo={MyProjectsArray[8].liveLink} sourceCode={MyProjectsArray[8].sourceCode}/>
            <ProjectComponent projectName={MyProjectsArray[4].projectName} projectImg={playstation} liveDemo={MyProjectsArray[4].liveLink} sourceCode={MyProjectsArray[4].sourceCode}/>
            <ProjectComponent projectName={MyProjectsArray[11].projectName} projectImg={cal} liveDemo={MyProjectsArray[11].liveLink} sourceCode={MyProjectsArray[11].sourceCode}/>
            <ProjectComponent projectName={MyProjectsArray[5].projectName} projectImg={youtube} liveDemo={MyProjectsArray[5].liveLink} sourceCode={MyProjectsArray[5].sourceCode}/>
            <ProjectComponent projectName={MyProjectsArray[12].projectName} projectImg={clock} liveDemo={MyProjectsArray[12].liveLink} sourceCode={MyProjectsArray[12].sourceCode}/>
            <ProjectComponent projectName={MyProjectsArray[0].projectName} projectImg={textutils} liveDemo={MyProjectsArray[0].liveLink} sourceCode={MyProjectsArray[0].sourceCode}/>
            <ProjectComponent projectName={MyProjectsArray[1].projectName} projectImg={softdrinks} liveDemo={MyProjectsArray[1].liveLink} sourceCode={MyProjectsArray[1].sourceCode}/>
            <ProjectComponent projectName={MyProjectsArray[2].projectName} projectImg={login} liveDemo={MyProjectsArray[2].liveLink} sourceCode={MyProjectsArray[2].sourceCode}/>
            <ProjectComponent projectName={MyProjectsArray[3].projectName} projectImg={game} liveDemo={MyProjectsArray[3].liveLink} sourceCode={MyProjectsArray[3].sourceCode}/>
            <ProjectComponent projectName={MyProjectsArray[9].projectName} projectImg={tic} liveDemo={MyProjectsArray[9].liveLink} sourceCode={MyProjectsArray[9].sourceCode}/>
            <ProjectComponent projectName={MyProjectsArray[6].projectName} projectImg={spotify} liveDemo={MyProjectsArray[6].liveLink} sourceCode={MyProjectsArray[6].sourceCode}/>
            <ProjectComponent projectName={MyProjectsArray[7].projectName} projectImg={netflix} liveDemo={MyProjectsArray[7].liveLink} sourceCode={MyProjectsArray[7].sourceCode}/>
          

                {/* {MyProjectsArray.map((item)=>(
               <ProjectComponent projectName={item.projectName} projectImg={item.projectImage} liveDemo={item.liveLink} sourceCode={item.sourceCode}/>
                ))} */}
            </div>
        </div>
    </div>
  )
}
