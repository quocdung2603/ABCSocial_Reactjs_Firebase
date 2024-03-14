
import PageEx from "views/guest/PageEx"
import PageExDetails from "views/guest/PageEx/PageExDetails"

export const pageExRoute = [
    {
        path: "/pageEx",
        element: <PageEx />
    },
    {
        path: "/pageEx/:id",
        element: <PageExDetails />,
    },
]