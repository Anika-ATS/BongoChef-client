import React from 'react';
import Card from 'react-bootstrap/Card';
import Marquee from 'react-fast-marquee';
import c1 from "../../../assets/img2/c-1.jpeg";
import c2 from "../../../assets/img2/c-2.jpeg";
import c3 from "../../../assets/img2/c-3.webp";
import c4 from "../../../assets/img2/c-4.jpeg";


const ChefCooking = () => {
    return (
        <div>
            <h1 className='text-danger text-center mb-3 mt-5'>Cooking Process Clips</h1>
            <Marquee speed={30} >
                

                    <Card style={{ width: '18rem' }} className='me-5'>
                        <Card.Img variant="top" className='img-fluid' style={{ height: '16rem' }} src={c1} />
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                {/* All are Bengali thali items. */}
                            </Card.Text>

                        </Card.Body>
                        
                    </Card>
                    <Card style={{ width: '18rem' }} className='me-5'>
                        <Card.Img variant="top" style={{ height: '16rem' }} src={c2} />
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                {/* All are Bengali thali items. */}
                            </Card.Text>

                        </Card.Body>
                        
                    </Card>
                    <Card style={{ width: '18rem' }} className='me-5'>
                        <Card.Img variant="top" style={{ height: '16rem' }} src={c3} />
                        <Card.Body>
                            {/* <Card.Title>Set Menu-1</Card.Title> */}
                            <Card.Text>
                                {/* All are Bengali thali items. */}
                            </Card.Text>

                        </Card.Body>
                        
                    </Card>
                    <Card style={{ width: '18rem' }} className='me-5 mb-5'>
                        <Card.Img variant="top" style={{ height: '16rem' }} src={c4} />
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                
                            </Card.Text>

                        </Card.Body>
                        
                    </Card>
                
            </Marquee>


        </div>
    );
    
};

export default ChefCooking;