import React from 'react';
import Header from '../../Shared/Header/Header';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {FaGoogle,FaGithub} from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {
    const {SignInUser}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    console.log('bye',location);
    const from=location.state?.from?.pathname||'/';

    const handleLogIn=event=>{
        event.preventDefault();
        const form=event.target;
        
        const email=form.email.value;
   
        const password=form.password.value;
    
       console.log(password,email);
    
        //create user
        SignInUser(email,password)
            .then(result=>{
                const LogInUser=result.user;
                console.log(LogInUser);
                navigate(from,{replace:true});
            })
            .catch(error=>{
                console.log(error);
            })
       }




    return (
        <div>
            <Header></Header>
            <Container className='w-50 mx-auto mt-5'>
                <Form onSubmit={ handleLogIn}>
                    <p className='font-italic text-center text-dark font-weight-bold text-uppercase'>Login Here</p>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                       <Button variant="outline-primary mb-3"><FaGoogle className='me-2'></FaGoogle> Login-With-Google</Button>
                       <br></br>
                       <Button variant="outline-primary "><FaGithub className='me-2'></FaGithub>Login-With-GitHub</Button>
                        
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <br></br>
                    <Form.Text className="text-dark">
                            Don't have an account? Please--<Link to='/register'>Register</Link>
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