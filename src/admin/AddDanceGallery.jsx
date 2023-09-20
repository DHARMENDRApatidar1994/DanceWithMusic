import React, { useState } from "react";
import Dashboard from "./Dashboard";
import axios from "axios";

const AddDanceGallery = () => {
  const [Data, setData] = useState({
    image: null,
    title: ""
  });
  const token = sessionStorage.getItem("token");
  const handelClick = async () => {
    console.log("Data", Data);

    const formData = new FormData();
    formData.append("image", Data.image);
    formData.append('title', Data.title);

    try {
      const confirm = window.confirm("Do you Want to Add image in Gallery");
      if (confirm) {
        const resp = await axios.post("https://singer.boostupdigital.in/api/gallery/addDanceGallery", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData({
          image: null,
          title: ""
        });
        console.log("Image send Successfully", resp.data);
      }
    } catch (error) {
      console.log("Something Error in Axios-->", error);
    }
  };

  return (
    <>
      <Dashboard />
      <div className="main" style={{ marginTop: "80px" }}>
        <h1 className="text-center mt-5">
          <u> Add Image In Gallery</u>
        </h1>
        <div className="container-fluid mt-5">
          <div className="row d-flex flex-column align-item-center justify-content-center border border-primary border-2">
            <div className=" mt-3 w-100 mt-3  col-sm-12 col-md-6 col-md-6 ">
              <label className="fw-bold text-secondary">Image</label>
              <input
                type="file"
                onChange={(e) => setData({ ...Data, image: e.target.files[0] })}
                className="form-control border border-primary border-2 "
                name="image"
                required
              />
            </div>
            <div className=" mt-3 w-100 mt-3  col-sm-12 col-md-6 col-md-6 ">
              <label className="fw-bold text-secondary">Title</label>
              <input
                type="text"
                onChange={(e) => setData({ ...Data, title: e.target.value })}
                className="form-control border border-primary border-2"
                name="title"
                value = {Data.title}
                required
              />
            </div>

            <div className="d-flex align-item-center justify-content-center">
              <div className="col-md-4 mt-5 col-lg-4 col-sm-8 d-flex justify-content-center mt-3">
                <button
                  onClick={handelClick}
                  className="btn btn-primary w-75 mb-4"
                >
                  Add Image In Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDanceGallery;