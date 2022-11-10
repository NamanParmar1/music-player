import React from 'react'
import AlbumImage from './albumimage'
import AlbumInfo from './albuminfo'
import "./songcard.css"

export default function Songcard({album}) {

    //console.log(album);
  return (
    <div className='songcard-body flex'>
        <AlbumImage url ={album?.images[0]?.url}/>
        <AlbumInfo  album={album}/>
    </div>
  )
}
