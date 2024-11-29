import React from 'react'
import { Link } from 'react-scroll';
const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3>Omega<span className='green'> Digital Controls</span></h3>
                            <p >
                                Omega Digital UPS is a pioneering force in the field of Lithium UPS and battery manufacturing. 
                                Lithium UPS systems are renowned for their high energy density, longer lifespan, and compact design 
                                compared to traditional lead-acid batteries.
                            </p>
                            <div className="footer-icons ">
                                <a href="https://www.facebook.com/p/OMEGA-Digital-UPS-100063825261893/" target="_blank" rel="noreferrer">
                                    <i  class="fa-brands fa-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/omegaups/" target="_blank" rel="noreferrer" >
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                                <a href="https://youtube.com/playlist?list=PLbXO9OLyHlyKdI6GV8C7e-expZ6LY29oQ&feature=shared" target="_blank" rel="noreferrer">
                                    <i class="fa-brands fa-youtube"></i> 
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5 className='green'>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <Link className='scroll' to="product" spy={true} smooth={true} offset={0} duration={300}>Products</Link>
                                </li>
                                <li>
                                    <Link className='scroll' to="blog" spy={true} smooth={true} offset={0} duration={300} >Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='scroll' to="about" spy={true} smooth={true} offset={0} duration={300} >About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='scroll' to="contact" spy={true} smooth={true} offset={0} duration={300}>Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3" >
                            <h5 className='green'>Contact Info</h5>
                            <p><i class="fa-solid fa-phone-volume green"></i>+91-7508778888</p>
                            <p><i class="fa-solid fa-envelope green"></i>stalwartsolarsalem@gmail.com</p>
                            <p><i class="fa-solid fa-paper-plane green"></i>H2GR+ J5Q, near Rajani polytechnic, Salem, Kombadipatti, Tamil Nadu 637504</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>@{new Date().getFullYear()} Omega Digital Controls. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer
/*<i class="fa-brands fa-twitter"></i>
<i class="fa-brands fa-linkedin-in"></i> 
*/