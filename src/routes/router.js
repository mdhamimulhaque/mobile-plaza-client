import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import Blog from "../Pages/Blog/Blog";
import Main from "../Layouts/Main";
import SingleCategory from "../Pages/Home/SingleCategory/SingleCategory";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyProducts from "../Pages/DashBoard/MyProducts/MyProducts";
import MyBuyers from "../Pages/DashBoard/MyBuyers/MyBuyers";




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
                path: '/categories',
                element: <CategoryPage />
            },
            {
                path: '/category/:categoryName',
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.categoryName}`),
                element: <PrivateRoute>
                    < SingleCategory />
                </PrivateRoute>

            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/registration',
                element: <Registration />
            },
            {
                path: '/log-in',
                element: <Login />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard/my-products',
                element: <MyProducts />
            },
            {
                path: '/dashboard/my-buyers',
                element: <MyBuyers />
            },

        ]
    }
])

export default router;