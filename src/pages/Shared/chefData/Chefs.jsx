import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ChefsDisplay from '../../Home/ChefCatagory/ChefsDisplay';

const Chefs = () => {
    
    const [chefData, setChefData]=useState([]);
    useEffect(()=>{
        fetch("https://bongo-chef-new-server.vercel.app/chefData")
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