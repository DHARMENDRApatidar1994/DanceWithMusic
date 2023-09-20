import React, { useState, useEffect } from "react";

import "./Slider1.css";
import { gallery } from "./SliderData";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Slider1 = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const token = sessionStorage.getItem("token");
  const [events, setEvents] = useState([]);

  const fetchDashboardEvents = async () => {
    try {
      const response = await axios.get(
        "https://singer.boostupdigital.in/api/event/showEvents"
      );
      if (response.data) {
        console.log(response.data);
        setEvents(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDashboardEvents();
  }, []);
  const changeImage = (step) => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = (prevIndex + step + events.length) % events.length;
      console.log(events[newIndex]);
      return newIndex;
    });
  };

  useEffect(() => {
    // Automatic slideshow every 1 second
    const interval = setInterval(() => {
      if(events.length)
        changeImage(1);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);

  return (
    <div>
      { events.length && <div className="image-sliders">
        <img
          src={`https://singer.boostupdigital.in/api/uploads/${events[currentImageIndex].image}`}
          alt={`Image ${currentImageIndex + 1}`}
        />
        <div className="content">
          <div className="content1" data-aos="flip-right">
            <h2 className="">{events[currentImageIndex].title}</h2>
            <h3>{events[currentImageIndex].name}</h3>
            <h5>{events[currentImageIndex].address}</h5>
            <p>{events[currentImageIndex].description}</p>
            <button
              onClick={() => {
                navigate(events[currentImageIndex].pathToPage);
              }}
            >
              {events[currentImageIndex].btnPlaceHolder}
            </button>
          </div>
        </div>

        <div className="slider-controlss">
          <button className="slider-buttons" onClick={() => changeImage(-1)}>
            <i className="ri-arrow-drop-left-line fs-1"></i>
          </button>
          <button className="slider-buttons" onClick={() => changeImage(1)}>
            <i className="ri-arrow-drop-right-line fs-1"></i>
          </button>
        </div>
      </div> }
    </div>
  );
};

export default Slider1;