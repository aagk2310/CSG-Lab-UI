import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Publications from "./Publications";
import Projects from "./Projects";
import Home from "./Home";
import { Navigation } from "./Navigation";
import Faculty from "./Faculty";
import MainWebpage from "./MainWebpage";
export function Footer() {
  return (
    <div className="container">
      <div
        className="row d-flex justify-content-between align-items-center"
        style={{
          height: "10vh",
          backgroundColor: "#474747",
          color: "white",
          fontFamily: "Inter",
          fontWeight: "400",
          fontSize: "0.8rem",
        }}
      >
        <div style={{ marginLeft: "3%" }}>
          &copy; 2018 Computer Systems Group (CSG), IIIT Hyderabad
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="auth-wrapper">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/faculty" element={<Faculty />} />
          <Route exact path="/students" element={<MainWebpage />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
