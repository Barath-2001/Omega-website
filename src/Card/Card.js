import React from 'react'
import Card from "./CardUI";

let data = [
    {
        title:"Coimbatore",
        address: "257, 9th street Extension,100 Feet Road, Gandhipuram[Land mark: Near Preethi Hospital ], Coimbatore  - 641012",
        email: "omegaups@hotmail.com",
        phone: "+91-6382396699"
    },
    {
        title:"Chennai",
        address: "Sona Complex, 1/105, 52nd St, Sarvamangala Colony, Manthope Colony, Ashok Nagar, Chennai, Tamil Nadu 600083",
        email: "omegadigitalsystem@gmail.com",
        phone: "+91-8925252999"
    },
    {
        title:"Salem",
        address: "H2GR+ J5Q, near Rajani polytechnic, Salem, Kombadipatti, Tamil Nadu 637504",
        email: "stalwartsolarsalem@gmail.com",
        phone: "+91-7508778888"
    }
];
function Cards() {
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className='row'>
                <div className = "col-md-4" >
                    <Card h 
                        title={data[0].title} 
                        address={data[0].address}
                        phone={data[0].phone}
                        email={data[0].email}
                    />
                </div>
                <div className="col-md-4" >
                    <Card
                        title={data[1].title}
                        address={data[1].address}
                        phone={data[1].phone}
                        email={data[1].email}
                    />
                </div>
                <div className="col-md-4" >
                    <Card
                        title={data[2].title}
                        address={data[2].address}
                        phone={data[2].phone}
                        email={data[2].email}
                    />
                </div>
            </div>
        </div>
    );
}
export default Cards;