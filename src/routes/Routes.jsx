import { createBrowserRouter} from "react-router-dom";

import  Main from "../layout/Main";
// import Home from "../pages/Home/Home/home";
import Home from "../pages/Home/Home/Home";
import Chefs from "../pages/Shared/chefData/Chefs";
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
            // loader:({params})=>fetch(`http://localhost:5000/chefData/${params.id}`)

        }

    ]
    }
 ])
 export default router;