import React from 'react';
import Header from '../../Shared/Header/Header';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import {FaGoogle} from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import SocialLogin from '../../Shared/SocialLogin';

const Login = () => {
    const {SignInUser, githubSignIn}=useContext(AuthContext);
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

     // github
    const handleGithubSignIn=()=>{
        githubSignIn ()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            navigate(from, { replace: true });
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
                    <Button className='mb-2' variant="primary" type="submit">
                        Login
                    </Button>
                    <p className="mx-auto text-fuchsia-950 font-bold mb-3">Social Sign in</p>
                      
                    <div className='grid grid-cols-2'>
                   
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <button onClick={handleGithubSignIn} className="btn btn-outline btn-primary ">
                    <FaGoogle></FaGoogle>
                    </button>
                    <SocialLogin></SocialLogin>

                       {/* ggl and github signin */}
                     
                        
                    </Form.Group>
                    </div>

                    
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