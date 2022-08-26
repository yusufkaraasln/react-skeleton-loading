import React from "react";
import "./sidebar.scss";
import {
  Explore,
  Home,
  Subscriptions,
  VideoLibrary,
  Menu,
} from "@mui/icons-material";
import Skeleton from "../skeleton/Skeleton";
function Sidebar({ isLoading }) {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Menu className="sidebarIcon" />
          </li>
          <li className="sidebarListItem">
            {isLoading ? (
              <Skeleton type="menu" />
            ) : (
              <>
                <Home className="sidebarIcon" />
                <span className="sidebarListItemText">Home</span>
              </>
            )}
          </li>
          <li className="sidebarListItem">
            {isLoading ? (
              <Skeleton type="menu" />
            ) : (
              <>
                <Explore className="sidebarIcon" />
                <span className="sidebarListItemText">Explore</span>
              </>
            )}
          </li>
          <li className="sidebarListItem">
            {isLoading ? (
              <Skeleton type="menu" />
            ) : (
              <>
                <Subscriptions className="sidebarIcon" />
                <span className="sidebarListItemText">Subscription</span>
              </>
            )}
          </li>
          <li className="sidebarListItem">
            {isLoading ? (
              <Skeleton type="menu" />
            ) : (
              <>
                <VideoLibrary className="sidebarIcon" />
                <span className="sidebarListItemText">Library</span>
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
