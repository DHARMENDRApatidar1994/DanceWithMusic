import React, { useEffect, useState } from "react";
  import Dashboard from "./Dashboard.jsx";
  import axios from "axios";
  const AddBhopalEvent = () => {
    const [data, setData] = useState({
      image: "",
      name: "",
      startDate: "",
      price: "",
      location: "",
      transportBus: "",
      transportRail: "",
      transportAirport: "",
      hotelDis:"",
      restaurantDis: "",
      description: "",
      fullDescription: "",
      images: [],
    });

    const [image, setImage] = useState(undefined);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const AddClickImage = () => {
      setData({ ...data, images: [...data.images, image] });
    };

    const removeImage = (index) => {
      setData((prevState) => {
        const updatedimages = prevState.images.filter(
          (_, i) => i !== index
        );
        return { ...prevState, images: updatedimages };
      });
    };

    useEffect(() => {
      console.log(data);
    }, [data]);

    console.log(data);

    const token = sessionStorage.getItem("token");

    const handelClick = async () => {
      const formData = new FormData();

      formData.append("image", data.image);
      formData.append("name", data.name);
      formData.append("startDate", data.startDate);
      formData.append("price", data.price);
      formData.append("location", data.location);
      formData.append("description", data.description);
      formData.append("fullDescription", data.fullDescription);
      formData.append("transportBus", data.transportBus);
      formData.append("transportRail", data.transportRail);
      formData.append("transportAirport", data.transportAirport);
      formData.append("hotelDis", data.hotelDis);
      formData.append("restaurantDis", data.restaurantDis);
      data.images.forEach((file)=>formData.append("images", file));

      console.log("Hello I am Data -->", data);

      try {
        const ok = window.confirm("Do you really want to add this event");
        if(ok)
        {
          setLoading(true);
          const response = await axios.post(
            "https://singer.boostupdigital.in/api/event/addBhopalEvent",
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("Data inserted successfully");
          setLoading(false);
        }
        
      } catch (error) {
        console.log("Something Error in Axios -->", error);
      }
    };

    
    if(loading)
    {
      return  ( <div style={{display:'flex', height:'600px', width:'600px', justifyContent:'center', alignItems:'center', margin:'auto' }}>
        <div className="flex h-10 w-10 bg-white rounded-full"></div>
        <h1> Loading</h1>
      </div> )
    }

    return (
      <>
        <div>
          <Dashboard />

          <div className="container-fluid w-75 me-5">
            <h4>Bhopal Event</h4>
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
                <label className="fw-bold text-secondary">Price</label>
                <input
                  type="number"
                  className="form-control border border-secondary border-3"
                  name="Price"
                  required
                  placeholder="Ticket Price"
                  onChange={(e) =>
                    setData({ ...data, price: parseInt(e.target.value) })
                  }
                />
              </div>

              <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
                <label className="fw-bold text-secondary">Date</label>
                <input
                  type="datetime-local"
                  className="form-control border border-secondary border-3"
                  name="startDate"
                  required
                  onChange={(e) =>
                    setData({ ...data, startDate: e.target.value })
                  }
                />
              </div>

              <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
                <label className="fw-bold text-secondary">From Bus Station</label>
                <input
                  type="text"
                  className="form-control border border-secondary border-3"
                  name="transportBus"
                  required
                  onChange={(e) => setData({ ...data, transportBus: e.target.value })}
                />
              </div>

              <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
                <label className="fw-bold text-secondary">From Railway Station</label>
                <input
                  type="text"
                  className="form-control border border-secondary border-3"
                  name="transportRail"
                  required
                  placeholder="transportRail"
                  onChange={(e) => setData({ ...data, transportRail: e.target.value })}
                />
              </div>

            

              <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
                <label className="fw-bold text-secondary">Away from Airport</label>
                <input
                  type="text"
                  className="form-control border border-secondary border-3"
                  name="transportAirport"
                  placeholder="Enter km here"
                  required
                  onChange={(e) =>
                    setData({ ...data, transportAirport: e.target.value })
                  }
                />
              </div>

              <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
                <label className="fw-bold text-secondary">Away from hotel</label>
                <input
                  type="text"
                  className="form-control border border-secondary border-3"
                  name="hotelDis"
                  placeholder="Away from hotel"
                  required
                  onChange={(e) => setData({ ...data, hotelDis: e.target.value })}
                />
              </div>

              <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
                <label className="fw-bold text-secondary">Away from Restaurant</label>
                <input
                  type="text"
                  className="form-control border border-secondary border-3"
                  name="restaurantDis"
                  required
                  placeholder="Away from restaurant"
                  onChange={(e) => setData({ ...data, restaurantDis: e.target.value })}
                />
              </div>

              <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
                <label className="fw-bold text-secondary">Location</label>
                <input
                  type="text"
                  className="form-control border border-secondary border-3"
                  name="Location"
                  required
                  placeholder="Location"
                  onChange={(e) => setData({ ...data, location: e.target.value })}
                />
              </div>

             

              <div className=" col-md-8 col-lg-8 col-sm-12 mt-3">
                <label className="fw-bold text-secondary">
                  Short Description
                </label>

                <textarea
                  className="form-control border border-secondary w border-3"
                  name="description"
                  cols="50"
                  rows="7"
                  placeholder="Event Description..."
                  required
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
                ></textarea>
              </div>

              <div className=" col-md-8 col-lg-8 col-sm-12 mt-3">
                <label className="fw-bold text-secondary">Full Description</label>

                <textarea
                  className="form-control border border-secondary w border-3"
                  name="fullDescription"
                  cols="50"
                  rows="7"
                  placeholder="Event FUll Description..."
                  required
                  onChange={(e) =>
                    setData({ ...data, fullDescription: e.target.value })
                  }
                ></textarea>
              </div>

              <div className=" col-md-12 col-lg-12 col-sm-12 mt-3 ">
                <div className="row">
                  <div className=" col-md-12 col-lg-6 col-sm-6 d-flex justify-content-evenly">
                    <div>
                      <label className="fw-bold text-secondary ">
                        Event Image
                      </label>
                      <input
                        className="form-control border border-secondary border-3 "
                        type="file"
                        name="image"
                        required
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </div>
                    <div>
                      <button
                        className="btn btn-primary mt-4 "
                        onClick={AddClickImage}
                      >
                        + Add Image
                      </button>
                    </div>
                  </div>
                  {/* <div className=" col-md-6 col-lg-6 col-sm-6 d-flex justify-content-evenly"></div> */}
                </div>
              </div>

              <div className="mt-4">
                {data.images.map((item, key) => (
                  <div key = {key} className="d-flex  justify-content-evenly col-sm-12 col-lg-8 col-md-8 border">
                    <div className="mt-3">
                      <p>{item.name}</p>
                    </div>
                    <div>
                      <button
                        className="btn btn-danger mt-2"
                        value={key}
                        onClick={()=>removeImage(key)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="d-flex justify-content-center">
                <button className="mt-4 btn btn-primary" onClick={handelClick}>
                  Submit
                </button>
              </div>
            </div>
            {message!=="" && <h1>{message}</h1> }
          </div>
        </div>
      </>
    );
  };

  export default AddBhopalEvent;