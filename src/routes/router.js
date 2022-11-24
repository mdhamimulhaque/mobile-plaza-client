import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import Blog from "../Pages/Blog/Blog";
import Main from "../Layouts/Main";
import SingleCategory from "../Pages/Home/SingleCategory/SingleCategory";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/category/:categoryName',
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.categoryName}`),
                element: < SingleCategory />
            },
            {
                path: '/blog',
                element: <Blog />
            },
        ]
    }
])

export default router;