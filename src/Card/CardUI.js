import React from "react";
import img1 from "../Images/Logo1.png";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LazyLoad from "react-lazy-load";
function Card(props){
    return (
        <div className='card h-100 text-center shadow' style={{height:"500px"}}>
            <div className='overflow'>
                <LazyLoad>
                    <img src={img1} alt='1' className="card-img-top"  width="100%" height="100%"/>
                </LazyLoad>
            </div> 
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className='card-text text-secondary'>   
                    <LocationOnIcon className="icons"/>
                    <h5>{props.address}</h5>
                    <LocalPhoneIcon className="icons"/>{props.phone}<br></br>
                    <EmailOutlinedIcon className="icons"/>{props.email}
                </p>
            </div>
        </div>
);
}
export default Card;
