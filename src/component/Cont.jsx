import React, { useEffect, useState } from "react";
import "./Cont.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cont = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    // Do something with data, e.g., send to server
    try {
      const response = await axios.post('https://singer.boostupdigital.in/api/contact/submitForm', formData);
      console.log("Form submitted:", formData);
      window.alert('Thanks for visiting us!');
      navigate('/');
    } catch (error) {
      console.log(error);
    }

  };

  // useEffect(()=>{
  //   console.log(formData);
  // }, [formData])

  return (
    <div>
      <div className="contact1">
        <img
          src="https://static.vecteezy.com/system/resources/previews/007/210/080/non_2x/abstract-background-modern-technology-banner-digital-backdrop-cover-graphic-template-wallpaper-free-photo.jpg"
          alt=""
          className="image1"
        />
        <div className="contact2 mt-5">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="contact3">
      <div className="contact3-left">
          <h2>Send Us a Message</h2>
          <input
            type="text"
            placeholder="Name"
            className="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            className="name"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Subject"
            className="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            cols="30"
            rows="5"
            placeholder="Message"
            className="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button onClick={handleSubmit}>SEND MESSAGE</button>
        </div>
        <div className="contact3-right">
          <h4 className="first">CONTACT US</h4>
          <h1>Get In Touch!</h1>
          <p>
            Proin laoreet nisi vitae pharetra mattis, etiam luctus suscipit.
            Augue molestie a etiam quis tincidunt est, et efficitur ipsum nunc
            bibendum ut risus et vehicula proin tempus.
          </p>
          <div className="d-flex">
            <a href="tel:-9074907820"><i className="ri-phone-line"></i></a>
            <div>
              <h4>Call Us</h4>
              <h5>+91-9074907820</h5>
            </div>
          </div>
          <div className="d-flex">
            <a href="mailto:-harshsalve20@gmail.com"><i className="ri-mail-open-line"></i></a>
            <div>
              <h4>Email Us</h4>
              <h5>harshsalve20@gmail.com</h5>
            </div>
          </div>
          <div className="d-flex">
            <a href=""><i className="ri-map-pin-line"></i></a>
            <div>
              <h4>Office Address</h4>
              <h5>E-131,Nehru Nagar,Bhopal,462003</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cont;