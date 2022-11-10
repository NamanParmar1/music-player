import React from 'react'
import "./queue.css"

export default function Queue({tracks , setcurrentIndex}) {
  return (
    <div className='queue-container flex'>
        <div className='queue flex'>
            <p className='upnext'>Up Next </p>
            <div className='queue-list'>
                {tracks?.map((track,index) =>(
                    <div className='queue-item flex' 
                    onClick={()=>setcurrentIndex(index)}>
                        <p className='track-name'>{track?.track?.name}</p>
                        <p>0:30</p>
                    </div>
                ))}
            </div>

        </div>

    </div>
  )
}
