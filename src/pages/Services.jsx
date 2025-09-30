import React from "react";
import service from "../assets/service.jpg";

import Bennersec from "../components/BennerSec";
import Servicessec from "../components/ServiceSec";

export default function Services() {
  return (
    <div>
      <Bennersec title="Services" subtitle="Services" bgImage={service} />
      <Servicessec />
    </div>
  );
}
