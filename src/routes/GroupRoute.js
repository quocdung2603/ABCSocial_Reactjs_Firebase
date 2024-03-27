import Group from "antd/es/input/Group";
import Index from "views/guest/Group";
import ListEvent from "views/guest/Group/ListEvent";
import ListFriend from "views/guest/Group/ListFriend";
export const GroupRoute = [
    {
        path:'/Group/index',
        element: <Index />
    },
    {
        path: '/Test/Banbe',
        element: <ListFriend/>
    },
    {
        path: '/Test/ListEvent',
        element: <ListEvent/>
    }
]