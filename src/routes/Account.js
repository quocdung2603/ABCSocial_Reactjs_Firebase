import Index from "views/guest/Account";
import Login from "views/guest/Account/Login";
export const Account= [
    {
        path:'/Account/index',
        element: <Index />
    },
    {
        path: '/Account/Login',
        element: <Login/>
    }
]