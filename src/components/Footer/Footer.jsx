import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-content" id='footer'>
            <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque veritatis eius voluptatem maiores itaque numquam. Saepe sint architecto non suscipit quaerat illum nesciunt id, quae, mollitia, voluptas officiis obcaecati amet?</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>

            </div>
            <div className='footer-content-center'>
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>01022886806</li>
                    <li>contact@tomamto.com</li>
                </ul>

            </div>
            
        </div>
        <hr />
        <p className='footer-copyright'>
         Copyright 2024 Tomato.com - All Right Reserved .
        </p>
    </div>
  )
}

export default Footer