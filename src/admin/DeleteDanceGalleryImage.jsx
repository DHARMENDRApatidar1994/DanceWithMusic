import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import './DeleteHomePageVideo.css';
import axios from 'axios';

const DeleteDanceGalleryImage = () => {
  const [images, setImages] = useState([]);
  const token = sessionStorage.getItem('token');

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        'https://singer.boostupdigital.in/api/gallery/getDanceGallery'
      );
      console.log(response.data);
      setImages(response.data);
      console.log(images);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const deleteImage = async (id) => {
    try {
      const response = await axios.delete(
        `https://singer.boostupdigital.in/api/gallery/deleteDanceGalleryImage/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log(response.data);
      fetchImages(); // Fetch images again after deleting to update the UI
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
            <img src={`https://singer.boostupdigital.in/api/uploads/${img.image}`} alt="" />
            <h2>{img.title}</h2>
            <button onClick={() => deleteImage(img._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteDanceGalleryImage;
