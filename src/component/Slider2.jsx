import React, { useState, useEffect } from "react";
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import "./Slider2.css";
// import { slider2 } from "./Slider2Data";
import axios from "axios";

const Slider2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [stop, setStop] = useState(false);
  
  const [videoUrls, setVideoUrls] = useState([]);
  const [currentUrl, setCurrentUrl] = useState("");
  const changeImage = (step) => {
    if(videoUrls.length){
      setCurrentImageIndex((prevIndex) => {
        const newIndex = (prevIndex + step + videoUrls.length) % videoUrls.length;
        return newIndex;
      });
      setCurrentUrl(videoUrls[currentImageIndex].url);
    }
  };

  const fetchHomePageVideos = async () => {
    try {
      const response = await axios.get('https://singer.boostupdigital.in/api/video/getHomePageVideos');
      if(response.data)
      {
        setVideoUrls(response.data);
        console.log(response.data);
        if(response.data.length>0){
          setCurrentUrl(response.data[0].url)
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    // console.log("enter");  
    fetchHomePageVideos();
  }, [])

  useEffect(() => {

    if (stop === false) {
      // console.log("enter");
      const interval = setInterval(() => {
        changeImage(1);
      }, 3500);
      return () => {
        clearInterval(interval);
      };
    }
  }, [currentUrl, stop]);

  // console.log(currentImageIndex, videoUrls[currentImageIndex]);
  return (
    <div
    onClick={()=>{
      setStop(true)
      // console.log("chelcikked");
    }}
    >
      <div
        className="image-slider"
        onClick={() => {
          setStop(true);
          // console.log("chelcikked");
        }}
      >
        
        <ReactPlayer  
          url={currentUrl}
          
          width="80%"
          height="100%"
          
          
          playing = {stop}
          
          
          onClick={()=>{
            // console.log("Clicked");
            setStop(true);
          }} 
        />
        <button className="play"
          onClick={()=>setStop(true)}
          style={{ display: stop? "none" : "block", }}
        >
          <FontAwesomeIcon style={{fontSize: "50px"}} icon={faYoutube} className="youtube-icon" />
          {/* Play */}
        </button>
        {/* <h2 className="text-light">{slider2[currentImageIndex].title}</h2> */}

        <div className="slider-controls">
          <button
            className="slider-button"
            onClick={(e) => {
              e.stopPropagation();
              setStop(false);
              changeImage(-1);
              console.log("hello");
            }}
          >
            <i className="ri-arrow-drop-left-line fs-1"></i>
          </button>
          <button
            className="slider-button"
            onClick={(e) => {
              e.stopPropagation();
              setStop(false);
              changeImage(1);
            }}
          >
            <i className="ri-arrow-drop-right-line fs-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider2;
