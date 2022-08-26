import React from "react";
import "./skeleton.scss";
export default function Skeleton({ type }) {
  const repeat = 8;

  const FeedSkeleton = () => {
    return (
      <div className="sk-post">
        <div className="sk-post-img"></div>
        <div className="sk-post-info">
          <div className="sk-post-profile"></div>
          <div className="sk-post-details">
            <div className="sk-post-title"></div>
            <div className="sk-post-desc"></div>
          </div>
        </div>
      </div>
    );
  };

  const CircleSkeleton = () => {
    return <div className="sk-menu"></div>;
  };

  if (type === "feed") return Array(repeat).fill(<FeedSkeleton />);
  if (type === "menu") return <CircleSkeleton />
   
}
