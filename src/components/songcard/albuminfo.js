import React from 'react'
import "./albuminfo.css"

export default function AlbumInfo({album}) {
    //console.log(album);
    const artists = [];
    album?.artists?.forEach(element=> {
        artists.push(element.name);
    });
  return (
    <div className='albumInfo-card'>
        <div className="albumName-container">
            <div className='marquee'>
                <p>{album?.name+" - "+ artists?.join(",")}</p>
            </div>
        </div>
        <div className="albumInfo">
            <p> {`${album?.name} is an ${album?.album_type} by ${artists?.join(",")} with ${album?.total_tracks} tracks(s)`}</p>
        </div>
        <div className="album-relese">
            <p>Relese Date: {album?.release_date}</p>
        </div>     
    </div>
  )
}
