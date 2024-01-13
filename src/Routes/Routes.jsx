import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		errorElement:<Error></Error>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{ path: "/blog", element: <h1>Blog path under construction</h1> },
			{ path: "/news", element: <h1>News path under construction</h1> },
			{ path: "/login", element: <h1>Login path under construction</h1> },
			{ path: "/register", element: <h1>Register path under construction</h1> },
			{ path: "/projects", element: <h1>Projects path under construction</h1> },
		],
	},
]);

export default routes;

