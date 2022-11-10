import React from 'react'
import "./controls.css"
import { IconContext } from 'react-icons'
import { IoPlay, IoPlaySkipBack, IoPlaySkipForward } from 'react-icons/io5';
import { FaPause } from 'react-icons/fa';

export default function Controls({isPlaying, setIsPlaying,handleNext,handlePrev}) {
  
  
    return ( <IconContext.Provider value={{size:"35px", color: "#C4D0E3"}}>
        <div className='controls-wrapper flex'>
            <div className = "action-btn flex" onClick={handlePrev}>
                <IoPlaySkipBack/>
            </div>
            <div className={isPlaying?'play-pause flex active': 'play-pause flex'} onClick={() => setIsPlaying(!isPlaying)}>
                {!isPlaying? <IoPlay />: <FaPause />}

            </div>
            <div className = "action-btn flex" onClick={handleNext}>
                <IoPlaySkipForward/>
            </div>

        </div>
    </IconContext.Provider>
        
        

    );
    
}
