import React from 'react'
import "./Footer.css"
import logo from "../Assets/logo_for_store.png"
import instagram_icon from "../Assets/instagram_icon.png"
import pinterest_icon from "../Assets/pinterest_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"

const Footer = () => {
    return (
        <div className='footer'>
            <hr />
            <div className="footer-logo">
                <img src={logo} alt="" />
                <p>PANTS4U</p>
            </div>
            <div className='footer-about-company'>
                <p> This is our official website.<br />
                    Here you can find any pants.<br />
                    If you have any questions, <br />
                    contact us using following networks.</p>
            </div>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pinterest_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>2023 IoT &copy; Copyright - all rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
