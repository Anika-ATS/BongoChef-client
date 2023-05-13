import React from 'react';
import Header from "../pages/Shared/Header/Header";

import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from '../pages/Shared/Footer/Footer';
import Blog from '../pages/Login/Login/Blog';


const BlogLayout = () => {
    return (
        
            <div>
                <Container className="fluid">

                    <Header></Header>
                    <Blog></Blog>
                    <Footer></Footer>
                </Container>

            </div>
            );
};

            export default BlogLayout;