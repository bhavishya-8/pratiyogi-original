import React from "react";
import video from "../../assets/video/v1.mp4";
function VideoAdd() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', "margin":"50px" }}>
      <section style={{ marginBottom: '-50px' }}>
        <video width="700" height="400" autoPlay muted>
          <source src={video} type="video/mp4" />
        </video>
      </section>
    </div>
  );
}

export default VideoAdd;
