import React,{useState,useEffect} from 'react'
import { dan } from './Dancedata';
import './Dance.css'
import AOS from "aos";
import { useRef } from 'react';
import { useParams } from 'react-router-dom';




const Dance = ({idd}) => {

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

  const [dances, setDances] = useState(dan[idd]);
  const [show, setShow] = useState(true);
  const [imageIndex, setImageIndex] = useState("");

  const handleClick = (index) => {
      setImageIndex(index);
      setShow(false);
  };

  const slideImage = (step, len) => {
    console.log("len", len);
    const next_index = (imageIndex+step+len)%len;
    console.log(next_index);
    setImageIndex(next_index);
  }

  useEffect(()=>{
    console.log(imageIndex, "img index");
  }, [imageIndex])

  useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  return (
    <div>
             
             <div className="musicboxs" >
              <h1  id = "gallery">GALLERY</h1>
               <div className="imagesong">
               <div className='musicimage' >
               {show && (
              <div className="arraydata">
                {dances.imgArray &&
                  dances.imgArray.map((imgUrl, id) => (
                    <img data-aos="zoom-in" onClick={()=>handleClick(id)} key={id} src={imgUrl} alt="" />
                  ))}
              </div>
            )}

            {!show && (
              <div className="imagedata">
                <div className="imagedata1">
                <i onClick={()=>slideImage(-1, dances.imgArray.length)} className="ri-arrow-drop-left-line fs-1 "></i>
                <img data-aos="zoom-in" src={dances.imgArray[imageIndex]} alt="" className="bdahoja" />
                <i onClick={()=>slideImage(1, dances.imgArray.length)} className="ri-arrow-drop-right-line fs-1 "></i>
                </div>
                 <i class="ri-close-circle-line fs-2" onClick={()=>setShow(true)} ></i>
              </div>
            )}

             </div>
             <h1>VIDEOS</h1>
             <div className="audio" data-aos="fade-left" data-aos-duration="1500">
            {dances.videoArray?.map(
              (url,id)=>(
                <div className="imgaudio" key={id}>
                <iframe data-aos="flip-left" src={url} frameborder="0" allowfullscreen></iframe>
                
                </div>
              )
            )}
          </div>
          <h1 id = "workshops">WORKSHOPS</h1>
        <div className="workshops">
          <div className="work">
            {dances.workshop?.map((imgUrl, id) => (
              <img data-aos="fade-left" key={id} src={imgUrl} alt="" />
            ))}
          </div>
        </div>

        <h1 id = "corporate">CORPORATE SHOWS</h1>
        <div className="corporate">
          <div className="corpo">
            {dances.workshop?.map((imgUrl, id) => (
              <img data-aos="zoom-out" key={id} src={imgUrl} alt="" />
            ))}
          </div>
        </div>


        <h1 id='administrative'>CONCERTS</h1>
        <div className="workshops">
          <div className="work">
            {dances.workshop?.map((imgUrl, id) => (
              <img data-aos="fade-right" key={id} src={imgUrl} alt="" />
            ))}
          </div>
        </div>
             </div>
           </div>
    </div>
  )
}

export default Dance