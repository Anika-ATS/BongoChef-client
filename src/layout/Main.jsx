// import React from 'react';
import React from "react";
import Header from "../pages/Shared/Header/Header";
// import Footer from "../pages/Shared/Footer/Footer";
import { Container,Row,Col } from "react-bootstrap";
import Banner from "../banner/Banner";
// import Chefs from "../pages/Shared/chefData/Chefs";
// import { Outlet } from "react-router-dom";
import Chefs from "../pages/Shared/chefData/Chefs";
import Rdiv from "../pages/Home/MomentRecipie/Rdiv";




const Main = () => {
    return (
        // <div>
            
            
            <Container className="fluid">
               
                       <Header></Header>
                       <Banner></Banner>
                       <Chefs></Chefs>
                       <Rdiv></Rdiv>
                       {/* <Outlet></Outlet>  */}
                       
            </Container>
            // 
            
        // </div>
    );
};

export default Main;













// import React  from "react";
// import Header from "../pages/Shared/Header/Header";
// import Footer from "../pages/Shared/Footer/Footer";
// import { Container,Row,Col } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel';
// const Main=()=>{
//     return(
//         <div>
//             <Header></Header>
//             {/* <Container>
//                 {/* bannar 
                
//                 <Carousel variant="dark">
                
//                     <Carousel.Item>
//                         <img
//                         className="d-block w-100"
//                         src="holder.js/800x400?text=First slide&bg=f5f5f5"
//                         alt="First slide"
//                         />
//                             <Carousel.Caption>
//                             <h5>First slide label</h5>
//                             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                             </Carousel.Caption>
//                     </Carousel.Item>
//                     <Carousel.Item>
//                         <img
//                         className="d-block w-100"
//                         src="holder.js/800x400?text=Second slide&bg=eee"
//                         alt="Second slide"
//                         />
//                             <Carousel.Caption>
//                                 <h5>Second slide label</h5>
//                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                             </Carousel.Caption>
//                     </Carousel.Item>
//                     <Carousel.Item>
//                         <img
//                         className="d-block w-100"
//                         src="holder.js/800x400?text=Third slide&bg=e5e5e5"
//                         alt="Third slide"
//                         />
//                             <Carousel.Caption>
//                                 <h5>Third slide label</h5>
//                                 <p>
//                                     Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//                                 </p>
//                             </Carousel.Caption>
//                     </Carousel.Item>
//                 </Carousel>
                
//             </Container> */}
//             <Container className="fluid">
//                <Row>
//                    <Col>
//                      <h1>Main Contany</h1>
//                    </Col>
//                </Row>
                
//             </Container>
//             <Footer></Footer>
    
//         </div>

//     );
// };
// export default Main;