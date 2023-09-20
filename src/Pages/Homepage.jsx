import React from "react";
import Slider1 from "../component/Slider1";
import Biomusic from "../component/Biomusic";
import Events from "../component/Events";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import Slider2 from "../component/Slider2";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Slider1 />
      <Events />
      <Biomusic />
      <Slider2 />
      <Footer />
    </div>
  );
};

export default Homepage;
