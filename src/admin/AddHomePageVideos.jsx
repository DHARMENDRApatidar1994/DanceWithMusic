import React, { useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";

const AddHomePageVideos = () => {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const token = sessionStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the URL to the server
      const response = await axios.post(
        "https://singer.boostupdigital.in/api/video/addHomePageVideo",
        { url },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
        setMessage("Video Added Successfully");
      // Clear the input field after successful submission
      setUrl("");
    } catch (error) {
      console.error("Error adding video:", error);
    }
  };

  return (
    <div>
      <Dashboard/>
      <div className="container mt-5">
        <h2 className="mb-4">Add Home Page Videos</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="videoUrl" className="form-label">
              Video URL:
            </label>
            <input
              type="text"
              id="videoUrl"
              className="form-control"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Video
          </button>
        </form>
        {message}
      </div>
    </div>
  );
};

export default AddHomePageVideos;
