import React,{useEffect, useState} from "react";
import "./Biomusic.css";
import { useNavigate } from "react-router-dom";



import AOS from "aos";
import { boidata } from "./Biomusicdata";
import axios from "axios";


const Biomusic = () => {
  const navigate = useNavigate();
  
    useEffect(()=>{
      AOS.init({duration:1000})
    },[])

    const [musicGallery, setMusicGallery] = useState([]);
    const [danceGallery, setDanceGallery] = useState([]);

    const fetchGallery = async () => {
      try {
        const music = await axios.get('https://singer.boostupdigital.in/api/gallery/getMusicGallery');
        const dance = await axios.get('https://singer.boostupdigital.in/api/gallery/getDanceGallery');
        if(music.data){
          setMusicGallery(music.data)
        }
        if(dance.data){
          setDanceGallery(dance.data);
        }
      } catch (error) {
        console.log("in fetch gallery",error);
      }
    }

    useEffect(()=>{
      fetchGallery();
    }, [])


  return (
    <div>
      <div className="bioim" data-aos="zoom-in">
        <h1 className="biography">SINGER PORTFOLIO</h1>
        <div className="info">
          <div className="imagemusic" data-aos="zoom-in">
            <img  src=".././singrremove.png" alt="" id="singer" />
          </div>
          <div className="biomusic"> 
            <div >
              <h1 data-aos="flip-left">HARSH SALVE</h1>
              <span>Music Founder</span>
              <h3 data-aos="flip-right">Introduction</h3>
              <p>
                "he have  been passionate about music from a young age and have grown to become a singer, musician, and performer. Bhopal is where he  call home, and over the years, he have  built relationships with local media, fellow artists, and event planners. On top of that, he  have his  own active social media presence. Beyond his performances, he is also a guitar player and teacher. Many in our city recognize him as an authentic and dedicated artist."
              </p>
              {/* <h3 data-aos="flip-left">Message</h3>
              <h4>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                at?"
              </h4>
              <h3 data-aos="flip-left">Magic Moments</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem veniam, obcaecati impedit amet saepe atque excepturi
                odio accusamus necessitatibus at quidem suscipit labore quisquam
                voluptatum mollitia fuga fugit aliquid adipisci?
              </p> */}
              <h3 data-aos="flip-left">Follow Me</h3>
              <div style={{margin:" 20px 0px"}} className="likesmain">
                <div className="likes">
                  <h4>1000+</h4>
                  <h4 style={{marginTop:'20px'}}><a style={{textDecoration:'none'}} href="
https://www.facebook.com/harsh.salve.102" target="_blank"><i  className="ri-facebook-fill rounded-circle p-3 bg-primary text-light"></i> </a></h4>
                </div>
                <div>
                  <h4>1000+</h4>
                  <h4 style={{marginTop:'20px'}}><a style={{textDecoration:'none'}} href="
https://twitter.com/Harsh_ka_Music" target="_blank"><i className="ri-twitter-fill  rounded-circle p-3 ms-2 bg-primary text-light"></i></a></h4>
                </div>
                <div>
                  <h4>1000+</h4>
                  <h4 style={{marginTop:'20px'}}> <a style={{textDecoration:'none'}} href="
https://www.youtube.com/channel/UCIffoab6HQj8a4JzxCPhJ8w" target="_blank"><i class="ri-youtube-fill rounded-circle p-3 ms-2"></i></a></h4>
                </div>
                <div>
                  <h4>1000+</h4>
                  <h4 style={{marginTop:'20px'}}><a style={{textDecoration:'none'}} href="
https://www.instagram.com/harsh_ka_music/" target="_blank"><i className="ri-instagram-line  rounded-circle p-3 ms-2 "></i></a></h4>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* gallery music */}

      <div className="main">
        <h4 className="text-center fs-2 text-light">GALLERY</h4>
        <div className="slider">
          <div className="slide-track">
            {musicGallery.map((music, index) => (
              <div className="slide" key={index}>
                <div className="box">
                <img data-aos="zoom-in" src={`https://singer.boostupdigital.in/api/uploads/${music.image}`} alt="" />
                </div>
                <h4 className="mt-2"  onClick={()=>{
                  navigate(`/Music`)
                }}>{music.title}</h4>
              </div> 
            ))}
          </div>
          
        </div>
        <button onClick={()=>{
                  navigate(`/Music`)
                }}>View More</button>
      </div>

      {/* dance content */}

      <div className="bioims" data-aos="zoom-in">
      <h1 className="biography">DANCER PORTFOLIO</h1>
        <div id="second" className="info">
          <div className="biomusic">
            <div>
              <h1 data-aos="flip-right" className="monty">MONTY</h1>
              <span>Dance Founder</span>
              <h3 data-aos="flip-right">Introduction</h3>
              <p>
              Dance is like speaking without words—it's a way to express yourself, feel your passion, and tell a story through movement. Let's make every step count and dance like nobody's watching. I've been dancing for over 10 years and I'm excited to share my love for hip-hop's energy and the deep feelings of contemporary dance, salsa and bachata.
Come, let's groove together and discover the magic of dance!
              </p>
              {/* <h3 data-aos="flip-right">Message</h3>
              <h4>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                at?"
              </h4>
              <h3 data-aos="flip-right">Magic Moments</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem veniam, obcaecati impedit amet saepe atque excepturi
                odio accusamus necessitatibus at quidem suscipit labore quisquam
                voluptatum mollitia fuga fugit aliquid adipisci?
              </p> */}
              <h3 data-aos="flip-right">Follow Me</h3>
              <div style={{margin:'20px 0px'}} className="likesmain">
                <div className="likes">
                  <h4>1000+</h4>
                  <h4 style={{marginTop:'20px'}}><a style={{textDecoration:'none'}} href="

https://www.facebook.com/monty.mose
" target="_blank"><i className="ri-facebook-fill rounded-circle p-3 bg-primary text-light"></i> </a></h4>
                </div>
                <div>
                  <h4>1000+</h4>
                  <h4 style={{marginTop:'20px'}}><a style={{textDecoration:'none'}} href="
https://twitter.com/Monty16447999" target="_blank"><i className="ri-twitter-fill  rounded-circle p-3 ms-2 bg-primary text-light"></i></a></h4>
                </div>
                <div>
                  <h4>1000+</h4>
                  <h4 style={{marginTop:'20px'}}> <a style={{textDecoration:'none'}} href="
https://www.youtube.com/channel/UCnWTsXigRWKMbndKSBckx1w" target="_blank"><i class="ri-youtube-fill rounded-circle p-3 ms-2"></i></a></h4>
                </div>
                <div>
                  <h4>1000+</h4>
                  <h4 style={{marginTop:'20px'}}><a style={{textDecoration:'none'}} href="
https://www.instagram.com/" target="_blank"><i className="ri-instagram-line  rounded-circle p-3 ms-2 "></i></a></h4>
                </div>
              </div>
             
            </div>
          </div>
          <div className="imagemusic">
            <img data-aos="flip-right"
              src=".././monty-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </div>

       {/* gallery music */}

      <div className="main">
        <h4 className="text-center fs-2 text-light">GALLERY</h4>
        <div className="slider">
          <div className="slide-track">
            {danceGallery.map((dance, index) => (
              <div className="slide" key={index}>
                <div className="box">
                <img data-aos="flip-right" src={`https://singer.boostupdigital.in/api/uploads/${dance.image}`} alt="" />
                </div>
                <h4 className="mt-2"  onClick={()=>{
                  navigate(`/Dance`)
                }}>{dance.title}</h4>
              </div>
            ))}
          </div>
        </div>
        <button onClick={()=>{
                  navigate(`/Music`)
                }}>View More</button>
      </div>


    </div>
  );
};

export default Biomusic;
