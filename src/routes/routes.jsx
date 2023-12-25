import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import Home from "./../pages/Home/Home";
import About from "./../pages/About/About";
import Contact from "./../pages/Contact/Contact";
import SingUp from "./../pages/Auth/SignUp/SingUp";
import NotFound from "../pages/NotFound/NotFound";
import Users from "../pages/Users/Users";
import UserDetails from "../component/UserDetails/UserDetails";
import Error from "../component/Error/Error";
import Login from './../pages/Auth/Login/Login';
import ErrorPage from "../component/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/users",
        element: <PrivateRoutes>
          <Users />
        </PrivateRoutes>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users/"),
        errorElement: <Error />,
      },
      {
        path: "users/:userId",
        element: <UserDetails />,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
          errorElement:<ErrorPage/>
      },
    ],
  },
  {
    path: "/login", 
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SingUp />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
export default routes;
