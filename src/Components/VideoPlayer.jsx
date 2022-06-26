import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer() {
  return (
    <div className="lg:w-3/4 md:w-full h-[720px] w-full">
      <ReactPlayer
        url={"https://youtu.be/Sgks4s7aI4o"}
        playing={true}
        loop={true}
        muted={true}
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
}

export default VideoPlayer;
