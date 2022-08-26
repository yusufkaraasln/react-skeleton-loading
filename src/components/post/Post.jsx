import React from "react";
import "./post.scss";
function Post() {
  return (
    <div className="post">
      <div className="postTop">
        <img
          src="https://i0.shbdn.com/photos/36/93/04/x5_10353693040ft.jpg"
          alt=""
        />
        <span className="duration">5.24</span>
      </div>
      <div className="postBottom">
        <div className="postBottomImg">
          <img
            src="https://yt3.ggpht.com/yti/AJo0G0ndf-o7Q03FoWBOo8UnNLZzVeuHGsRDjWKv0IQqjQ=s88-c-k-c0x00ffffff-no-rj-mo"
            alt=""
          />

        </div>
        <div className="postBottomInfo">
            <span className="postBottomInfoTitle">
                How to make a website using ReactJS
            </span>
            <span className="postBottomInfoUser">
                Yusuf Karaaslan
            </span>
            <span className="postBottomInfoDesc">
                1.2M views . 2 days ago
            </span>

            </div>
      </div>
    </div>
  );
}

export default Post;
