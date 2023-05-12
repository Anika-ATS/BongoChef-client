import React from 'react';
import Header from "../pages/Shared/Header/Header";
// import Footer from "../pages/Shared/Footer/Footer";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
// import Banner from "../banner/Banner";
// import Chefs from "../pages/Shared/chefData/Chefs";

// import Chefs from "../pages/Shared/chefData/Chefs";
// import Rdiv from "../pages/Home/MomentRecipie/Rdiv";
// import ChefCooking from "../pages/Home/MomentRecipie/ChefCooking";

const ChefsDetailsLayout = () => {
    return (
        <div>
            <Container className="fluid">
               
               <Header></Header>
               <Outlet></Outlet> 
               
    </Container>
            
        </div>
    );
};

export default ChefsDetailsLayout;