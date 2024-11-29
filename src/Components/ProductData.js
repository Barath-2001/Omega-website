/* eslint-disable no-unused-vars */
import React,{useState} from "react";  
import {Link} from "react-router-dom";
import LazyLoad from "react-lazy-load";
export default function ProductData(props) {
    const [data,SetData] = useState({
        url:props.url,
        title:props.name,
        description:props.description
    });
    return (
        <div className="card  " style={{maxHeight:"520px",height:"420px"}}>
            <LazyLoad>
                <img className="product--image" src={props.url} alt="product" width="100%"  height="250"/>
            </LazyLoad>
            <h2>{props.name}</h2>
            <Link className="mt-auto" to="/product-detail" state={{data:data}} >
                <button >Add to Cart</button>
            </Link>
        </div>
    );
}
