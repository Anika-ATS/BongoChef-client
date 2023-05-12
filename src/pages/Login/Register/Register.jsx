import React from 'react';
import Header from '../../Shared/Header/Header';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useContext } from 'react';

const Register = () => {
    const {createUser}=useContext(AuthContext);
    //getting form value
    const handleRegister=event=>{
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const photo=form.photo.value;
    const password=form.password.value;

   console.log(name,password,email);

    //create user
     createUser(email,password)
        .then(result=>{
            const createdUser=result.user;
            console.log(createdUser);
        })
        .catch(error=>{
            console.log(error);
        })
   }
    return (
        <div>
            <Header></Header>
            <Container className='w-50 mx-auto mt-5'>
                <Form className='bg-light'onSubmit={handleRegister} >
                    <p className='font-italic text-center text-dark font-weight-bold text-uppercase'>Register Here</p>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter name" required />
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                    </Form.Group>
                    
                    {/* <Form.Group className="mb-3" style={{width: "18rem"}}>
                        <img src="..." className="card-img-top" alt="..."/>
                    </Form.Group> */}
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                    <br></br>
                    <Form.Text className="text-dark">
                            Allready have an account? Please go back to--<Link to='/login'>Login</Link>
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

export default Register;