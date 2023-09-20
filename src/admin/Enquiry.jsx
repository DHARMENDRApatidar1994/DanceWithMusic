import React, { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";

const Enquiry = () => {
  const [contacts, setContacts] = useState([]);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(
        "https://singer.boostupdigital.in/api/contact/getContacts",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setContacts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(
        `https://singer.boostupdigital.in/api/contact/deleteContact/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchContacts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Dashboard />
      <div className="container mt-5">
        <h1 className="text-center mb-4">Contact Enquiries</h1>
        <div className="row">
          {contacts.map((contact) => (
            <div key={contact._id} className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Name: {contact.name}</h5>
                  <p className="card-text">Email: {contact.email}</p>
                  <p className="card-text">Subject: {contact.subject}</p>
                  <p className="card-text">Message: {contact.message}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteContact(contact._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
