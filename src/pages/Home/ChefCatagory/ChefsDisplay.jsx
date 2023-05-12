import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const ChefsDisplay = (props) => {
    const{id,picture,name,experience,recipesNumber,likes}=props.chefs;

    // console.log(props,id,picture,name,experience,recipesNumber,likes);
    return (
        <div className='col-4 mb-4 mt-5'>

              <Card style={{ width: '20rem' }}>
                <div >
                  <Card.Img variant="top" className='object-fit-cover' style={{ width:'100%' ,height: '16rem'}}  src={picture} />
                </div>
                
                <Card.Body>
                  <Card.Title>Name:{name}</Card.Title>
                  <Card.Text>
                  
                      <p>Years of experience:{experience}</p>
                      <p>Number of recepies:{recipesNumber}</p>
                      <p>likes:{likes}</p>
                  </Card.Text>
                  <Button variant="primary" ><Link className="text-decoration-none link-light" to={`/details/${id}`}>View Recepies</Link></Button>
                </Card.Body>
              </Card>
            
            
        </div>
    );
};

export default ChefsDisplay;
