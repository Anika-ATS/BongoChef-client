import React from 'react';
import Card from 'react-bootstrap/Card';
import Marquee from 'react-fast-marquee';
import r1 from "../../../assets/img/img1.jpg";
import r2 from "../../../assets/img/img2.webp";
import r3 from "../../../assets/img/img4.jpg";


//this is for marquee of receipe div in home page
const Rdiv = () => {
    return (
        <div>
            <h1 className='text-danger text-center mb-3'>Reciepies</h1>
            <Marquee speed={50} >
                

                    <Card style={{ width: '18rem' }} className=' me-5'>
                        <Card.Img variant="top" style={{ height: '8rem' }} src={r1} />
                        <Card.Body>
                            <Card.Title>Set Menu-1</Card.Title>
                            <Card.Text>
                                All are Bengali thali items.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className='me-5'>
                        <Card.Img variant="top" style={{ height: '8rem' }} src={r2} />
                        <Card.Body>
                            <Card.Title>Set Menu-2</Card.Title>
                            <Card.Text>
                                Fried Rice with Special Fish
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className='me-5'>
                        <Card.Img variant="top" style={{ height: '8rem' }} src={r3} />
                        <Card.Body>
                            <Card.Title>Set Menu-3</Card.Title>
                            <Card.Text>
                                Bangali Thali items.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                
            </Marquee>


        </div>
    );
};

export default Rdiv;