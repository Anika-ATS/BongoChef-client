import { createBrowserRouter} from "react-router-dom";

import  Main from "../layout/Main";
import Home from "../pages/Home/Home/home";
// import home from "../pages/Home/Home/home";
 const router= createBrowserRouter([ 

    {
        path:'/',
        element:<Main></Main>,

        children:[
        {
            path:'/',
            element:<Home></Home>

        }
    ]
    }
 ])
 export default router;