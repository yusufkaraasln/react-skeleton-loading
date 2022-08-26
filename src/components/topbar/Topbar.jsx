import React from "react";
import "./topbar.scss";
import {
  YouTube,
  Mic,
  Search,
  VideoCall,
  Apps,
  Notifications,
} from "@mui/icons-material";
import Skeleton from "../skeleton/Skeleton";
function Topbar(props) {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <YouTube  className="icon" />
          <span className="logo">YouTube</span>
        </div>
        <div className="topCenter">
          <div className="searchbar">
            <input placeholder="Search" className="searchInput" />
            <button className="searchButton"><Search/></button>
          </div>
            <Mic className="mic"/>
        </div>

        <div className="topRight">
          <div className="topbarIconContainer">
            <VideoCall  className="topbarIcon"/>
            <Apps className="topbarIcon"/>
            <Notifications className="topbarIcon"/>
            {
              props.isLoading ? (
                <Skeleton type="menu"/>
              ) : (
            <img src="https://yt3.ggpht.com/yti/AJo0G0ndf-o7Q03FoWBOo8UnNLZzVeuHGsRDjWKv0IQqjQ=s108-c-k-c0x00ffffff-no-rj" alt="" />)
  
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
