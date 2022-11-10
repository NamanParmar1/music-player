import React from 'react'
import "./progresscircle.css"
//import vinyl from "./vinyl_PNG46.png";
//console.log(vinyl);



const Circle = ({color,percentage,size,strokeWidth}) => {
    const radius = size / 2 - 10;
    const circ = 2 * Math.PI * radius - 20;
    const strokepct = ((100 - Math.round(percentage)) * circ ) / 100;
     
    return (
        <circle 
        r ={radius}
        cx = "50%"
        cy = "50%"
        fill='#27354d'
        fill-opacity={0.4} 
        stroke = {strokepct !== circ ? color : ""}
        strokeWidth = {strokeWidth}
        strokeDasharray = {circ}
        strokeDashoffset = { percentage ? strokepct : 0}
        strokeLinecap = "round"
        ></circle>
    )
};



    export default function ProgressCircle({percentage, isPlaying,  size, color,image1}) {
        //console.log(percentage);
  
  
  
        return (
    

    <div className='progress-circle flex'>
        <svg width={size} height={size}>
            <g>
                <Circle strokeWidth={"0.4rem"} color ="#3B4F73" size = {size}/>
                <Circle strokeWidth={"0.5rem"} color ={color} percentage = {percentage} size = {size}/>
            </g>
            <defs>
                <clipPath id ="mycircle">
                    <circle r ={(size / 2)-40} cx = "50%" cy = "50%" fill='#fff'/>

                </clipPath>
                <clipPath id ="myinnercircle">
                    <circle r ={(size / 2)-80} cx = "52%" cy = "48%" fill='#fff'/>
                </clipPath>
            </defs>

            <image className={isPlaying ? "active":""} 
            x ={30} y ={30} width = {2*(size/2 -30)} height={2*(size/2 -30)} 
            // href="https://pngimg.com/uploads/vinyl/vinyl_PNG107.png"
            //href="https://pngimg.com/uploads/vinyl/vinyl_PNG46.png"
            href="https://pngimg.com/uploads/vinyl/vinyl_PNG106.png"
            
            clipPath="url(#mycircle)"
            />
            {/* /console.log(image); */}

            <image className={isPlaying ? "active":""} 
            x ={80} y ={80} width = {2*(size/2 -80)} height={2*(size/2 -80)} 
            href = {image1}
            clipPath="url(#myinnercircle)"
            />
        </svg>
    </div>
  )
}
