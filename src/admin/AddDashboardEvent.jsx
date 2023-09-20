import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard.jsx";
import axios from "axios";
const AddDashboardEvent = () => {
  const [data, setData] = useState({
    image: "",
    name: "",
    category: "LIVE SHOW",
    address: "",
    description: "",
    btnPlaceHolder: "",
    pathToPage: "/salsa",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log(data);
  }, [data]);

  console.log(data);

  const token = sessionStorage.getItem("token");

  const handelClick = async () => {
    const formData = new FormData();

    formData.append("image", data.image);
    formData.append("name", data.name);
    formData.append("category", data.category);
    formData.append("address", data.address);
    formData.append("description", data.description);
    formData.append("btnPlaceHolder", data.btnPlaceHolder);
    formData.append("pathToPage", data.pathToPage);

    console.log("Hello I am Data -->", data);

    try {
      const ok = window.confirm("Do you really want to add this event");
      if (ok) {
        const response = await axios.post(
          "https://singer.boostupdigital.in/api/event/addEvent",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Data inserted successfully");
        setData({
          image: "",
          name: "",
          category: "LIVE SHOW",
          address: "",
          description: "",
          btnPlaceHolder: "",
          pathToPage: "",
        });
      }
    } catch (error) {
      console.log("Something Error in Axios -->", error);
    }
  };

  return (
    <>
      <div>
        <Dashboard />

        <div className="container-fluid w-75 me-5">
          <h4>Event Upload</h4>
          <div className="row mt-4 ">
            <div className=" col-md-3 col-lg-6 col-sm-12 mt-3 ">
              <label className="fw-bold text-secondary ">Event Image</label>
              <input
                className="form-control border border-secondary border-3 "
                type="file"
                name="image"
                required
                onChange={(e) => setData({ ...data, image: e.target.files[0] })}
              />
            </div>

            <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
              <label className="fw-bold text-secondary">Event Name</label>
              <input
                type="text"
                className="form-control border border-secondary border-3"
                name="name"
                required
                placeholder="Event Name"
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>

            <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
              <label className="fw-bold text-secondary">Category</label>

              <select
                className="form-control border border-secondary border-3"
                name="category"
                required
                onChange={(e) => setData({ ...data, category: e.target.value })}
              >
                <option>LIVE SHOW</option>
                <option>ACHIEVMENTS</option>
                <option>LATEST EVENT</option>
                <option>COMING SOON</option>
              </select>
            </div>

            <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
              <label className="fw-bold text-secondary">Address</label>
              <input
                type="text"
                className="form-control border border-secondary border-3"
                name="address"
                required
                onChange={(e) => setData({ ...data, address: e.target.value })}
              />
            </div>
            <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
              <label className="fw-bold text-secondary">Path to Page</label>
              <select
                className="form-control border border-secondary border-3"
                name="pathToPage"
                required
                onChange={(e) =>
                  setData({ ...data, pathToPage: e.target.value })
                }
              >
                <option value="/salsa">Salsa</option>
                <option value="/groove">Groove</option>
                <option value="/bhopal">Bhopal</option>
                <option value="/Dance">Dance</option>
                <option value="/Music">Music</option>
              </select>
            </div>

            <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
              <label className="fw-bold text-secondary">
                Button Place holder
              </label>
              <input
                type="test"
                className="form-control border border-secondary border-3"
                name="btnPlaceHolder"
                required
                onChange={(e) =>
                  setData({ ...data, btnPlaceHolder: e.target.value })
                }
              />
            </div>
            <div className=" col-md-8 col-lg-6 col-sm-12 mt-3">
              <label className="fw-bold text-secondary">
                Short Description
              </label>

              <textarea
                className="form-control border border-secondary w border-3"
                name="description"
                cols="40"
                rows="7"
                placeholder="Only 8 words..."
                required
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
              ></textarea>
            </div>

            <div className="d-flex justify-content-center">
              <button className="mt-4 btn btn-primary" onClick={handelClick}>
                Submit
              </button>
            </div>
          </div>
          {message !== "" && <h1>{message}</h1>}
        </div>
      </div>
    </>
  );
};

export default AddDashboardEvent;
