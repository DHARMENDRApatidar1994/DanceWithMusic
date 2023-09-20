import React, { useEffect } from "react";
import { event } from "./Eventdata";
import "./Events.css";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import { bhopal } from "./Bhopaldata";
import { groove } from "./Groovedata";
import Salsa from "./Salsa";
import Bhopaal from "./Bhopaal";
import Groov from "./Groov";

const Event = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="py-5">
      <h1 className="mt-5 py-3 text-center">UPCOMING EVENT</h1>
      <div className="boxs1">
        <Salsa />
        <Bhopaal />
        <Groov />
      </div>
    </div>
  );
};

export default Event;
