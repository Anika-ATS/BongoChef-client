import React from 'react';
import Header from '../../Shared/Header/Header';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Header></Header>
            <Container className='w-50 mx-auto mt-5'>
                <Form>
                    <p className='font-italic text-center text-dark font-weight-bold text-uppercase'>Login Here</p>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <br></br>
                    <Form.Text className="text-dark">
                            Don't have an account? Please<Link to='/register'>Register</Link>
                        </Form.Text>
                        <Form.Text className="text-success">
                            
                        </Form.Text>
                    <Form.Text className="text-danger">
                            
                        </Form.Text>
                        
                </Form>
            </Container>
        </div>
    );
};

export default Login;