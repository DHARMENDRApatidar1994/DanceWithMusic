import React from 'react'
import {musicc} from "../component/Musicdata";
import Music from '../component/Music';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const MainMusic = () => {
  return (
    <div>
        <Navbar/>
        {
            musicc.map((ms, index)=>(
                <Music key = {index} idd = {index} openAt = {"concert"} />
            ))
        }
        <Footer/>
    </div>
  )
}

export default MainMusic