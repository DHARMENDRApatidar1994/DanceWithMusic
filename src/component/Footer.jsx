import React from 'react'
import './Footer.css'

const Footer = () => {

  return (

   
      <div className='footer '>
        <div className='left ' data-aos="flip-right">
        
                            <h2>Get In Touch</h2>
                            <div className='addr '>
                            <a href=""><i className="ri-map-pin-line "></i></a>
                            <div>
                                <h4>Office Address</h4>
                                <p>E-131,Nehru Nagar,Bhopal,462003</p>
                            </div>
                            </div>
                            <div className='addr'>
                            <a href="tel:-9074907820" ><i className="ri-phone-line"></i></a>
                            <div>
                               <h4>Call Us</h4>                           
                                <p className=''>+91-9074907820</p>                            
                            </div>
                            </div>
                            <div className='addr'>
                            <a href="mailto:-harshsalve20@gmail.com" target='_blank'><i className="ri-mail-open-line"></i></a>
                            <div className=''>
                                <h4>Mail us</h4>                              
                                <p>harshsalve20@gmail.com</p>
                            </div>
             </div>
        </div>
        {/* <div className='footerimg'>
        <img src="http://demos.codexcoder.com/anthem/wp-content/uploads/2017/05/Anthem-Logo.png" alt="" width={200} />
        </div> */}
        <div className='rights' data-aos="flip-left">
          <h1>Share Us On</h1>
        <div className='icon '>
        <a href="https://www.facebook.com/harsh.salve.102" target="_blank"><i className="ri-facebook-fill rounded-circle p-3 bg-primary"></i> </a>
        <a href="https://twitter.com/Harsh_ka_Music" target="_blank"><i className="ri-twitter-fill  rounded-circle p-3 ms-2 bg-primary"></i></a>
        <a href="https://www.youtube.com/channel/UCIffoab6HQj8a4JzxCPhJ8w" target="_blank"><i class="ri-youtube-fill rounded-circle p-3 ms-2"></i></a>
        <a href="https://www.instagram.com/harsh_ka_music/" target="_blank"><i className="ri-instagram-line  rounded-circle p-3 ms-2 "></i></a>
        <a href="
https://www.linkedin.com/in/harsh-salve-69a628245/" target='_blank'><i className="ri-linkedin-fill  rounded-circle p-3 ms-2 "></i></a>
        </div>
        </div>
      </div>
  

  )
}

export default Footer