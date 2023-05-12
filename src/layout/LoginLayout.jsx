import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const LoginLayout = () => {
    return (
        <div>
            <Container>
            {/* <Header></Header> */}
            <Outlet></Outlet>
            </Container>
        </div>
    );
};

export default LoginLayout;