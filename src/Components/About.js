import React,{useState} from "react";
import {Container} from "react-bootstrap";
function About(){
    const [isOpen,SetIsOpen]=useState(false)
//about us with read more
    return(
        <Container>
        <div class="card cus " id='about' style={{maxWidth:`1200px`}}>
            <div class="card-body">
                <h5 class="card-title" ><span className="green">About</span> US</h5>
                <p class={isOpen ?"card-text1":"card-text text"}>
                    Omega Digital UPS is a pioneering force in the field of Lithium UPS (Uninterruptible Power Supply) and battery manufacturing. With a commitment to innovation and excellence, Omega Digital UPS has established itself as a leader in providing cutting-edge power solutions for a diverse range of industries and applications.
                    <br/>
                    At the heart of Omega Digital UPS's offerings is the utilization of advanced Lithium battery technology. Lithium UPS systems are renowned for their high energy density, longer lifespan, and compact design compared to traditional lead-acid batteries. This technological advantage ensures that Omega Digital UPS products deliver reliable and efficient power backup solutions for critical applications where uninterrupted power is paramount.
                    <br/>
                    The product portfolio of Omega Digital UPS extends beyond Lithium UPS systems, encompassing a comprehensive range of power management solutions. From uninterruptible power supplies for various applications to state-of-the-art battery technologies, the company is dedicated to meeting the diverse power needs of its customers.                
                </p>
                <button onClick={() => SetIsOpen(!isOpen)} class="Read-btn btn-primary">{isOpen ? 'Read Less' :'Read More'}</button>
            </div>
        </div>
        </Container>
    );
}

export default About;
