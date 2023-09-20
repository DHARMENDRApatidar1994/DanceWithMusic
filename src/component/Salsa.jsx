import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Salsa = () => {
  const navigate = useNavigate();

  // Example event data (replace this with your actual event data)
  const initialEvent = {
    image: '',
    date: 'Event Date',
    name: '',
    location: 'Event Location',
  };

  const [event, setEvent] = useState(initialEvent);

  const fetchEvent = async () => {
    try {
      const response = await axios.get('https://singer.boostupdigital.in/api/event/getSalsaEvent');
      if(response.data){
        setEvent(response.data);
        // console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchEvent();
  }, [])

  return (
    <div>
      {event.name!="" && (
        <div className='boxs1img'>
          <div className='overlayimg'>
            { event.image !="" &&  <img src={`https://singer.boostupdigital.in/api/uploads/${event.image}`} alt="" data-aos="zoom-out" /> }
            <button onClick={() => {
              navigate(`/salsa`);
            }}>View More</button>
          </div>
          <div className='boxs1info'>
            <div>
              <h2>{event.startDate}</h2>
            </div>
            <div className='boxs1infoname'>
              <h1>{event.name}</h1>
              <h6>{event.location}</h6>
            </div>
            <button onClick={() => {
              navigate('/Detailform/getSalsaEvent');
            }}>BUY TICKET</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Salsa;
