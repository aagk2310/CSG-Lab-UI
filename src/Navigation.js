import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Navitem.js";
import Navitem from "./Navitem.js";
import "./Navigation.css";
import { useState } from "react";
import "./Hero.js";

const navItems = [
  { key: 0, value: "Home", route: "/" },
  { key: 1, value: "Faculty", route: "/faculty" },
  { key: 2, value: "Students", route: "/students" },
  { key: 3, value: "Projects", route: "/projects" },
  { key: 4, value: "Events", route: "/events" },
  { key: 5, value: "Publications", route: "/publications" },
];
function Navbar() {
  const [state, setState] = useState(0);
  return (
    <nav
      className="navbar navbar-expand-md custom-padding"
      style={{ backgroundColor: "#474747" }}
    >
      <ul
        className="navbar-nav d-flex justify-content-between"
        style={{ width: "100%" }}
      >
        {navItems.map((item, index) => {
          return (
            <Navitem
              key={index}
              index={index}
              content={item.value}
              isactive={index == state ? true : false}
              setState={setState}
              route={item.route}
            />
          );
        })}
      </ul>
    </nav>
  );
}

export function Navigation() {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md-5 col-lg-4">
          <img
            src="./IIITH.png"
            style={{ width: "70%", aspectRatio: "auto" }}
          ></img>
        </div>
        <div className="col-12 col-md-7 col-lg-8">
          <Navbar />
        </div>
      </div>
    </div>
  );
}
