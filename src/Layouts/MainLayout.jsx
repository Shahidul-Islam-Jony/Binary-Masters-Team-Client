import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";

const MainLayout = () => {
	return (
		<div className="w-11/12 mx-auto">
			<Navbar/>
			<Outlet></Outlet>
		</div>
	);
};

export default MainLayout;

