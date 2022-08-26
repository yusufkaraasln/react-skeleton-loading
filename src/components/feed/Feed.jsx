import React, { useEffect } from "react";
import Post from "../post/Post";
import Skeleton from "../skeleton/Skeleton";
import "./feed.scss";

function Feed() {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="feed">
      {isLoading ? (
        <Skeleton type="feed" />
      ) : (
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
          return <Post key={index} />;
        })
      )}
    </div>
  );
}

export default Feed;
