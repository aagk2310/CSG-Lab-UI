// TwitterTimeline.js
import React, { useEffect } from "react";
import "./TwitterTimeline.css";

const TwitterTimeline = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    script.setAttribute("charSet", "utf-8");
    document.head.appendChild(script);
  }, []);

  return (
    <div className="twitter-timeline-container">
      <a
        className="twitter-timeline"
        data-width="300"
        data-height="400"
        data-theme="light"
        href="https://twitter.com/csg_iiith?ref_src=twsrc%5Etfw"
      >
        Tweets by csg_iiith
      </a>
    </div>
  );
};

export default TwitterTimeline;
