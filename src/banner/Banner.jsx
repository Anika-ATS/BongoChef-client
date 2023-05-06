import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from "react-bootstrap";
// import Marquee from "react-fast-marquee";/

import a from '../assets/img/img1.jpg';
import b from '../assets/img/img2.webp';
import c from '../assets/img/img5.webp';

const Banner = () => {
    return (
        <div>
            {/* <h1>Main Contano</h1> */}
            
            {/* <Marquee speed={60}> */}
            <div className='w-full h-50'>
             <Container >
                {/* bannar*/} 
                
                
                <Carousel variant="dark">
                
                    <Carousel.Item>
                         <img
                        className="d-block w-100"
                        src={a}
                        alt="First slide"
                         />
                            {/* <Carousel.Caption>
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 "
                        src={b}
                        alt="Second slide"
                        />
                            {/* <Carousel.Caption>
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100  h-100 "
                        src={c}
                        alt="Third slide"
                        />
                            {/* <Carousel.Caption>
                                <h5>Third slide label</h5>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            
                
            </Container> 
            </div>
            {/* </Marquee> */}
        </div>
    );
};

export default Banner;