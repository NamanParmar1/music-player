import React from 'react'
import "./albumimage.css"

export default function AlbumImage({url}) {
  return (
    <div className="albumImage flex">
        <div className='albumImage-shadow'>
            <img src={url} alt="shadow" className='albumImage-shadow'/>
        </div>
        <img src={url}  alt="album art"  className='albumImage-art'/>
        
    </div> 
  );
}
