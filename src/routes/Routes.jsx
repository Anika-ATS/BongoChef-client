import { Navigate, createBrowserRouter} from "react-router-dom";

import  Main from "../layout/Main";
// import Home from "../pages/Home/Home/home";
// import Home from "../pages/Home/Home/Home";
import Chefs from "../pages/Shared/chefData/Chefs";
import ChefsDetailsLayout from "../layout/ChefsDetailsLayout";
import Details from "../pages/Details/Details/Details";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
// import Main from "../layout/Main";

// import Blog from "../pages/Shared/Blog/Blog";
 const router= createBrowserRouter([ 
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'/',
                element:<Main></Main>

            },
            {
                path:'login',
                element:<Login></Login>,

            },
            {

                path:'register',
                element:<Register></Register>
            }
        ]

    },

    {
        path:'/',
        element:<Main></Main>,

        children:[   
       
        {
            path:'/chefs',
            element:<Chefs></Chefs>
           

        }, 
        

    ]
    },
    //chefsDetails
    {
        path:'details',
        element:<ChefsDetailsLayout></ChefsDetailsLayout>,
        children:[
            {
                path:':id',
                element:<PrivateRoute><Details></Details></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/details/${params.id}`)

            }
           
        ]
    }
   
    
 ])
 export default router;