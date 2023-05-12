import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';

const RecipeDetails = () => {
    const details = useLoaderData();
    const{id,recipe1,recipe2,recipe3,ingredients1,ingredients2,ingredients3,methodOfCokking1,methodOfCokking2,methodOfCokking3}=details;
    return (
        <div>
            
            <CardGroup className='mb-5'>
                
                <Card className='ms-3 '>
                    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                    <Card.Body>
                        <Card.Title>Name:{recipe1}</Card.Title>
                        <Card.Text>
                            <p className='text-wrap '><span className='font-weight-bold'>Ingredients:</span>{ingredients1}</p>
                            <p className='text-wrap '><span>Cooking Procedure:</span>{methodOfCokking1}</p>
                        </Card.Text>
                    </Card.Body>
                    
                </Card >
                {/* //second */}
                <Card >
                    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                    <Card.Body>
                        <Card.Title>Name:{recipe2}</Card.Title>
                        <Card.Text>
                            <p className='text-wrap '>Ingredients:{ingredients2}</p>
                            <p className='text-wrap '>Cooking Procedure:{methodOfCokking2}</p>
                        </Card.Text>
                    </Card.Body>
                
                </Card >
                {/* third */}
                <Card className='me-3'>
                    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                    <Card.Body>
                        <Card.Title>Name:{recipe3}</Card.Title>
                        <Card.Text>
                            <p className='text-wrap '>Ingredients:{ingredients3}</p>
                            <p className='text-wrap '>Cooking Procedure:{methodOfCokking3}</p>
                        </Card.Text>
                    </Card.Body>
                    
                </Card >
                
            </CardGroup>

        </div>
    );
};

export default RecipeDetails;