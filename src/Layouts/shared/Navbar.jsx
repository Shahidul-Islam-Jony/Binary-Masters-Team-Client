// Modules
import logo from "../../assets/binary.png";
import { NavLink, Link } from "react-router-dom";

const linksList = [
	{ label: "Home", link: "/" },
	{ label: "News", link: "/news" },
	{ label: "Blog", link: "/blog" },
	{ label: "Projects", link: "/projects" },
];

export default function Navbar() {
	const activeStyle = "text-red-400 hover:text-red-500 font-semibold";

	return (
		<div className="mx-4 border-b border-rich-black-700">
			<nav className="container mx-auto navbar">
				
				{/* Team Logo */}
				<div className="navbar-start">
					<Link className="btn space-x-4 btn-ghost" to="/">
						<img src={ logo } className="w-12 h-12 rounded-lg"/>
						<p className="text-3xl">Binary Masters</p>
					</Link>
				</div>
				
				{/* Routes */}
				<div className="navbar-center gap-6">
					{linksList.map((item) => (
						<NavLink
							key={item}
							to={item.link}
							className={({ isActive }) => {
								return `leading-6 text-base 
										${isActive ? activeStyle : "text-rich-black-25"}
									`;
							}}
						>
							{item.label}
						</NavLink>
					))}
				</div>
				
				{/* Authentication status */}
				<div className="navbar-end gap-5">
					<div>
						<NavLink to="/login" className="p-4 border rounded-lg">Login</NavLink>
						{/* <Button paddingY={8} paddingX={12} type="secondary" text="Sign Up"/> */}
						{/* <img src={ defaultDP } className="block w-8 h-8 rounded-full"/> */}
					</div>
				</div>
			</nav>
		</div>
	);
}
