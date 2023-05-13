import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="navbar navbar-default navbar-fixed-bottom footer bg-light text-dark">
            <div className="card-header">
            <h4 className="card-title">Bangladeshi cusine </h4>
                
            </div> 
            <div className="card-body">           
                
                <div className="d-flex justify-content-around">
                    <div>
                    <p className="mt-4 card-text text-wrap col-8">Bangladesh has so many foodie
                    people with traditional cusine,give a visit to BongoChef and fimiliar with their services.</p>
                    <a href="#" className="btn btn-primary " ><Link to='/login' className=" text-white text-decoration-none">JoinWithUs</Link></a>
                    </div>
                    <div className="col-4 ">
                      <h3>Usefull Link</h3>
                       <ul className="py-2">
                        <li href="/">Home</li>
                        <li href="/blog">Blog</li>                        
                       </ul>
                      
                    </div>
                   
                    
                  </div>
            </div>

                
            
            </div>
        

    );
};
export default Footer;



