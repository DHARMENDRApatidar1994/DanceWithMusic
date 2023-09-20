import axios from "axios";
import React, { useEffect, useState } from "react";
// import { bhopal } from './Bhopaldata';
import { useNavigate } from "react-router-dom";

const Bhopaal = () => {
  const navigate = useNavigate();
  const [bhopal, setBhopal] = useState({
    startData: "",
    name: "",
    location: "",
    image: ""
  });

  const fetchBhopalEvent = async () => {
    try {
      const response = await axios.get(
        "https://singer.boostupdigital.in/api/event/getBhopalEvent"
      );
      console.log(response.data);
      if (response.data) {
        setBhopal(response.data);
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
      { bhopal?.name!="" && <div className="boxs1img">
        <div className="overlayimg">
          <img
            src={`https://singer.boostupdigital.in/api/uploads/${bhopal.image}`}
            alt=""
            data-aos="zoom-out"
          />
          <button
            onClick={() => {
              // console.log("hello", index);

              navigate(`/Bhopal`);
            }}
          >
            View More
          </button>
        </div>
        <div className="boxs1info">
          <div>
            <h2>{bhopal.startDate}</h2>
          </div>
          <div className="boxs1infoname">
            <h1>{bhopal.name}</h1>
            <h6>{bhopal.location}</h6>
          </div>
          <button
            onClick={() => {
              // console.log("hello", index);

              navigate("/Detailform/getBhopalEvent");
            }}
          >
            BUY TICKET
          </button>
        </div>
      </div> }
    </div>
  );
};

export default Bhopaal;
