import React,{useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'




const Navbar = () => {

 

  const [isMobile,setIsMobile] = useState(false)

  

  return (
    <div>
      <div className='nav d-flex justify-content-between align-items-center w-100'>
        <div className='left d-flex w-25  ms-5 mt-2'>
         <h1>GCDC</h1>

        </div>
        <div className={isMobile ? "nav-links-mobile" :  "right d-flex justify-content-evenly w-50" }  
        onClick={()=>setIsMobile(false)}>
          <Link to="/" className='text-decoration-none'><h6>HOME</h6></Link>
          <li className='musicnav'>
          <Link to="/Music" className=' text-decoration-none'><h6>MUSIC</h6></Link>
          <div className='music'>
        <ul>
            <li><Link to="/Music/gallery">Gallery</Link></li>
            <li><Link to="/Music/workshops">WORKSHOPS</Link></li>
            <li><Link to="/Music/corporate">CORPORATE SHOWS</Link></li>
            <li><Link to="/Music/concert">CONCERT SHOWS</Link></li>
          </ul>
         
          </div>
          </li>
          
          <li className='dancenav'>
          <Link to="/Dance" className='text-decoration-none'><h6>DANCE</h6></Link>
          <div className='dance'>
        <ul>
            <li><Link to="/Dance/gallery">Gallery</Link></li>
            <li><Link to="/Dance/workshops">WORKSHOPS</Link></li>
            <li><Link to="/Dance/corporate">CORPORATE SHOWS</Link></li>
            <li><Link to="/Dance/administrative">ADMINISTRATIVE SHOWS</Link></li>
          </ul>
         
          </div>
          </li>

          <li className='eventnav'>

           <h6>EVENT</h6>
          <div className='event'>
        <ul>
            <li><Link to="/salsa">SALSA IN BHOPAL</Link></li>
            <li><Link to="/groove">CHANGE THE GROOVE</Link></li>
            <li><Link to="/bhopal">HOUSE OF BHOPAL </Link></li>
          </ul>
         
          </div>
          </li>
          <Link to="/Contact" className='text-decoration-none'><h6>CONTACT US</h6></Link>
        </div>
       
        <button className='mobile-menu-icon' onClick={()=>setIsMobile(!isMobile)}>{isMobile ? <i className="ri-close-line"></i> : <i className="ri-menu-line"></i> }</button>
      </div>
      
      
    </div>
  )
}

export default Navbar