import React from "react";
import service from "../assets/service.jpg";

import Bennersec from "../components/BennerSec";
import AboutSec from "../components/AboutSec";

const About = () => {
  return (
    <div>
      <Bennersec title="About Us" subtitle="About" bgImage={service} />
      <AboutSec />
    </div>
  );
};

export default About;
