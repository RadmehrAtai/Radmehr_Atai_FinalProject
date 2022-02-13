import Home from "../pages/Home"
import Detail from "../pages/Detail"
import CreateMovie from "../pages/CreateMovie";

const Router = [
    {
        component: <Home/>,
        path: "/",
        title: "Home",
        exact: true,
        isHeaderElement: true
    },
    {
        component: <CreateMovie/>,
        path: "/movie/create",
        exact: true,
        title: "Create Movie",
        isHeaderElement: true
    },
    {
        component: <Detail/>,
        path: "/movie/:id",
        exact: false,
        title: "Detail",
        isHeaderElement: false
    },
]

export default Router