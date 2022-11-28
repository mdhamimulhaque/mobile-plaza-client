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
import AllSellers from "../Pages/DashBoard/AllSellers/AllSellers";
import AddProduct from "../Pages/DashBoard/AddProduct/AddProduct";
import AllBuyers from "../Pages/DashBoard/AllBuyers/AllBuyers";
import AdminRoute from "./AdminRoute/AdminRoute";
import SellerRoute from "./SellerRoute/SellerRoute";
import Dashboard from "../Pages/DashBoard/Dashboard/Dashboard";
import MyOrders from "../Pages/DashBoard/MyOrders/MyOrders";
import BuyersRoute from "./BuyersRoute/BuyersRoute";
import MyWishList from "../Pages/DashBoard/MyWishList/MyWishList";
import CheckOut from "../Pages/DashBoard/CheckOut/CheckOut";




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
                loader: ({ params }) => fetch(`https://mobile-plaza-server.vercel.app/products/${params.categoryName}`),
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
        errorElement: <Error />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/dashboard/my-orders',
                element: <BuyersRoute>
                    <MyOrders />
                </BuyersRoute>
            },
            {
                path: '/dashboard/my-wishlist',
                element: <BuyersRoute>
                    <MyWishList />
                </BuyersRoute>
            },
            {
                path: '/dashboard/checkout',
                element: <BuyersRoute>
                    <CheckOut />
                </BuyersRoute>
            },
            {
                path: '/dashboard/my-products',
                element: <SellerRoute>
                    <MyProducts />
                </SellerRoute>
            },
            {
                path: '/dashboard/my-buyers',
                element: <SellerRoute>
                    <MyBuyers />
                </SellerRoute>
            }, {
                path: '/dashboard/add-product',
                element: <SellerRoute>
                    <AddProduct />
                </SellerRoute>
            },
            {
                path: '/dashboard/all-sellers',
                element: <AdminRoute>
                    <AllSellers />
                </AdminRoute>
            },
            {
                path: '/dashboard/all-buyers',
                element: <AdminRoute>
                    <AllBuyers />
                </AdminRoute>
            },

        ]
    }
])

export default router;