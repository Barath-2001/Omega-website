import "../Styles/main.css"
import {Container} from 'react-bootstrap';
import img from "../Images/Map.png";
import LazyLoad from "react-lazy-load";
//import { Height } from "@mui/icons-material";
function Contact() {
    return (
        <div className="Contact-container" id='contact'>
            <h1>Contact</h1>
            <div className='detail-container'>
               <Container>
                    <div className='gmaps-frame' onclick="document.getElementById('iframe').style.pointerEvents= 'auto'">
                        <a href='https://www.google.com/maps/d/u/0/embed?mid=1UYipmoYIbO5aGzfZ9PaCaDJYv7VEoo4&ehbc=2E312F'  target="_blank" rel="noreferrer">
                            <LazyLoad>
                                <img className="Map-img" src={img} alt="Map" width="100%" Height="550px" />
                            </LazyLoad>
                        </a>
                    </div>
                </Container>

            </div>
        </div>
    );
}
export default Contact
