import React from 'react'
import {dan} from "../component/Dancedata";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Dance from '../component/Dance';

const MainDance = () => {
  return (
    <div>
        <Navbar/>
        {
            dan.map((ms, index)=>(
                <Dance key = {index} idd = {index}/>
            ))
        }
        <Footer/>
    </div>
  )
}

export default MainDance