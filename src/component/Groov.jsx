import axios from "axios";
import React, { useEffect, useState } from "react";
// import { groove } from './Groovedata';
import { useNavigate } from "react-router-dom";

const Groov = () => {
  const navigate = useNavigate();

  const [groove, setGroove] = useState({
    startData: "",
    name: "",
    location: "",
    image: "",
  });

  const fetchBhopalEvent = async () => {
    try {
      const response = await axios.get(
        "https://singer.boostupdigital.in/api/event/getGrooveEvent"
      );
      console.log(response.data);
      if (response.data) {
        setGroove(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBhopalEvent();
  }, []);

  return (
    <div>
      {" "}
      { groove.name!=="" && <div className="boxs1img">
        <div className="overlayimg">
          <img
            src={
              groove.image == ""
                ? ""
                : `https://singer.boostupdigital.in/api/uploads/${groove.image}`
            }
            alt=""
            data-aos="zoom-out"
          />
          <button
            onClick={() => {
              // console.log("hello", index);

              navigate(`/salsa`);
            }}
          >
            View More
          </button>
        </div>
        <div className="boxs1info">
          <div>
            <h2>{groove.startDate}</h2>
          </div>
          <div className="boxs1infoname">
            <h1>{groove.name}</h1>
            <h6>{groove.location}</h6>
          </div>
          <button
            onClick={() => {
              // console.log("hello", index);

              navigate("/Detailform/getGrooveEvent");
            }}
          >
            BUY TICKET
          </button>
        </div>
      </div> }
    </div>
  );
};

export default Groov;
