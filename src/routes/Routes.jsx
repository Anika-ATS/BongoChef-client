import { Navigate, createBrowserRouter} from "react-router-dom";

import  Main from "../layout/Main";

import Chefs from "../pages/Shared/chefData/Chefs";
import ChefsDetailsLayout from "../layout/ChefsDetailsLayout";
import Details from "../pages/Details/Details/Details";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import BlogLayout from "../layout/BlogLayout";
import Blog from "../pages/Login/Login/Blog";

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
                loader:({params})=>fetch(`https://bongo-chef-new-server-anika-ats.vercel.app/details/${params.id}`)
                // loader:({params})=>fetch(`http://localhost:5000/details/${params.id}`)

            }
           
        ]
    },
    {
        path:'blog',
        element:<BlogLayout></BlogLayout>,
        children:[
            {
                path:':id',
                element:<Blog></Blog>
            }
           
        ]
    }
   
    
 ])
 export default router;