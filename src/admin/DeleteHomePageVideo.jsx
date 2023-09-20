import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import "./DeleteHomePageVideo.css";
import axios from "axios";
import ReactPlayer from "react-player";

const DeleteHomePageVideo = () => {
  const [videos, setVideos] = useState([]);
  const [message, setMessage] = useState("");
  const token = sessionStorage.getItem('token');

  const fetchVideos = async () => {
    try {
        const response = await axios.get('https://singer.boostupdigital.in/api/video/getHomePageVideos');
        console.log(response.data);
        if(response.data){
            setVideos(response.data);
        }
    } catch (error) {
        console.log(error);
    }
  }
  useEffect(()=>{
    fetchVideos();
  }, [])

  const deleteVideo = async (id) => {
    try {
        const response = await axios.delete(`https://singer.boostupdigital.in/api/video/deleteHomePageVideo/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response.data);
        fetchVideos();
        window.alert("Video Deleted Successfully");
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div>
      <div className="deleteimage">
        <Dashboard />
        {videos.map((video, index) => (
          <div className="imagediv" key={index}>
            <ReactPlayer
              url={video.url}
              width="80%"
              height="100%"
            />
            <button onClick={()=>deleteVideo(video._id)} >Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteHomePageVideo;
