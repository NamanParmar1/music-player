import React, { useEffect, useRef, useState } from 'react'
import "./audioplayer.css"
import Controls from './controls';
import ProgressCircle from './progresscircle'
import Waveanimation from './waveanimation';

export default function Audioplayer({ currentTrack , currentIndex, setcurrentIndex,total}) {
  //console.log(currentTrack?.album);

  const [isPlaying, setIsPlaying] = useState(true);
  const [trackProgress, setTrackProgress] = useState(0);
  var audioSrc = total[currentIndex]?.track.preview_url;

  const audioRef = useRef(new Audio(total[currentIndex]?.track.preview_url));
 // audioRef.current.play();

  const intervalRef = useRef();

  const isReady = useRef(false);

  const{duration }  = audioRef.current;

  const currentPct = duration ? (trackProgress/duration) *100 :0;

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if(audioRef.current.ended){
        handleNext();
      }else{
        setTrackProgress(audioRef.current.currentTime);
      }
    },[1000]);
  };



  useEffect (() => {
    if(audioRef.current.src){
      if(isPlaying){
        //audioRef.current = new Audio(audioSrc);
        audioRef.current.play();
        startTimer();
      }else{
        //clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }else{
      if(isPlaying){
        audioRef.current = new Audio(audioSrc);
        audioRef.current.play();
        startTimer();
      }else{
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }

    }
  },[isPlaying]);

  useEffect(()=>{
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);

    setTrackProgress(audioRef.current.currentTime);

    if(isReady.current){
      audioRef.current.play();
      setIsPlaying(true);
      startTimer()

    }else{
      isReady.current = true;
    }
  },[currentIndex]);



  useEffect(() =>{

    return() => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };

  },[]);


  const handleNext = () => {
    if(currentIndex<total.length-1){
      setcurrentIndex(currentIndex+1);
    }else{
      setcurrentIndex(0);
    }
    
  };

  const handlePrev = () => {
    if(currentIndex>0){
      setcurrentIndex(currentIndex-1);
    }else{
      setcurrentIndex(total.length-1);
    }
  }

  const addzero =(n) =>{
    if(n<10){
      return "0"+n;
    }else{
      return n;
    }
  }











  const artists = [];
  currentTrack?.album?.artists.forEach((artist) => {
    artists.push(artist.name);

  });

  return (
    <div className='player-body flex'>
      <div className='player-body-left'>
        <ProgressCircle
          percentage={currentPct} isPlaying={isPlaying}
          image1={currentTrack?.album?.images[0]?.url}
          size={280} color="#E99072"
        />
      </div>
      <div className='player-body-right flex'>

        <p className='song-title'>{currentTrack?.name} </p>
        <p className='song-artist'>{artists.join(",")}</p>
        <div className="player-right-bottom flex">
          <div className='song-duration flex'>
            <p className='duration'>0:{addzero(Math.round(trackProgress))} </p>
            <Waveanimation  isPlaying={isPlaying}/>
            <p className='duration'> 0:30</p>

          </div>
          <Controls
            isPlaying ={isPlaying}
            setIsPlaying ={setIsPlaying}
            handleNext ={handleNext}
            handlePrev ={handlePrev}
            total={total}
          />

        </div>
      </div>

    </div>
  );
}
