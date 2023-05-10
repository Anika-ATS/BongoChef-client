import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ChefsDisplay from '../../Home/ChefCatagory/ChefsDisplay';
                  

// import { useLoaderData, useParams } from 'react-router-dom';

const Chefs = () => {
    // const {id}=useParams();
    // loader:({params})=>
    // fetch(`http://localhost:5000/chefData/${params.id}`)
    // const chefData=useLoaderData();
    const [chefData, setChefData]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/chefData")
            .then(res=>res.json())
            .then(data=>setChefData(data))
            .catch(error=>console.log(error))

     },[])
    
    return (
        <div>

            <Container className='row mb-4'>
               
               {
                  chefData.map(chefs=><ChefsDisplay
                      
                      key={chefs.id}
                      chefs={chefs}

                  ></ChefsDisplay>)
               
               }

          </Container>
            
        </div>
    );
};

export default Chefs;