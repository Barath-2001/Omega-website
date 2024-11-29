import React from "react"
import {useLocation} from "react-router-dom"
import {Container} from "react-bootstrap"
import LazyLoad from "react-lazy-load";
export default function ProductDetail(props) {
    const location=useLocation();
    const data=location.state?.data;
    return (
        <Container>  
            <div className="card h-100" style={{margin:"30px 10px",maxWidth:"1000px",maxHeight:"1000px"}}>
            <div className="cardContent" >
                <div className='overflow'>
                    <LazyLoad>
                            <img class="detail-img" src={data.url} alt="sample" width="250px" height="300px" />
                    </LazyLoad>
                </div>
                <div >
                    <h5 className="detail-title" >{data.title}</h5>
                    <p className="detail-content" >
                        {data.description}
                    </p>    
                </div>
            </div>
            </div>
        </Container>
    );

}