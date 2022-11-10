import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import Sidebarbutton from './Sidebarbutton'
import { MdFavorite} from "react-icons/md"
import { FaGripfire,FaPlay, FaSignOutAlt} from "react-icons/fa"
import { IoLibrary} from "react-icons/io5"
import { MdSpaceDashboard} from "react-icons/md"
import apiClient from '../../spotify'
export default function Sidebar() {
  const[image,setImage] = useState(
    "https://www.kindpng.com/picc/m/187-1875293_coolcat-best-pictures-for-profile-hd-png-download.png" 
  );

  useEffect(() => {
    apiClient.get("me").then(response =>{
    //console.log(response);
    //setImage(response.data.images[0].url);
  })

  },[]);



  return (
    <div className="sidebar-container">
        <img src = {image}
        className="profile-image" 
        alt="profile" />
        <div>
            <Sidebarbutton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
            <Sidebarbutton title="Trending" to="/trending" icon={<FaGripfire/>}/>
            <Sidebarbutton title="Player" to="/player" icon={<FaPlay/>}/>
            <Sidebarbutton title="Favorites" to="/favorites" icon={<MdFavorite/>}/>
            <Sidebarbutton title="Library" to="/" icon={<IoLibrary/>}/>
        </div>
        <Sidebarbutton title="Sign Out" to="/signout" icon={<FaSignOutAlt/>}/>
    
    </div>
  )
}
