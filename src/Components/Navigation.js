import { useRef} from 'react';
import '../Styles/main.css';
import Omega_logo from "../Images/Logo1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll';
import {Link as Links ,useLocation} from "react-router-dom";
import LazyLoad from 'react-lazy-load';
import { IoMdHome } from "react-icons/io";

function Navigation() {
    const location = useLocation();
    const invisiblePaths = ['/product-detail'];
    const isButtonVisible = invisiblePaths.includes(location.pathname);
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
    return (
        <header>
            <a href="/">
                <LazyLoad>
                    <img src={Omega_logo} width="100%" height="70px" alt="logo"  />
                </LazyLoad>
            </a>
            {!isButtonVisible &&<nav ref={navRef}>
                <Links to="/" onClick={showNavbar}> Home</Links>
                <Link className='scroll' to="product" spy={true} smooth={true} offset={0} duration={300} onClick={showNavbar}>Products</Link>
                <Link className='scroll' to="blog" spy={true} smooth={true} offset={0} duration={300} onClick={showNavbar}>Blog</Link>
                <Link className='scroll' to="about" spy={true} smooth={true} offset={-2} duration={300} onClick={showNavbar}>About</Link>
                <Link className='scroll' to="contact" spy={true} smooth={true} offset={0} duration={300} onClick={showNavbar}>Contact</Link>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>}
            {isButtonVisible && <Links to="/" className='Home-icon'><IoMdHome /></Links>}
            {!isButtonVisible &&<button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>}
        </header>
    );
}
export default Navigation;