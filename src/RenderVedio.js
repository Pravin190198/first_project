import React from 'react';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';
import "./RenderVideo.css";



const RenderVedio = ({view}) => {
    const {text, play,description}=view;
  return (
    <div className='front'>
        <div className='video'>
        <ShakaPlayer src={play}/>
        </div>
        <div className='content'>
        <h2>{text}</h2>
        <p>{description}</p>
        </div>  
    </div>
  )
}

export default RenderVedio