import React from 'react';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData();
    const{id,picture,name,description,likes,recipesNumber,experience}=details;

    return (
        <div>
           <Card >
                <div >
                  <Card.Img variant="top" className='object-fit-cover'  src={picture} />
                </div>
                
                <Card.Body>
                  <Card.Title>Name:{name}</Card.Title>
                  <Card.Text>
                    <p>Description:{description}</p>                 
                    <p>Years of experience:{experience}</p>
                    <p>Number of recepies:{recipesNumber}</p>
                    <p>likes:{likes}</p>
                  </Card.Text>
                  
                </Card.Body>
              </Card>
        </div>
    );
};

export default Details;