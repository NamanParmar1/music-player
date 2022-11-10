import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Audioplayer from '../../components/audioplayer/audioplayer';
import Queue from '../../components/queue/queue';
import Songcard from '../../components/songcard/songcard';
import Widgets from '../../components/widgets/widgets';
import apiClient from '../../spotify';
import "./player.css"

export default function Player() {

  const location = useLocation();

  const [tracks, setTracks] = useState([]);
  const [currentTrack, setcurrentTrack] = useState({});
  const [currentIndex, setcurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state){
      apiClient.get("playlists/"+  location.state?.id+"/tracks")
      .then((response) =>{
        //console.log(response.data)
        setTracks(response.data.items);
        setcurrentTrack(response.data.items[0].track);


      });
    }  
  }, [location.state]);

useEffect(() => {
  setcurrentTrack(tracks[currentIndex]?.track);
  
},[currentIndex, tracks]);
  


  return (
    <div className="screen-container flex">
      <div className="left-player-body">
        <Audioplayer currentTrack={currentTrack} currentIndex={currentIndex} setcurrentIndex ={ setcurrentIndex} total = {tracks}/>

        <Widgets artistID = {currentTrack?.album?.artists[0]?.id}/>


      </div>
      <div className="right-player-body">
        <Songcard  album = {currentTrack?.album}/>
        <Queue tracks = {tracks} setcurrentIndex={setcurrentIndex}/>

      </div>
    </div>
  )
}
