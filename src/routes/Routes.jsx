import { createBrowserRouter} from "react-router-dom";

import  Main from "../layout/Main";
// import Home from "../pages/Home/Home/home";
import Home from "../pages/Home/Home/Home";
import Chefs from "../pages/Shared/chefData/Chefs";
import ChefsDetailsLayout from "../layout/ChefsDetailsLayout";
import Details from "../pages/Details/Details/Details";
 const router= createBrowserRouter([ 

    {
        path:'/',
        element:<Main></Main>,

        children:[
        {
            path:'/',
            element:<Home></Home>

        },
        {
            path:'/chefs',
            element:<Chefs></Chefs>,
           

        }

    ]
    },
    //chefsDetails
    {
        path:'details',
        element:<ChefsDetailsLayout></ChefsDetailsLayout>,
        children:[
            {
                path:':id',
                element:<Details></Details>,
                loader:({params})=>fetch(`http://localhost:5000/details/${params.id}`)

            }
        ]
    }
    
 ])
 export default router;