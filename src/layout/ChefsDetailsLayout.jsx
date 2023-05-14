import React from 'react';
import Header from "../pages/Shared/Header/Header";
// import Footer from "../pages/Shared/Footer/Footer";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from '../pages/Shared/Footer/Footer';


const ChefsDetailsLayout = () => {
    return (
        <div>
            <Container className="fluid mt-5">
               
               <Header></Header>
               <Outlet></Outlet> 
               <Footer></Footer>
            </Container>
            
        </div>
    );
};

export default ChefsDetailsLayout;