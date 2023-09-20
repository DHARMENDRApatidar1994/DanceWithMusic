import React, { useEffect, useRef, useState } from "react";
import "./Eventdetail.css";
// import { event } from './Eventdata';
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import map from '../assets/map.jpeg'
// import { bhopal } from './Bhopaldata';

const Bhopal = () => {
  const navigate = useNavigate();
  const myref = useRef();
  const main = useRef();

  function my() {
    main.current.style.transitionDuration = "3s";
    main.current.style.marginTop = "40vmax";
    // main.current.style.marginBottom = '10vmax'
    // main.current.style.filter = 'opacity(100%)'
    myref.current.style.transitionDelay = "3s";
    myref.current.style.transitionDuration = "2s";
    myref.current.style.transform = "rotateY(180deg)";
  }

  const [bhopal, setBhopal] = useState({
    startData: "",
    title: "",
    location: "",
    image: "",
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
      <Navbar />
      <div className="event1">
        <div className="bgimage">
        <div onLoad={my} ref={myref} className="perfomer">
            {bhopal?.images &&
              bhopal.images.map((img, index) => (
                <img key={index} src={`https://singer.boostupdigital.in/api/uploads/${img}`} alt="" />
              ))}
          </div>
        </div>
        <h1
          style={{ position: "absolute" }}
          onLoad={my}
          ref={main}
          className="event"
        >
          {bhopal.name}
        </h1>

        <div className="about">
          <h1 style={{ marginTop: "150px" }}>About Event</h1>
          <h3>{bhopal.description}</h3>
          <p>{bhopal.fullDescription}</p>
        </div>
        <div className="event1-2-1">
          <div className="venue">
            <h4>
              <i className="ri-map-pin-line"></i>
              {bhopal.location}
            </h4>
            <h4>
              <i className="ri-calendar-2-line"></i>
              {bhopal.startDate}
            </h4>
            <h4>
              <i className="ri-timer-line"></i>
              {bhopal.startDate}
            </h4>
          </div>
          <div className="tickets ">
            <h3 className="ms-5">{bhopal.price}</h3>
            <button
              onClick={() => {
                navigate(`/Detailform/getBhopalEvent`);
              }}
            >
              BUY TICKET
            </button>
          </div>
        </div>

        <div className="address">
          <div className="address-left">
            <h2>FIND US ON GOOGLE MAP</h2>
            <img src={map} alt="" />
          </div>
          <div className="address-right">
            <h2>TRAVELING INFORMATION</h2>
            <div className="vanues ">
              <i className="ri-map-pin-line "></i>
              <div>
                <h4>Venue</h4>
                <p>{bhopal.location}</p>
              </div>
            </div>

            <div className="transport">
              <i className="ri-flight-takeoff-line"></i>
              <div className="transport1">
                <h4>Transport</h4>
                <div className="bus">
                  <p className="">Bus Station</p>
                  <p className="">{bhopal.transportBus}</p>
                </div>
                <div className="bus">
                  <p>Rail Station</p>
                  <p className="">{bhopal.transportRail}</p>
                </div>
                <div className="bus">
                  <p>Airport</p>
                  <p className="">{bhopal.transportAirport}</p>
                </div>
              </div>
            </div>

            <div className="hotel ">
              <i className="ri-hotel-line"></i>
              <div className="transport1">
                <h4>Hotel and Restaurant</h4>
                <div className="bus">
                  <p>Hotel</p>
                  <p className="">{bhopal.hotelDis}</p>
                </div>
                <div className="bus">
                  <p>Restaurant</p>
                  <p className="">{bhopal.restaurantDis}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bhopal;
