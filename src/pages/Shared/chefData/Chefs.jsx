import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ChefsDisplay from '../../Home/ChefCatagory/ChefsDisplay';

const Chefs = () => {
    
    const [chefData, setChefData]=useState([]);
    useEffect(()=>{
        // fetch("http://localhost:5000/chefData")
        fetch("https://bongo-chef-new-server-anika-ats.vercel.app/chefData")
            .then(res=>res.json())
            .then(data=>setChefData(data))
            
            .catch(error=>console.log(error))

     },[])
    
    return (
        <div>

            <Container className='row mb-4'>
                <h1 className='text-danger text-center fs-3 '>Our Chefs</h1>
               
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