
import Fanpage from "views/guest/Fanpage"
const fanpageRoute = [
    {
        path: ":uid",
        layout: "/user",
        element: <Fanpage />
    },
    {
        path: ":uid/followers",
        layout: "/user",
        element: <Fanpage />
    },
    {
        path: ":uid/friends_likes",
        layout: "/user",
        element: <Fanpage />
    },
]
export default fanpageRoute;