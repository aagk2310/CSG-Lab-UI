import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import TwitterTimeline from "./TwitterTimeline";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Knowmore() {
  return (
    <div
      className="container d-flex flex-column justify-content-between"
      style={{
        height: "100vh",
        backgroundColor: "rgba(78,79,235,0.8)",
        color: "white",
      }}
    >
      <div className="row d-flex justify-content-center gx-5">
        <div
          className="col-12"
          style={{
            marginTop: "5%",
            textAlign: "center",
            width: "100%",
            fontFamily: "Montserrat",
            fontWeight: "500",
            letterSpacing: ".9rem",
            fontSize: "1.3rem",
          }}
        >
          KNOW MORE ABOUT US
        </div>
      </div>
      <div className="row  d-flex flex-column justify-content-center">
        <TwitterTimeline />
        <FontAwesomeIcon
          // className="align-self-center"
          icon={faXTwitter}
          style={{ color: "#ffffff", width: "6%", height: "6%" }}
        />
      </div>
    </div>
  );
}
