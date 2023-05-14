import React from 'react';
import Card from 'react-bootstrap/Card';

import { useLoaderData } from 'react-router-dom';
import RecipeDetails from '../RecipeDetails';

const Details = () => {
    const details = useLoaderData();
    const{id,picture,name,description,likes,recipesNumber,experience}=details;

    return (
        <div className='mt-5 ms-5 col-10'>
          
           <Card  className='mb-5'>
              <h1 className='text-danger text-center fs-3'>All Chefs</h1>
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
              <RecipeDetails></RecipeDetails>
            
        </div>
    );
};

export default Details;