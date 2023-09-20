import React, { useEffect, useRef, useState } from "react";
import "./Eventdetail.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import map from '../assets/map.jpeg'

const Salsa = () => {
  const navigate = useNavigate();

  const myref = useRef();
  const main = useRef();

  function my() {
    main.current.style.transitionDuration = "3s";
    main.current.style.marginTop = "40vmax";
    myref.current.style.transitionDelay = "3s";
    myref.current.style.transitionDuration = "2s";
    myref.current.style.transform = "rotateY(180deg)";
  }

  const [salsa, setSalsa] = useState({
    startData: "",
    title: "",
    location: "",
    image: "",
  });

  const fetchSalsaEvent = async () => {
    try {
      const response = await axios.get(
        "https://singer.boostupdigital.in/api/event/getSalsaEvent"
      );
      console.log(response.data);
      if (response.data) {
        setSalsa(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSalsaEvent();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="event1">
        <div className="bgimage">
          <div onLoad={my} ref={myref} className="perfomer">
            {salsa?.images &&
              salsa.images.map((img, index) => (
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
          {salsa.name}
        </h1>

        <div className="about">
          <h1 style={{ marginTop: "150px" }}>About Event</h1>
          <h3>{salsa.description}</h3>
          <p>{salsa.fullDescription}</p>
        </div>
        <div className="event1-2-1">
          <div className="venue">
            <h4>
              <i className="ri-map-pin-line"></i>
              {salsa.location}
            </h4>
            <h4>
              <i className="ri-calendar-2-line"></i>
              {salsa.startDate}
            </h4>
            <h4>
              <i className="ri-timer-line"></i>
              {salsa.startDate}
            </h4>
          </div>
          <div className="tickets ">
            <h3 className="ms-5">{salsa.price}</h3>
            <button
              onClick={() => {
                navigate(`/Detailform/getSalsaEvent`);
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
                <p>{salsa.location}</p>
              </div>
            </div>

            <div className="transport">
              <i className="ri-flight-takeoff-line"></i>
              <div className="transport1">
                <h4>Transport</h4>
                <div className="bus">
                  <p className="">Bus Station</p>
                  <p className="">{salsa.transportBus}</p>
                </div>
                <div className="bus">
                  <p>Rail Station</p>
                  <p className="">{salsa.transportRail}</p>
                </div>
                <div className="bus">
                  <p>Airport</p>
                  <p className="">{salsa.transportAirport}</p>
                </div>
              </div>
            </div>

            <div className="hotel ">
              <i className="ri-hotel-line"></i>
              <div className="transport1">
                <h4>Hotel and Restaurant</h4>
                <div className="bus">
                  <p>Hotel</p>
                  <p className="">{salsa.hotelDis}</p>
                </div>
                <div className="bus">
                  <p>Restaurant</p>
                  <p className="">{salsa.restaurantDis}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salsa;
