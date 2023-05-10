import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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
                  <Button variant="success">View Recepies</Button>
                </Card.Body>
              </Card>
            
            
        </div>
    );
};

export default ChefsDisplay;
