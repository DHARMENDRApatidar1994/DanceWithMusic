import React, { useEffect, useRef, useState } from "react";
import { musicc } from "./Musicdata";
import "./Music.css";
import AOS from "aos";
import { useParams } from "react-router-dom";


const Music = ({ idd }) => {

  const targetRef = useRef(null);
  const {openAt} = useParams();

  useEffect(() => {
    // Find the target div using the provided ID
    console.log(openAt);
    const targetDiv = document.getElementById(openAt);
    console.log("tar", targetDiv);
    if (targetDiv) {
      // Scroll the target div into view
      const scrollPos = targetDiv.offsetTop - 111;
      // targetDiv.scrollIntoView({ top: "100px", behavior: 'smooth' });
      window.scrollTo({top: scrollPos, behavior: "smooth"});
    }
  }, [openAt]);

  console.log(musicc[0].imgArray[0]);
  const [music, setMusic] = useState(musicc[idd]);
  const [show, setShow] = useState(true);
  const [imageIndex, setImageIndex] = useState("");
  // console.log(idd, music);
  const handleClick = (index) => {
    setImageIndex(index);
    setShow(false);
  };

  const slideImage = (step, len) => {
    console.log("len", len);
    const next_index = (imageIndex + step + len) % len;
    console.log(next_index);
    setImageIndex(next_index);
  };

  useEffect(() => {
    console.log(imageIndex, "img index");
  }, [imageIndex]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
 

  return (
    <div>

      <div className="musicbox">
        <h1 id = "gallery">GALLERY</h1>


        <div className="musicimage" >
          {show && (
            <div className="arraydata">
              {music.imgArray &&
                music.imgArray.map((imgUrl, id) => (
                  <img data-aos="zoom-in"
                    onClick={() => handleClick(id)}
                    key={id}
                    src={imgUrl}
                    alt=""
                  />
                ))}
            </div>
          )}

          {!show && (
            <div className="imagedata">
              <div className="imagedata1">
                <i
                  onClick={() => slideImage(-1, music.imgArray.length)}
                  className="ri-arrow-drop-left-line fs-1 text-light"
                ></i>
                <img data-aos="zoom-in"
                  src={music.imgArray[imageIndex]}
                  alt=""
                  className="bdahoja"
                />
                <i
                  onClick={() => slideImage(1, music.imgArray.length)}
                  className="ri-arrow-drop-right-line fs-1 text-light"
                ></i>
              </div>
              <i
                class="ri-close-circle-line fs-2"
                onClick={() => setShow(true)}
              ></i>
            </div>
          )}
        </div>
        <h1>SONGS</h1>
        <div className="audio" >
          {music.audioArray?.map((url, id) => (
            <div className="imgaudio" key={id}>
              <img data-aos="flip-left" src={url.img} alt="" />
              <audio controls >
                <source src={url.audio} type="audio/mp3" />
              </audio>
            </div>
          ))}
        </div>

        <h1 id = "workshops" >WORKSHOPS</h1>
        <div className="workshops">
          <div className="work">
            {music.workshop?.map((imgUrl, id) => (
              <img data-aos="fade-left" key={id} src={imgUrl} alt="" />
            ))}
          </div>
        </div>

        <h1 id = "corporate">CORPORATE SHOWS</h1>
        <div className="corporate">
          <div className="corpo">
            {music.musiccorpo?.map((imgUrl, id) => (
              <img data-aos="zoom-out" key={id} src={imgUrl} alt="" />
            ))}
          </div>
        </div>


        <h1 id = "concert">CONCERTS</h1>
        <div className="workshops">
          <div className="work">
            {music.musicconcert?.map((imgUrl, id) => (
              <img data-aos="fade-right" key={id} src={imgUrl} alt="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
