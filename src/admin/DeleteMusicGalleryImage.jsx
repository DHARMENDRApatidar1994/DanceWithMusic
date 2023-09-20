import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import "./DeleteHomePageVideo.css";
import axios from "axios";

const DeleteMusicGalleryImage = () => {
  const [images, setImages] = useState([]);
  const token = sessionStorage.getItem('token');

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        "https://singer.boostupdigital.in/api/gallery/getMusicGallery"
      );
      console.log(response.data);
      setImages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const deleteImage = async (id) => {
    try {
      // Implement your delete logic here
      // For example: send a DELETE request to the server
      await axios.delete(`https://singer.boostupdigital.in/api/gallery/deleteMusicGalleryImage/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // After successful deletion, you might want to refresh the images
      fetchImages();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="deleteimage">
        <Dashboard />
        {images.map((img, index) => (
          <div className="imagediv" key={index}>
            <img
              src={`https://singer.boostupdigital.in/api/uploads/${img.image}`}
              alt=""
            />
            <h2>{img.title}</h2>
            <button onClick={() => deleteImage(img._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteMusicGalleryImage;
