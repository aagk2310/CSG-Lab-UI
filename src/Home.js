import "./App.css";
import { Navigation } from "./Navigation.js";
import Hero from "./Hero.js";

import { Aboutus } from "./Aboutus.js";
import Research from "./Research.js";
import Knowmore from "./Knowmore";
import { Footer } from "./App";

function Home() {
  return (
    <div className="App">
      <Hero />
      <Aboutus />
      <Research />
      <Knowmore />
      <Footer />
    </div>
  );
}

export default Home;
